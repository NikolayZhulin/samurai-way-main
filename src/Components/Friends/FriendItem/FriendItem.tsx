import React from "react";
import classes from './FriendItem.module.css'
import {friendsItemType} from "../../../Redux/state";



type FriendItemPropsType ={
	friends: Array<friendsItemType> | undefined
}

export const FriendItem = (props:FriendItemPropsType) => {
	return (
		<div className={classes.friendItem}>
			{props.friends?.map((f)=>{
			return(
				<div className={classes.friends_ava_name}>
					<div className={classes.friend_ava}></div>
					<span className={classes.name}>{f.name} {f.surname}</span>
				</div>
			)
			})
			}
			{/*<div className={classes.friend_ava}></div>*/}
			{/*<div className={classes.friend_ava}>M</div>*/}
			{/*<div className={classes.friend_ava}>M</div>*/}
		</div>
	)
}