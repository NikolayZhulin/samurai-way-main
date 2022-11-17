import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {MessageItem} from "./Messages/Messages";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogsType, messagesType, postsType} from "../../index";

type DialogsPropsType={
	dialogs:Array<dialogsType>
	messages:Array<messagesType>
}

export const Dialogs = (props:DialogsPropsType) => {
	
	return (
		<div className={classes.main}>
			<DialogItem dialogs={props.dialogs}/>
			<MessageItem messages={props.messages}/>
		</div>
	)
}