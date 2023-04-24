import { ThunkAction } from 'redux-thunk';
import { getUserProfileRequest, getProfilerStatusRequest, setProfileStatusRequest, setProfilePhotosRequest, setProfileInfoRequest } from '../api/api.tsx';

import { PhotosType, PostDataType, ProfileType } from "../types/types";
import { AppStateType, InferActionsTypes } from './reduxStore';

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
        case 'ADD_POST': {
            const newPosts = {
                id: idNumber,
                postText: action.newPost.postText,
                likes: '0'
            }

            idNumber++;

            return {
                ...state,
                postsData: [...state.postsData, newPosts],
            }
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.userProfile,
            }
        }
        case 'DELETE_POST': {
            return {
                ...state,
                postsData: state.postsData.filter(post => post.id !== action.id),
            }
        }
        case 'SET_STATUS': {
            return {
                ...state,
                status: action.status,
            }
        }
        case 'SAVE_PHOTOS_SUCCESS': {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType,
            }
        }
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    addPostActionCreator: (data: PostDataType) => ({type: 'ADD_POST', newPost: {...data}} as const),
    deletePostActionCreator: (id: number) => ({type: 'DELETE_POST', id} as const),
    setUserProfileActionCreator: (userProfile: ProfileType) => ({type: 'SET_USER_PROFILE', userProfile} as const),
    setProfileStatusActionCreator: (status: string) => ({type: 'SET_STATUS', status} as const),
    setProfilePhotosActionCreator: (photos: PhotosType) => ({type: 'SAVE_PHOTOS_SUCCESS', photos} as const),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const getUserProfileThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        const data = await getUserProfileRequest(userId)
        
        dispatch(actions.setUserProfileActionCreator(data));
    }
}

export const getProfileStatusThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        const data = await getProfilerStatusRequest(userId);
        
        dispatch(actions.setProfileStatusActionCreator(data));
    }
}

export const setProfileStatusThunkCreator = (status: string): ThunkType => {
    return async (dispatch) => {
        try {
            const data = await setProfileStatusRequest(status);
            
            if (data.resultCode === 0)
            {
                dispatch(actions.setProfileStatusActionCreator(status));
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
            dispatch(actions.setProfilePhotosActionCreator(data.data.photos));
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