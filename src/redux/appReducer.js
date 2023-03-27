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

export default authReducer;
