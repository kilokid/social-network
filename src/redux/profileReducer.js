import { getUserProfileRequest, getProfilerStatusRequest, setProfileStatusRequest, setProfilePhotosRequest, setProfileInfoRequest } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-STATUS';
const SAVE_PHOTOS_SUCCESS = 'SAVE-PHOTOS-SUCCESS';

let idNumber = 3;

const initialState = {
    postsData: [
        {
            id: '0',
            text: '%@^(!#(',
            likes: '14'
        },
        {
            id: '1',
            text: '***',
            likes: '234'
        },
        {
            id: '2',
            text: 'Where a u??',
            likes: '2'
        }
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            const newPosts = {
                id: idNumber,
                text: action.newPost.postText,
                likes: '0'
            }

            idNumber++;

            return {
                ...state,
                postsData: [...state.postsData, newPosts],
                postText: '',
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.userProfile,
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(post => post.id !== action.id),
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case SAVE_PHOTOS_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (data) => ({type: ADD_POST, newPost: {...data}});
export const deletePostActionCreator = (id) => ({type: DELETE_POST, id});

export const setUserProfileActionCreator = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export const setProfileStatusActionCreator = (status) => ({type: SET_STATUS, status});
export const setProfilePhotosActionCreator = (photos) => ({type: SAVE_PHOTOS_SUCCESS, photos});

export const getUserProfileThunkCreator = (userId) => {
    return async (dispatch) => {
        const data = await getUserProfileRequest(userId)
        
        dispatch(setUserProfileActionCreator(data));
    }
}

export const getProfileStatusThunkCreator = (userId) => {
    return async (dispatch) => {
        const data = await getProfilerStatusRequest(userId);
        
        dispatch(setProfileStatusActionCreator(data));
    }
}

export const setProfileStatusThunkCreator = (status) => {
    return async (dispatch) => {
        const data = await setProfileStatusRequest(status);
        
        if (data.resultCode === 0)
        {
            dispatch(setProfileStatusActionCreator(status));
        }
    }
}

export const savePhotosThunkCreator = (file) => {
    return async (dispatch) => {
        const data = await setProfilePhotosRequest(file);
        
        if (data.resultCode === 0)
        {
            dispatch(setProfilePhotosActionCreator(data.data.photos));
        }
    }
}

export const saveProfileInfoThunkCreator = (profile, userId) => {
    return async (dispatch) => {
        const data = await setProfileInfoRequest(profile);
        
        if (data.resultCode === 0)
        {
            dispatch(getUserProfileThunkCreator(userId));
        }
    }
}

export default profileReducer;