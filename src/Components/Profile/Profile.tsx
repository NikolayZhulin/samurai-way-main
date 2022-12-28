import React from "react";
import classes from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./Posts/Posts-container";



export const Profile = (props:any) => {
    return (
        <div className={classes.main}>
            <ProfileInfo profile = {props.profile}/>
            <PostsContainer/>
        </div>
    )
}