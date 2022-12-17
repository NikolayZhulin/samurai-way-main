import {
    addMessageActionCreator, dialogsType,
    MessagesPageType,
    updateMessageTextActionCreator
} from "../../../Redux/messagePageReducer";
import {MessageItem} from "./Messages";
import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";


// export const MessagesContainer = () => {
//
//     return (
//
//         <StoreContext.Consumer>
//
//             {(store) => {
//                 console.log(store.getState().messagesPage)
//                 let messages = store.getState().messagesPage;
//                 const messageTextChange = (newText: string) => {
//                     if (newText) {
//                         store.dispatch(updateMessageTextActionCreator(newText))
//                     }
//                 }
//
//                 const addMessage = (newText: string) => {
//                     if (newText) {
//                         store.dispatch(addMessageActionCreator(newText))
//                     }
//                 }
//
//                 return <MessageItem messages={messages}
//                                     addMessage={addMessage}
//                                     messageTextChange={messageTextChange}/>
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }


type MapStateToPropsType = {
    messages: MessagesPageType,
    dialogs:dialogsType[];
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType=>{
    return {
        messages: state.messagesPage,
        dialogs:state.messagesPage.dialogs
    }
}

const mapDispatchToProps = (dispatch:any)=>{
    return {
        addMessage:(newText:string)=>dispatch(addMessageActionCreator(newText)),
        messageTextChange: (newText:string)=>dispatch(updateMessageTextActionCreator(newText))
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(MessageItem)