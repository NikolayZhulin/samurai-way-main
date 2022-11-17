import classes from '../Dialogs.module.css';
import React from "react";

type messageType = {
	message: string
	id: number
}

type MessageItemType = {
	messages: Array<messageType>
}


export const MessageItem = (props: MessageItemType) => {
	return (
		<div className={classes.messageItem}>
			{props.messages.map(m=>{
				return(
					<div>{m.message}</div>)
			})}
		</div>
	)
}