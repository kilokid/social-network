import { setUserAuthThunkCreator } from "./authReducer.tsx";

const SET_INITIAL_LOAD = 'SET-INITIAL-LOAD';

type InitialStateType = {
    initialLoad: Boolean,
}

const initialState: InitialStateType = {
    initialLoad: false,
}

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type SetInitialLoadType = {
    type: typeof SET_INITIAL_LOAD,
}

export const setInitialLoadActionCreator = (): SetInitialLoadType => ({type: SET_INITIAL_LOAD});

export const getAuthInfoThunkCreator = () => (dispatch: any) => {
    const promiseRequset = dispatch(setUserAuthThunkCreator());

    Promise.all([promiseRequset])
        .then(() => {
            dispatch(setInitialLoadActionCreator());
        })
}

export default authReducer;
