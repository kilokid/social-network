import { setLoginDataRequest } from "../api/api";

const SET_LOGIN = 'SET-LOGIN';

const initialState = {
    form: null,
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN: {
            return {
                ...state,
                form: action.data,
            }
        }
        default:
            return state
    }
}

export const setLoginDataActionCreator = (data) => ({type: SET_LOGIN, data});

export const setLoginDataThunkCreator = (data) => (dispatch) => {
    setLoginDataRequest(data)
        .then(data => {
            console.log(data);
            // if (data.resultCode === 0) {
            //     const {id, login, email} = data.data;
    
            //     dispatch(setUserAuthDataActionCreator(id, login, email));
            // }
        });
}

export default formReducer;