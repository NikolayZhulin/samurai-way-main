import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {StoreType} from "./state";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
})

let store:StoreType = createStore(reducers)

 export default store;