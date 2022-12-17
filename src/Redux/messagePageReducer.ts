export const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
export const ADD_MESSAGE = "ADD-MESSAGE";

export type ActionsTypes = UpdateNewMessageTextType | AddNewMessageType;

export type UpdateNewMessageTextType = {
    type: "UPDATE-MESSAGE-TEXT";
    newText: string;
}
export type AddNewMessageType = {
    type: "ADD-MESSAGE";
    newText: string;
}
export type dialogsType = {
    id: number;
    name: string;
}
export type messageType = {
    id: number;
    message: string;
}
export type MessagesPageType = {
    dialogs: dialogsType[],
    messages: messageType[],
    newMessageText: string
}


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


const dialogsInitialState: MessagesPageType = {
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

const messagePageReducer = (state: MessagesPageType = dialogsInitialState, action: ActionsTypes):MessagesPageType => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            return {...state, newMessageText: action.newText};
        case ADD_MESSAGE:
            let newMessage = {id: 5, message: action.newText}
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        default:
            return state;
    }
}

export default messagePageReducer;