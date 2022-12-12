import {ActionsTypes, profilePageType} from "./state";

export const ADD_POST = "ADD-POST";
export const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

export const addPostActionCreator = (text: string):ActionsTypes => {
    return {
        type: ADD_POST,
        newText: text,
    }
}

export const upDatePostTextActionCreator = (text: string):ActionsTypes => {
    return {
        type: UPDATE_POST_TEXT,
        newPostText: text,
    }
}

const profileInitialState = {
    posts: [
        {post: "It's my second post", likeCount: 5},
        {post: "It's my first post", likeCount: 8},
    ],
    newPostText: 'IT-INC'
}

const profileReducer = (state: profilePageType = profileInitialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let post = {post: action.newText, likeCount: 0};
            state.posts.push(post);
            state.newPostText = '';
            break;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newPostText;
            break;
        default:
            return state;
    }
    return state;
}

export default profileReducer;