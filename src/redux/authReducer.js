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
                isAuth: true,
            }
        }
        default:
            return state
    }
}

export const setUserAuthDataActionCreator = (userId, login, email) => ({type: SET_USER_AUTH_DATA, data: {userId, login, email}});

export default authReducer;