import { getUserProfileRequest, getProfilerStatusRequest, setProfileStatusRequest } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-STATUS';

let idNumber = 3;

const initialState = {
    postsData: [
        {
            id: '0',
            text: 'why nobody love me?',
            likes: '14'
        },
        {
            id: '1',
            text: 'Fuck all.',
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
        default:
            return state;
    }
}

export const addPostActionCreator = (data) => ({type: ADD_POST, newPost: {...data}});
export const deletePostActionCreator = (id) => ({type: DELETE_POST, id});

export const setUserProfileActionCreator = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export const setProfileStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        getUserProfileRequest(userId)
        .then(data => {
            dispatch(setUserProfileActionCreator(data));
        });
    }
}

export const getProfileStatusThunkCreator = (userId) => {
    return (dispatch) => {
        getProfilerStatusRequest(userId)
        .then(data => {
            dispatch(setProfileStatus(data));
        });
    }
}

export const setProfileStatusThunkCreator = (status) => {
    return (dispatch) => {
        setProfileStatusRequest(status)
        .then(data => {
            console.log(data);
            if (data.resultCode === 0)
            {
                dispatch(setProfileStatus(status));
            }
        });
    }
}

export default profileReducer;