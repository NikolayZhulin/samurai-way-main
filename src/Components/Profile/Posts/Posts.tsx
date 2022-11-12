import classes from "./Posts.module.css";
import React from "react";
import {MyPost} from "./MyPost/MyPost";


// type propsType={
// 	post:string
// }

export const Posts=()=>{
	return (
		<div className={classes.posts}>
			<textarea></textarea>
			<div>
				<button>Add post</button>
			</div>
			<MyPost post = {"It's my second post"} likeCount = {"5"}/>
			<MyPost post = {"It's my first post"} likeCount = {"2"}/>
		
		</div>
	)
}
