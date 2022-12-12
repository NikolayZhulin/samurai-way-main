import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../Redux/dialogs-reducer";
import {StoreType} from "../../../Redux/state";
import {MessageItem} from "./Messages";


type MessageContainerItemPropsType = {
    store:StoreType
}

export const MessagesContainer = (props: MessageContainerItemPropsType) => {

    const addMessage = (newText: string) => {
        if (newText) {
            props.store.dispatch(addMessageActionCreator(newText))
        }
    }

    const messageTextChange = (newText: string) => {
        if (newText) {
            props.store.dispatch(updateMessageTextActionCreator(newText))
        }
    }

    return <MessageItem messages={props.store.getState().messagesPage}
                        addMessage={addMessage}
                        messageTextChange={messageTextChange}/>
}