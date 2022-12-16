import classes from '../Dialogs.module.css';
import React, {ChangeEvent, RefObject} from "react";
import {dialogsType, messagesPageType} from "../../../Redux/state";



type MessageItemPropsType = {
    messages: messagesPageType;
    addMessage:(text:string)=>void
    messageTextChange:(text:string)=>void
}

export const MessageItem = (props: MessageItemPropsType) => {
    const messageArea:RefObject<HTMLTextAreaElement> = React.createRef()
    const onclickHandler = () => {
        let newText = messageArea?.current?.value;
        if (newText) {
            props.addMessage(newText)
        }

    }

    const messageTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        if (newText) {
            props.messageTextChange(newText)
        }
    }

    return (
        <div className={classes.messageItem}>
            {props.messages.messages.map(m => {
                return (
                    <div>{m.message}</div>)
            })}
            <textarea ref={messageArea}
                      value={props.messages.newMessageText}
                      onChange={messageTextChange}
                      placeholder={'Enter your message...'}
            ></textarea>
            <button onClick={onclickHandler}>Отправить</button>
        </div>
    )
}