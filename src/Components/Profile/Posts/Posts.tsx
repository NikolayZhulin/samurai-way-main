import classes from "./Posts.module.css";
import React, {ChangeEvent, RefObject} from "react";
import {MyPost} from "./MyPost/MyPost";
import {profilePageType} from "../../../Redux/state";


type PostsPropsType={
	posts: any;
	addPost:(text:string)=>void;
	upDatePostText:(text:string)=>void;
}

export const Posts=(props:PostsPropsType)=>{

	let addMessageArea:RefObject<HTMLTextAreaElement> = React.createRef()
	function addPost(){
		if(addMessageArea.current?.value){
			let text:string= addMessageArea.current?.value;
			props.addPost(text)
		}

	}
	
	const upDatePostText=(e:ChangeEvent<HTMLTextAreaElement>)=>{
		if(e.currentTarget.value){
			let text = e.currentTarget.value
			props.upDatePostText(text)
		}
	}
	
	return (
		<div className={classes.posts}>
			<div className={classes.input}>
				<textarea onChange={upDatePostText}
						  ref={addMessageArea}
						  value={props.posts.newPostText}></textarea>
			</div>
			<div className={classes.add_post_btn}>
				<button onClick={addPost}>Add post</button>
			</div>
			<MyPost posts={props.posts.posts}/>
		</div>
	)
}
