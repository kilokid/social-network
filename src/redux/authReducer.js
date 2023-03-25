import { getAuthInfoRequest, setLoginDataRequest } from "../api/api";

const SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state
    }
}

export const setUserAuthDataActionCreator = (userId, login, email, isAuth) => ({type: SET_USER_AUTH_DATA, data: {userId, login, email, isAuth}});

export const setUserAuthThunkCreator = () => (dispatch) => {
    getAuthInfoRequest()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data;
    
                dispatch(setUserAuthDataActionCreator(id, login, email, true));
            }
        });
}

export const setLoginDataThunkCreator = (dataRequest) => (dispatch) => {
    setLoginDataRequest(dataRequest)
        .then(data => {
            dispatch(setUserAuthThunkCreator(data));
        });
}

export default authReducer;
