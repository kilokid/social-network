import { ThunkAction } from 'redux-thunk';
import { getUserProfileRequest, getProfilerStatusRequest, setProfileStatusRequest, setProfilePhotosRequest, setProfileInfoRequest } from '../api/api';

import { PhotosType, PostDataType, ProfileType } from "../types/types";
import { AppStateType } from './reduxStore';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-STATUS';
const SAVE_PHOTOS_SUCCESS = 'SAVE-PHOTOS-SUCCESS';

let idNumber = 3;

type InitialStateType = {
    postsData: Array<PostDataType>,
    profile: null | ProfileType,
    status: string,
    postText?: string | null
}

const initialState: InitialStateType = {
    postsData: [
        {
            id: 0,
            postText: '%@^(!#(',
            likes: '14'
        },
        {
            id: 1,
            postText: '***',
            likes: '234'
        },
        {
            id: 2,
            postText: 'Where a u??',
            likes: '2'
        }
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch(action.type) {
        case ADD_POST: {
            const newPosts = {
                id: idNumber,
                postText: action.newPost.postText,
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

type ActionsTypes = AddPostType | DeletePostType | SetUserProfileType | SetProfileStatusType | SetProfilePhotosType;

type AddPostType = {
    type: typeof ADD_POST,
    newPost: PostDataType
}
export const addPostActionCreator = (data: PostDataType): AddPostType => ({type: ADD_POST, newPost: {...data}});

type DeletePostType = {
    type: typeof DELETE_POST,
    id: number
}
export const deletePostActionCreator = (id: number): DeletePostType => ({type: DELETE_POST, id});

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

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const getUserProfileThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        const data = await getUserProfileRequest(userId)
        
        dispatch(setUserProfileActionCreator(data));
    }
}

export const getProfileStatusThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        const data = await getProfilerStatusRequest(userId);
        
        dispatch(setProfileStatusActionCreator(data));
    }
}

export const setProfileStatusThunkCreator = (status: string): ThunkType => {
    return async (dispatch) => {
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

export const savePhotosThunkCreator = (file: HTMLInputElement): ThunkType => {
    return async (dispatch) => {
        const data = await setProfilePhotosRequest(file);
        
        if (data.resultCode === 0)
        {
            dispatch(setProfilePhotosActionCreator(data.data.photos));
        }
    }
}

export const saveProfileInfoThunkCreator = (profile: ProfileType, userId: number): ThunkType => {
    return async (dispatch) => {
        const data = await setProfileInfoRequest(profile);
        
        if (data.resultCode === 0)
        {
            dispatch(getUserProfileThunkCreator(userId));
        }
    }
}

export default profileReducer;