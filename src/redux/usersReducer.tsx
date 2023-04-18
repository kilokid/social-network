import { getUserRequest, followUserRequest, unfollowUserRequest } from "../api/api";
import { UserType} from "../types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';



const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                }),
            }
        case SET_USERS:
            return {...state, users: [...action.users]};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.usersCount};
        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

const followUnfollowFlow = async (userId: number, apiMethod: any, dispatch: any, actionCreator: any) => {
    dispatch(setFollowingInProgressActionCreator(true, userId));
    const data = await apiMethod(userId)

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }

    dispatch(setFollowingInProgressActionCreator(false, userId));
}

type FollowType = {
    type: typeof FOLLOW,
    userId: number
}
export const followActionCreator = (userId: number): FollowType => ({type: FOLLOW, userId});

type unFollowType = {
    type: typeof UNFOLLOW,
    userId: number
}
export const ulfollowActionCreator = (userId: number): unFollowType => ({type: UNFOLLOW, userId});

type setUsersType = {
    type: typeof SET_USERS,
    users: Array<UserType>
}
export const setUsersActionCreator = (users: Array<UserType>): setUsersType => ({type: SET_USERS, users});

type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    pageNumber: number
}
export const setCurrentPageActionCreator = (pageNumber: number): setCurrentPageType => ({type: SET_CURRENT_PAGE, pageNumber});

type setTotalUsersType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    usersCount: number
}
export const setTotalUsersCountActionCreator = (usersCount: number): setTotalUsersType => ({type: SET_TOTAL_USERS_COUNT, usersCount});

type setIsFetchingType = {
    type: typeof SET_IS_FETCHING,
    isFetching: boolean
}
export const setIsFetchingActionCreator = (isFetching: boolean): setIsFetchingType => ({type: SET_IS_FETCHING, isFetching});

type setFollowingInProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}
export const setFollowingInProgressActionCreator = (isFetching: boolean, userId: number): setFollowingInProgressType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(setIsFetchingActionCreator(true));
        const data = await getUserRequest(currentPage, pageSize)
        
        dispatch(setUsersActionCreator(data.items));
        dispatch(setTotalUsersCountActionCreator(data.totalCount));
        dispatch(setIsFetchingActionCreator(false));

    }
}

export const followOnUserThunkCreator = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(userId, followUserRequest, dispatch, followActionCreator);
    }
}

export const unFollowOnUserThunkCreator = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(userId, unfollowUserRequest, dispatch, ulfollowActionCreator);
    }
}

export default usersReducer;