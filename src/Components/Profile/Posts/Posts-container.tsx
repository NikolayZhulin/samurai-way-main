import React from "react";
import {StoreType} from "../../../Redux/state";
import {addPostActionCreator, upDatePostTextActionCreator} from "../../../Redux/profile-reducer";
import {Posts} from "./Posts";


type PostsPropsType = {
    store: StoreType
}

export const PostsContainer = (props: PostsPropsType) => {

    function addPost(text: string) {
        if (text) {
            props.store.dispatch(addPostActionCreator(text))
        }
    }

    const upDatePostText = (text: string) => {
        if (text) {
            props.store.dispatch(upDatePostTextActionCreator(text))
        }
    }

    return (
        <Posts posts={props.store.getState().ProfilePage}
               addPost={addPost}
               upDatePostText={upDatePostText}/>
    )
}
