import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagePageReducer from "./messagePageReducer";
import {usersReducer} from "./usersReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagePageReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store:any = createStore(rootReducer)

 export default store;