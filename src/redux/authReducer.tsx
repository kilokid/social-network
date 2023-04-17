import { getAuthInfoRequest, setLoginDataRequest, logoutRequest, getCaptchaUrlRequest } from "../api/api";
import { setInitialLoadActionCreator } from "./appReducer";

const SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA';
const SET_SOME_ERRORS = 'SET-SOME-ERRORS';
const SET_CAPTCHA_URL = 'SET-CAPTCHA-URL';

type SetUserAuthDataType = {
    type: typeof SET_USER_AUTH_DATA,
    data: {
        id: number,
        login: string,
        email: string,
        isAuth: boolean,
        someErrors: string,
    }
}

type InitialStateType = {
    userId: null | number,
    login: null | string,
    email: null | string,
    isAuth: boolean,
    someErrors: string,
    url: null | string
}

const initialState: InitialStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    someErrors: '',
    url: null,
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
        case SET_CAPTCHA_URL: {
            return {
                ...state,
                ...action.url,
            }
        }
        default:
            return state
    }
}

export const setUserAuthDataActionCreator: SetUserAuthDataType = (userId, login, email, isAuth, someErrors) => ({type: SET_USER_AUTH_DATA, data: {userId, login, email, isAuth, someErrors}});
const setSomeErrorsActionCreator = (errorMessage) => ({type: SET_SOME_ERRORS, errorMessage});
const setCaptchaUrlActionCreator = (url) => ({type: SET_CAPTCHA_URL, url});

export const setUserAuthThunkCreator = () => async (dispatch) => {
    const data = await getAuthInfoRequest();

    if (data.resultCode === 0) {
        const {id, login, email} = data.data;

        dispatch(setUserAuthDataActionCreator(id, login, email, true, ''));
    }
}

export const setLoginDataThunkCreator = (dataRequest) => async (dispatch) => {
    const data = await setLoginDataRequest(dataRequest);

    if (data.resultCode === 0) {
        dispatch(setUserAuthThunkCreator(data));
    }
    else
    {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrlThunkCreator());
        }

        dispatch(setSomeErrorsActionCreator(data.messages[0]));
    }
}

export const getCaptchaUrlThunkCreator = () => async (dispatch) => {
    const data = await getCaptchaUrlRequest();

    dispatch(setCaptchaUrlActionCreator(data));
}

export const logoutThunkCreator = () => async (dispatch) => {
    const data = await logoutRequest();
    
    if (data.resultCode === 0) {
        dispatch(setUserAuthDataActionCreator(null, null, null, false, ''));
    }
}

export default authReducer;
