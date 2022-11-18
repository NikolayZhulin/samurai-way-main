import classes from "./Posts.module.css";
import React from "react";
import {MyPost} from "./MyPost/MyPost";
import {postsType, profilePageType} from "../../../Redux/state";


type PostsPropsType={
	posts:profilePageType
}

export const Posts=(props:PostsPropsType)=>{
	return (
		<div className={classes.posts}>
			<div className={classes.input}>
				<textarea></textarea>
			</div>
			<div className={classes.add_post_btn}>
				<button>Add post</button>
			</div>
			<MyPost posts={props.posts.posts}/>
		</div>
	)
}
