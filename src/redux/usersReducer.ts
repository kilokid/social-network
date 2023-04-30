import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { getUserRequest, followUserRequest, unfollowUserRequest } from "../api/api.tsx";
import { UserType} from "../types/types";

import { AppStateType, InferActionsTypes } from "./reduxStore";

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch(action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                }),
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                }),
            }
        case 'SET_USERS':
            return {...state, users: [...action.users]};
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.pageNumber};
        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.usersCount};
        case 'SET_IS_FETCHING':
            return {...state, isFetching: action.isFetching};
        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
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
    dispatch(actions.setFollowingInProgressActionCreator(true, userId));
    const data = await apiMethod(userId)

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }

    dispatch(actions.setFollowingInProgressActionCreator(false, userId));
}

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    followActionCreator: (userId: number) => ({type: 'FOLLOW', userId} as const),
    ulfollowActionCreator: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsersActionCreator: (users: Array<UserType>) => ({type: 'SET_USERS', users} as const),
    setCurrentPageActionCreator: (pageNumber: number) => ({type: 'SET_CURRENT_PAGE', pageNumber} as const),
    setTotalUsersCountActionCreator: (usersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', usersCount} as const),
    setIsFetchingActionCreator: (isFetching: boolean) => ({type: 'SET_IS_FETCHING', isFetching} as const),
    setFollowingInProgressActionCreator: (isFetching: boolean, userId: number) => ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.setIsFetchingActionCreator(true));
        const data = await getUserRequest(currentPage, pageSize)
        
        dispatch(actions.setUsersActionCreator(data.items));
        dispatch(actions.setTotalUsersCountActionCreator(data.totalCount));
        dispatch(actions.setIsFetchingActionCreator(false));
    }
}

export const followOnUserThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        followUnfollowFlow(userId, followUserRequest, dispatch, actions.followActionCreator);
    }
}

export const unFollowOnUserThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        followUnfollowFlow(userId, unfollowUserRequest, dispatch, actions.ulfollowActionCreator);
    }
}

export default usersReducer;