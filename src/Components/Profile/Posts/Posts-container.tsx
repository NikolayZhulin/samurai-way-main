import React from "react";
import {AppStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {addPostActionCreator, profilePageType, upDatePostTextActionCreator} from "../../../Redux/profile-reducer";
import {Posts} from "./Posts";


type MapStateToPropsType = {
    posts: profilePageType,
    newPostText: string
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType=>{
    return {
        posts: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch:any)=>{
    return {
        addPost:(text:string)=>dispatch(addPostActionCreator(text)),
        upDatePostText: (newPostText:string)=>dispatch(upDatePostTextActionCreator(newPostText))
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

