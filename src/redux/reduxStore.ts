import { applyMiddleware, combineReducers, createStore } from "redux";
import ThunkMiddleware from "redux-thunk";

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import musicReducer from "./musicReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";

const reducers = combineReducers({
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