import { getUserProfileRequest, getProfilerStatusRequest, setProfileStatusRequest, setProfilePhotosRequest, setProfileInfoRequest } from '../api/api';

import { PhotosType, PostDataType, ProfileType } from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-STATUS';
const SAVE_PHOTOS_SUCCESS = 'SAVE-PHOTOS-SUCCESS';

let idNumber = 3;

type InitialStateType = {
    postsData: Array<PostDataType>,
    profile: null | ProfileType,
    status: string
}

const initialState: InitialStateType = {
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

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
                profile: {...state.profile, photos: action.photos} as ProfileType,
            }
        }
        default:
            return state;
    }
}

type AddPostType = {
    type: typeof ADD_POST,
    newPost: PostDataType
}
export const addPostActionCreator = (data: Object): AddPostType => ({type: ADD_POST, newPost: {...data}});

type DeletePostType = {
    type: typeof DELETE_POST,
    id: string
}
export const deletePostActionCreator = (id: string): DeletePostType => ({type: DELETE_POST, id});

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    userProfile: ProfileType
}
export const setUserProfileActionCreator = (userProfile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, userProfile});

type SetProfileStatusType = {
    type: typeof SET_STATUS,
    status: string
}
export const setProfileStatusActionCreator = (status: string): SetProfileStatusType => ({type: SET_STATUS, status});

type SetProfilePhotosType = {
    type: typeof SAVE_PHOTOS_SUCCESS,
    photos: PhotosType
}
export const setProfilePhotosActionCreator = (photos: PhotosType): SetProfilePhotosType => ({type: SAVE_PHOTOS_SUCCESS, photos});

export const getUserProfileThunkCreator = (userId: string) => {
    return async (dispatch: any) => {
        const data = await getUserProfileRequest(userId)
        
        dispatch(setUserProfileActionCreator(data));
    }
}

export const getProfileStatusThunkCreator = (userId: string) => {
    return async (dispatch: any) => {
        const data = await getProfilerStatusRequest(userId);
        
        dispatch(setProfileStatusActionCreator(data));
    }
}

export const setProfileStatusThunkCreator = (status: string) => {
    return async (dispatch: any) => {
        try {
            const data = await setProfileStatusRequest(status);
            
            if (data.resultCode === 0)
            {
                dispatch(setProfileStatusActionCreator(status));
            }
        } catch(error) {
            console.error(`Возникла ошибка ${error}`)
        }
    }
}

export const savePhotosThunkCreator = (file: any) => {
    return async (dispatch: any) => {
        const data = await setProfilePhotosRequest(file);
        
        if (data.resultCode === 0)
        {
            dispatch(setProfilePhotosActionCreator(data.data.photos));
        }
    }
}

export const saveProfileInfoThunkCreator = (profile: ProfileType, userId: string) => {
    return async (dispatch: any) => {
        const data = await setProfileInfoRequest(profile);
        
        if (data.resultCode === 0)
        {
            dispatch(getUserProfileThunkCreator(userId));
        }
    }
}

export default profileReducer;