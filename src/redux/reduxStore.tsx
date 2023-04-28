import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import ThunkMiddleware from "redux-thunk";

import profileReducer from "./profileReducer.tsx";
import dialogsReducer from "./dialogsReducer.tsx";
import friendsReducer from "./friendsReducer.tsx";
import usersReducer from "./usersReducer.tsx";
import musicReducer from "./musicReducer.tsx";
import authReducer from "./authReducer.tsx";
import appReducer from "./appReducer.tsx";

const reducers: Reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: friendsReducer,
    users: usersReducer,
    musics: musicReducer,
    auth: authReducer,
    app: appReducer,
})

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

// @ts-ignore
window.store = store;

export default store;