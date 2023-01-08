import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

export const Header =(props:any)=>{
	return(
		<>
			<header className={classes.header}><img
				src="https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-avatar-memes-cats-35.jpg" alt=""/>
				<div>{props.auth.isAuth?props.auth.login
					:<NavLink to={'/login'}>Login</NavLink>}</div>
			</header>

		</>
		
	)
}