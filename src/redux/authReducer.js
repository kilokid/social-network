import { getAuthInfoRequest, setLoginDataRequest, logoutRequest } from "../api/api";

const SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA';
const SET_SOME_ERRORS = 'SET-SOME-ERRORS';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    someErrors: '',
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        case SET_SOME_ERRORS: {
            return {
                ...state,
                someErrors: action.errorMessage,
            }
        }
        default:
            return state
    }
}

export const setUserAuthDataActionCreator = (userId, login, email, isAuth, someErrors) => ({type: SET_USER_AUTH_DATA, data: {userId, login, email, isAuth, someErrors}});
const setSomeErrorsActionCreator = (errorMessage) => ({type: SET_SOME_ERRORS, errorMessage});

export const setUserAuthThunkCreator = () => (dispatch) => {
    getAuthInfoRequest()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data;
    
                dispatch(setUserAuthDataActionCreator(id, login, email, true, ''));
            }
        });
}

export const setLoginDataThunkCreator = (dataRequest) => (dispatch) => {
    setLoginDataRequest(dataRequest)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserAuthThunkCreator(data));
            }
            else
            {
                dispatch(setSomeErrorsActionCreator(data.messages[0]));
            }
        });
}

export const logoutThunkCreator = () => (dispatch) => {
    logoutRequest()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserAuthDataActionCreator(null, null, null, false, ''));
            }
        })
}

export default authReducer;
