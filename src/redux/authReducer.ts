import { ThunkAction } from "redux-thunk";
import { getAuthInfoRequest, setLoginDataRequest, logoutRequest, getCaptchaUrlRequest } from "../api/api.tsx";
import { AppStateType, InferActionsTypes } from "./reduxStore";
import { ResultCodesEnum } from "../types/types.ts";

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    someErrors: '',
    url: null,
}

type InitialStateType = typeof initialState;

type DataRequestType = {
    email: string | null,
    password: string | null,
    rememberMe: boolean | null,
    captcha: string | null,
}

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_AUTH_DATA':
            return {
                ...state,
                ...action.data as object
            }
        case 'SET_SOME_ERRORS': {
            return {
                ...state,
                someErrors: action.errorMessage,
            }
        }
        case 'SET_CAPTCHA_URL': {
            return {
                ...state,
                ...action.url as String,
            }
        }
        default:
            return state
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    setUserAuthDataActionCreator: (userId: number | null, login: string | null, email: string | null, isAuth: boolean, someErrors: string | null) => ({type: 'SET_USER_AUTH_DATA', data: {userId, login, email, isAuth, someErrors}} as const),
    setSomeErrorsActionCreator: (errorMessage: string) => ({type: 'SET_SOME_ERRORS', errorMessage} as const),
    setCaptchaUrlActionCreator: (url: string) => ({type: 'SET_CAPTCHA_URL', url} as const),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const setUserAuthThunkCreator = (): ThunkType => async (dispatch) => {
    const data = await getAuthInfoRequest();
    
    if (data.resultCode === ResultCodesEnum.Success) {
        const {id, login, email} = data.data;

        dispatch(actions.setUserAuthDataActionCreator(id, login, email, true, ''));
    }
}

export const setLoginDataThunkCreator = (dataRequest: DataRequestType): ThunkType => async (dispatch) => {
    const data = await setLoginDataRequest(dataRequest);

    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setUserAuthThunkCreator());
    }
    else
    {
        if (data.resultCode === ResultCodesEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrlThunkCreator());
        }

        dispatch(actions.setSomeErrorsActionCreator(data.messages[0]));
    }
}

export const getCaptchaUrlThunkCreator = (): ThunkType => async (dispatch) => {
    const data = await getCaptchaUrlRequest();

    dispatch(actions.setCaptchaUrlActionCreator(data));
}

export const logoutThunkCreator = (): ThunkType => async (dispatch) => {
    const data = await logoutRequest();
    
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setUserAuthDataActionCreator(null, null, null, false, ''));
    }
}

export default authReducer;
