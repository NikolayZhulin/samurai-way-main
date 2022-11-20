import React from "react";
import classes from './Profile.module.css';
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StateType} from "../../Redux/state";

type ProfilePropsType={
	state:StateType
	addPost:(title:string)=>void
}

export const Profile =(props:ProfilePropsType)=>{
	return(
			<div className={classes.main}>
				<ProfileInfo/>
				<Posts posts={props.state.ProfilePage} addPost={props.addPost}/>
			</div>
	)
}