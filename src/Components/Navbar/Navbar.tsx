import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {FriendItem} from "../Friends/FriendItem/FriendItem";
import {StoreType} from "../../Redux/state";

type NavBarPropsType ={
	store:StoreType
}

export const Navbar =(props:NavBarPropsType)=>{
	return(
		<>
			<nav className={classes.nav}>
				<div className={classes.item_wrapper}>
					<div><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></div>
					<div><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></div>
					<div><NavLink to="/news" activeClassName={classes.active}>News</NavLink></div>
					<div><NavLink to="/music" activeClassName={classes.active}>Music</NavLink></div>
					<div><NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink></div>
					<div className={classes.friends_link}>
						<div className={classes.friends}>
							<NavLink to="/friends" activeClassName={classes.active}>Friends</NavLink>
						</div>
						<FriendItem friends={props.store.getState().Friends.friends}/>
					</div>
					
				</div>
			</nav>
		</>
	
	)
}
