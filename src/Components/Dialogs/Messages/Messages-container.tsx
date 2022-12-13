import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../Redux/dialogs-reducer";
import {StoreType} from "../../../Redux/state";
import {MessageItem} from "./Messages";
import StoreContext from "../../../Store-context";

//
// type MessageContainerItemPropsType = {
//     store: StoreType
// }

export const MessagesContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {

                const messageTextChange = (newText: string) => {
                    if (newText) {
                        store?.dispatch(updateMessageTextActionCreator(newText))
                    }
                }

                const addMessage = (newText: string) => {
                    if (newText) {
                        store?.dispatch(addMessageActionCreator(newText))
                    }
                }

                return <MessageItem messages={store?.getState().messagesPage}
                                    addMessage={addMessage}
                                    messageTextChange={messageTextChange}/>
            }
            }
        </StoreContext.Consumer>
    )
}