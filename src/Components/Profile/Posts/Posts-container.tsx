import React from "react";
import {StoreType} from "../../../Redux/state";
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

                function addPost(text: string) {
                    if (text) {
                        store?.dispatch(addPostActionCreator(text))
                    }
                }

                const upDatePostText = (text: string) => {
                    if (text) {
                        store?.dispatch(upDatePostTextActionCreator(text))
                    }
                }

                return <Posts posts={store?.getState().ProfilePage}
                       addPost={addPost}
                       upDatePostText={upDatePostText}/>
            }}
        </StoreContext.Consumer>

    )
}
