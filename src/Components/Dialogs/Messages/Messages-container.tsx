import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../Redux/dialogs-reducer";
import {MessageItem} from "./Messages";
import StoreContext from "../../../Store-context";
import React from "react";
import {connect} from "react-redux";


export const MessagesContainer = () => {

    return (

        <StoreContext.Consumer>

            {(store) => {
                console.log(store.getState().messagesPage)
                let messages = store.getState().messagesPage;
                const messageTextChange = (newText: string) => {
                    if (newText) {
                        store.dispatch(updateMessageTextActionCreator(newText))
                    }
                }

                const addMessage = (newText: string) => {
                    if (newText) {
                        store.dispatch(addMessageActionCreator(newText))
                    }
                }

                return <MessageItem messages={messages}
                                    addMessage={addMessage}
                                    messageTextChange={messageTextChange}/>
            }
            }
        </StoreContext.Consumer>
    )
}

const superMessageContainer = connect(mapStateToProps, mapDispatchToProps)(MessageItem)

const mapStateToProps = (state)=>{
    return {
        messages: state.messages
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addMessage:()=>dispatch(updateMessageTextActionCreator()),
        messageTextChange:
    }
}