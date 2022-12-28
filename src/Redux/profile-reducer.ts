export const ADD_POST = "ADD-POST";
export const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
export const SET_USER_PROFILE = "SET_USER_PROFILE";


export type ActionsTypes = AddPostActionType | UpdatePostActionType | setUserProfileType;

type AddPostActionType = {
    type: "ADD-POST";
    newText: string;
}
type UpdatePostActionType = {
    type: "UPDATE-POST-TEXT";
    newPostText: string;
}
type setUserProfileType = {
    type: "SET_USER_PROFILE";
    profile: any;
}


export type postType = {
    post: string;
    likeCount: number;
}
export type profilePageType = {
    posts: Array<postType>;
    newPostText: string;
}


export const addPostActionCreator = (text: string): ActionsTypes => {
    return {
        type: ADD_POST,
        newText: text,
    }
}

export const upDatePostTextActionCreator = (text: string): ActionsTypes => {
    return {
        type: UPDATE_POST_TEXT,
        newPostText: text,
    }
}

export const setUserProfile = (profile: any): ActionsTypes => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}


const profileInitialState: any = {
    posts: [
        {post: "It's my second post", likeCount: 5},
        {post: "It's my first post", likeCount: 8},
    ],
    newPostText: 'IT-INC',
    profile:null
}

const profileReducer = (state: any = profileInitialState, action: ActionsTypes):any => {
    switch (action.type) {
        case ADD_POST:
            let post = {post: action.newText, likeCount: 0};
            return {...state, posts: [...state.posts, post], newPostText: ''}
        case UPDATE_POST_TEXT:
           return{...state, newPostText: action.newPostText}
        case SET_USER_PROFILE:
           return {...state, profile: action.profile}
        default:
            return state;
    }
    return state;
}

export default profileReducer;