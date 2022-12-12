import React from "react";
import classes from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../Redux/state";
import {PostsContainer} from "./Posts/Posts-container";

type ProfilePropsType={
	store:StoreType;
}

export const Profile =(props:ProfilePropsType)=>{
	return(
			<div className={classes.main}>
				<ProfileInfo/>
				<PostsContainer store={props.store}/>
			</div>
	)
}