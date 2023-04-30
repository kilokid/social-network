import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import ThunkMiddleware from "redux-thunk";

import profileReducer from "./profileReducer.ts";
import dialogsReducer from "./dialogsReducer.ts";
import friendsReducer from "./friendsReducer.ts";
import usersReducer from "./usersReducer.ts";
import musicReducer from "./musicReducer.ts";
import authReducer from "./authReducer.ts";
import appReducer from "./appReducer.ts";

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