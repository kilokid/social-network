import { ThunkAction } from "redux-thunk";
import { setUserAuthThunkCreator } from "./authReducer.tsx";
import { AppStateType, InferActionsTypes } from "./reduxStore";

const initialState = {
    initialLoad: false,
}

type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_INITIAL_LOAD': {
            return {
                ...state,
                initialLoad: true,
            }
        }
        default:
            return state
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    setInitialLoadActionCreator: () => ({type: 'SET_INITIAL_LOAD'} as const),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const getAuthInfoThunkCreator = (): ThunkType => async (dispatch) => {
    const promiseRequset = await dispatch(setUserAuthThunkCreator());

    Promise.all([promiseRequset])
        .then(() => {
            dispatch(actions.setInitialLoadActionCreator());
        })
}

export default authReducer;
