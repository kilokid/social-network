import { setUserAuthThunkCreator } from "./authReducer.tsx";

const SET_INITIAL_LOAD = 'SET-INITIAL-LOAD';

const initialState = {
    initialLoad: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIAL_LOAD: {
            return {
                ...state,
                initialLoad: true,
            }
        }
        default:
            return state
    }
}

export const setInitialLoadActionCreator = () => ({type: SET_INITIAL_LOAD});

export const getAuthInfoThunkCreator = () => (dispatch) => {
    const promiseRequset = dispatch(setUserAuthThunkCreator());

    Promise.all([promiseRequset])
        .then(() => {
            dispatch(setInitialLoadActionCreator());
        })
}

export default authReducer;
