import React from "react";
import classes from './Profile.module.css';
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../index";

type ProfilePropsType={
	posts:Array<postsType>
}

export const Profile =(props:ProfilePropsType)=>{
	return(
			<div className={classes.main}>
				<ProfileInfo/>
				<Posts posts={props.posts}/>
			</div>
	)
}