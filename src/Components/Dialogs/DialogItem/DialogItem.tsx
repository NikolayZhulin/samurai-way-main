import classes from '../Dialogs.module.css';
import React from "react";
import {NavLink} from "react-router-dom";
import {dialogsType} from "../../../Redux/messagePageReducer";



type DialogsPropsType={
	dialogs:Array<dialogsType>
}

export const DialogItem =(props: DialogsPropsType)=>{
	return (
		<div>
			{props.dialogs.map(d => {
				return (
					<div className={classes.dialogItem}>
						<NavLink to={"/dialogs/" + d.id} activeClassName={classes.active}>{d.name}</NavLink>
					</div>
				)
			})}
		</div>
		)
}

