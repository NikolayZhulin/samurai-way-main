import classes from "./Posts.module.css";
import React, {RefObject} from "react";
import {MyPost} from "./MyPost/MyPost";
import {profilePageType} from "../../../Redux/state";


type PostsPropsType={
	posts:profilePageType
	addPost:(title:string)=>void
}

export const Posts=(props:PostsPropsType)=>{
	
	let addMessageArea:RefObject<HTMLTextAreaElement> = React.createRef()
	function onClickHandler(){
		let text:any= addMessageArea.current?.value
		props.addPost(text)
		// @ts-ignore
		addMessageArea.current.value = ''
	}
	
	return (
		<div className={classes.posts}>
			<div className={classes.input}>
				<textarea ref={addMessageArea}></textarea>
			</div>
			<div className={classes.add_post_btn}>
				<button onClick={onClickHandler}>Add post</button>
			</div>
			<MyPost posts={props.posts.posts}/>
		</div>
	)
}
