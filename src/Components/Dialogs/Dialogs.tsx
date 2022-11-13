import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


type dialogType = {
	name: string
	id: number
}
type messageType = {
	message: string
	id: number
}

type DialogItemType = {
	dialogs: Array<dialogType>
}

type MessageItemType = {
	messages: Array<messageType>
}

const DialogItem = (props: DialogItemType) => {
	return (
		<>
			{props.dialogs.map(d => {
				return (
					<div className={classes.dialogItem}>
						<NavLink to={"/dialogs/" + d.id} activeClassName={classes.active}>{d.name}</NavLink>
					</div>
				)
			})}
		</>
	
	)
}

const MessageItem = (props: MessageItemType) => {
	return (
		<div className={classes.messageItem}>
			{props.messages.map(m=>{
				return(
					<div>{m.message}</div>)
			})}
		</div>
	)
}


export const Dialogs = () => {
	
	const dialogs = [
		{id: 1, name: 'Igor'},
		{id: 2, name: 'Oleg'},
		{id: 3, name: 'Alex'},
		{id: 4, name: 'John'},
		{id: 5, name: 'Ron'},
		{id: 6, name: 'Paul'},
	]
	const messages = [
		{id: 1, message: 'hnrhnrhn'},
		{id: 2, message: 'Olerhnrg'},
		{id: 3, message: 'Alnrhnrhex'},
		{id: 4, message: 'Jhngorhnhn'},
		{id: 5, message: 'Rodddddddn'},
		{id: 6, message: 'Paghngul'},
	]
	
	return (
		<div className={classes.main}>
			<div className={classes.dialogs}>
				<DialogItem dialogs={dialogs}/>
			</div>
			<div className={classes.messages}>
				<MessageItem messages={messages}/>
			</div>
		</div>
	)
}