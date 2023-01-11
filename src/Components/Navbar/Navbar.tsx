import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {FriendItem} from "../Friends/FriendItem/FriendItem";
import StoreContext from "../../Store-context";


export const Navbar =()=>{
	return(
		<>
			<nav className={classes.nav}>
				<div className={classes.item_wrapper}>
					<div><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></div>
					<div><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></div>
					<div><NavLink to="/news" activeClassName={classes.active}>News</NavLink></div>
					<div><NavLink to="/music" activeClassName={classes.active}>Music</NavLink></div>
					<div><NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink></div>
					<div><NavLink to="/users" activeClassName={classes.active}>Users</NavLink></div>
					<div><NavLink to="/login" activeClassName={classes.active}>Login</NavLink></div>

					{/*<div className={classes.friends_link}>*/}
						<div className={classes.friends}>
							<NavLink to="/friends" activeClassName={classes.active}>Friends</NavLink>
						</div>
						{/*<StoreContext.Consumer>*/}
						{/*	{(store)=>{*/}
						{/*		debugger;*/}
						{/*		return <FriendItem friends={store.getState().Friends.friends}/>*/}
						{/*	}*/}
						{/*	}*/}
						{/*</StoreContext.Consumer>*/}
					{/*</div>*/}
					
				</div>
			</nav>
		</>
	
	)
}
