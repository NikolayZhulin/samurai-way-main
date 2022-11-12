import React from "react";
import classes from './Profile.module.css';
import {Posts} from "./Posts/Posts";

export const Profile =()=>{
	return(
		<>
			<div className={classes.main}>
				<div className={classes.user_profile}>
					<div className={classes.user_profile_image}><img className={classes.profile_img}
					                                           src="https://i.pinimg.com/474x/61/52/60/615260a333b8a6f00ff2cc8e5713e9e2.jpg"
					                                           alt=""/>
					</div>
					<div className={classes.user_profile_description}>
						user-profile-description
					</div>
				</div>
				<Posts/>
			</div>
		</>
	
	)
}