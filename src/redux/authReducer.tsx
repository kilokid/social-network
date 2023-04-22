import { ThunkAction } from "redux-thunk";
import { getAuthInfoRequest, setLoginDataRequest, logoutRequest, getCaptchaUrlRequest } from "../api/api.tsx";
import { AppStateType, InferActionsTypes } from "./reduxStore";
import { ResultCodesEnum } from "../types/types.tsx";
// import { setInitialLoadActionCreator } from "./appReducer";

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

type DataRequestType = {
    email: string | null,
    password: string | null,
    rememberMe: boolean | null,
    captcha: string | null,
}

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_AUTH_DATA': {
            return {
                ...state,
                ...action.data,
            }
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
