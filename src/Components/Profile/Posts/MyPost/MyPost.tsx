import classes from "./MyPost.module.css";
import React from "react";


type MyPostPropsType={
	post: string
	likeCount:string
}

export const MyPost=(props:MyPostPropsType)=>{
	return (
		<>
			<div className={classes.my_post}><img
				src="https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
				alt=""/>
				{props.post}
			</div>
			<span>{props.likeCount}likes</span>
		</>
	)
}
