import {
    addMessage,
    dialogsType,
    MessagesPageType,
    updateMessageText,
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
    auth:boolean;
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType=>{
    return {
        messages: state.messagesPage,
        dialogs:state.messagesPage.dialogs,
        auth: state.auth.isAuth
    }
}



export const MessagesContainer = connect(mapStateToProps, {addMessage,updateMessageText})(MessageItem)