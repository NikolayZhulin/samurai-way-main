import classes from "./Posts.module.css";
import React from "react";
import {MyPost} from "./MyPost/MyPost";


// type propsType={
// 	post:string
// }

export const Posts=()=>{
	
	const posts=[
		{post:"It's my second post",likeCount:5  },
		{post:"It's my first post",likeCount:8},
	]
	
	return (
		<div className={classes.posts}>
			<div className={classes.input}>
				<textarea></textarea>
			</div>
			
			<div className={classes.add_post_btn}>
				<button>Add post</button>
			</div>
			<MyPost posts={posts}/>
		</div>
	)
}
