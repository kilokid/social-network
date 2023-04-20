import { ThunkAction } from "redux-thunk";
import { setUserAuthThunkCreator } from "./authReducer.tsx";
import { AppStateType } from "./reduxStore";

const SET_INITIAL_LOAD = 'SET-INITIAL-LOAD';

type InitialStateType = {
    initialLoad: Boolean,
}

const initialState: InitialStateType = {
    initialLoad: false,
}

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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

type ActionsTypes = SetInitialLoadType;

type SetInitialLoadType = {
    type: typeof SET_INITIAL_LOAD,
}

export const setInitialLoadActionCreator = (): SetInitialLoadType => ({type: SET_INITIAL_LOAD});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const getAuthInfoThunkCreator = (): ThunkType => async (dispatch) => {
    const promiseRequset = await dispatch(setUserAuthThunkCreator());

    Promise.all([promiseRequset])
        .then(() => {
            dispatch(setInitialLoadActionCreator());
        })
}

export default authReducer;
