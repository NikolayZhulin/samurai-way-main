import classes from '../Dialogs.module.css';
import React, {ChangeEvent, RefObject} from "react";
import {dialogsType, MessagesPageType} from "../../../Redux/messagePageReducer";
import {Redirect} from "react-router-dom";


type MessageItemPropsType = {
    messages: MessagesPageType;
    dialogs: dialogsType[]
    addMessage: (text: string) => void;
    updateMessageText: (text: string) => void;
    auth: boolean;
}

export const MessageItem = (props: MessageItemPropsType) => {


        const messageArea: RefObject<HTMLTextAreaElement> = React.createRef()
    const onclickHandler = () => {
        let newText = messageArea?.current?.value;
        if (newText) {
            props.addMessage(newText);
            ;
        }
    }

    const messageTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        if (newText) {
            props.updateMessageText(newText)
        }
    }

    const dialogItems = props.dialogs.map((dialog, ind) => <div key={ind}>{dialog.name}</div>)

    if (!props.auth){
        return <Redirect to={'/login'}/>
    }

    return (<>
            <div>
                {dialogItems}
            </div>
            <div className={classes.messageItem}>
                {props.messages.messages.map((m, ind) => {
                    return (
                        <div key={ind}>{m.message}</div>)
                })}
                <textarea ref={messageArea}
                          value={props.messages.newMessageText}
                          onChange={messageTextChange}
                          placeholder={'Enter your message...'}
                ></textarea>
                <button onClick={onclickHandler}>Отправить</button>
            </div>

        </>
    )
}