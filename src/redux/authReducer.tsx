import { getAuthInfoRequest, setLoginDataRequest, logoutRequest, getCaptchaUrlRequest } from "../api/api";
import { setInitialLoadActionCreator } from "./appReducer";

const SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA';
const SET_SOME_ERRORS = 'SET-SOME-ERRORS';
const SET_CAPTCHA_URL = 'SET-CAPTCHA-URL';

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

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type SetUserAuthDataPayloadType = {
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean,
    someErrors: string | null,
}

type SetUserAuthDataType = {
    type: typeof SET_USER_AUTH_DATA,
    data: SetUserAuthDataPayloadType
}

export const setUserAuthDataActionCreator = (userId: number | null, login: string | null, email: string | null, isAuth: boolean, someErrors: string | null): SetUserAuthDataType => ({
    type: SET_USER_AUTH_DATA, data: {userId, login, email, isAuth, someErrors}
});

type SetSomeErrorsType = {
    type: typeof SET_SOME_ERRORS,
    errorMessage: string
}

const setSomeErrorsActionCreator = (errorMessage: string): SetSomeErrorsType => ({type: SET_SOME_ERRORS, errorMessage});

type SetCaptchaUrlType = {
    type: typeof SET_CAPTCHA_URL,
    url: string
}

const setCaptchaUrlActionCreator = (url: string): SetCaptchaUrlType => ({type: SET_CAPTCHA_URL, url});

export const setUserAuthThunkCreator = () => async (dispatch: any) => {
    const data = await getAuthInfoRequest();

    if (data.resultCode === 0) {
        const {id, login, email} = data.data;

        dispatch(setUserAuthDataActionCreator(id, login, email, true, ''));
    }
}

export const setLoginDataThunkCreator = (dataRequest: any) => async (dispatch: any) => {
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

export const getCaptchaUrlThunkCreator = () => async (dispatch: any) => {
    const data = await getCaptchaUrlRequest();

    dispatch(setCaptchaUrlActionCreator(data));
}

export const logoutThunkCreator = () => async (dispatch: any) => {
    const data = await logoutRequest();
    
    if (data.resultCode === 0) {
        dispatch(setUserAuthDataActionCreator(null, null, null, false, ''));
    }
}

export default authReducer;
