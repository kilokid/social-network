import { combineReducers, createStore } from "redux";

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import musicReducer from "./musicReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: friendsReducer,
    users: usersReducer,
    musics: musicReducer,
})

const store = createStore(reducers);

export default store;