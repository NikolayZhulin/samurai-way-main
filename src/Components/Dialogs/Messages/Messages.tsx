import classes from '../Dialogs.module.css';
import React, {RefObject} from "react";

type messageType = {
	message: string
	id: number
}

type MessageItemType = {
	messages: Array<messageType>
}


export const MessageItem = (props: MessageItemType) => {
	const messageArea:RefObject<HTMLTextAreaElement>=React.createRef()
	const onclickHandler = ()=>{
		let text = messageArea.current?.value
		alert(text)
	}
	return (
		<div className={classes.messageItem}>
			{props.messages.map(m=>{
				return(
					<div>{m.message}</div>)
			})}
			<textarea ref={messageArea}></textarea>
			<button onClick={onclickHandler}>Отправить</button>
		</div>
	)
}