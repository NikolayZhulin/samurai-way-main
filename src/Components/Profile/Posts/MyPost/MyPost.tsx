import classes from "./MyPost.module.css";
import React from "react";


type postType={
	post: string
	likeCount:number
}

type MyPostPropsType={
	posts:Array<postType>
}

export const MyPost=(props:MyPostPropsType)=>{
	return (
		<>
			<div className={classes.my_post}>
				{props.posts.map(post=>{
					return(
						<div>
							<img
								src="https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
								alt=""/>
							<div>{post.post}</div>
							<div>{post.likeCount} likes</div>
						</div>
					)
				})}
			</div>
		</>
	)
}
