import React from "react";
import {addPostActionCreator, upDatePostTextActionCreator} from "../../../Redux/profile-reducer";
import {Posts} from "./Posts";
import StoreContext from "../../../Store-context";


// type PostsPropsType = {
//     store: StoreType | any
// }

export const PostsContainer = () => {

    return (

        <StoreContext.Consumer>
            {(store)=>{

                let postsStore = store.getState().profilePage;
                console.log(postsStore)
                function addPost(text: string) {
                    if (text) {
                        store.dispatch(addPostActionCreator(text))
                    }
                }

                const upDatePostText = (text: string) => {
                    if (text) {
                        store.dispatch(upDatePostTextActionCreator(text))
                    }
                }

                return <Posts posts={postsStore}
                       addPost={addPost}
                       upDatePostText={upDatePostText}/>
            }}
        </StoreContext.Consumer>

    )
}
