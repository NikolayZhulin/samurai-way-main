import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {MessageItem} from "./Messages/Messages";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogsType, messagesType, StateType} from "../../Redux/state";


type DialogsPropsType={
	state:StateType
}



export const Dialogs = (props:DialogsPropsType) => {
	
	return (
		<div className={classes.main}>
			<DialogItem dialogs={props.state.messagesPage.dialogs}/>
			<MessageItem messages={props.state.messagesPage.messages}/>
		</div>
	)
}