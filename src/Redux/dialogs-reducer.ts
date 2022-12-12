import {ActionsTypes, messagesPageType, StateType} from "./state";
import {ActionTypes} from "redux-form";

export const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
export const ADD_MESSAGE = "ADD-MESSAGE";

export const updateMessageTextActionCreator = (newText: string): ActionsTypes => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: newText,
    }
}

export const addMessageActionCreator = (newText: string): ActionsTypes => {
    return {
        type: ADD_MESSAGE,
        newText: newText,
    }
}

const dialogsInitialState ={
    dialogs: [
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'John'},
        {id: 5, name: 'Ron'},
        {id: 6, name: 'Paul'},
    ],
    messages: [
        {id: 1, message: 'hnrhnrhn'},
        {id: 2, message: 'Olerhnrg'},
        {id: 3, message: 'Alnrhnrhex'},
        {id: 4, message: 'Jhngorhnhn'},
        {id: 5, message: 'Rodddddddn'},
        {id: 6, message: 'Paghngul'},
    ],
    newMessageText: 'q'
}

const dialogsReducer = (state:messagesPageType=dialogsInitialState, action:ActionsTypes)=>{
    switch (action.type){
        case UPDATE_MESSAGE_TEXT:
            console.log(action)
            state.newMessageText = action.newText;
            break;
        case ADD_MESSAGE:
            let newMessage = {id: 5, message: action.newText}
            state.messages.push(newMessage)
            state.newMessageText = ''
            break;
        default:
            return state;
    }
    return state;
}

export default dialogsReducer;