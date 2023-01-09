import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagePageReducer from "./messagePageReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagePageReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

let store:any = createStore(rootReducer, applyMiddleware(thunkMiddleWare))

 export default store;