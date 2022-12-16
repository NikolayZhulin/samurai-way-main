import dialogsReducer, {ADD_MESSAGE, UPDATE_MESSAGE_TEXT} from "./dialogs-reducer";
import profileReducer, {ADD_POST, UPDATE_POST_TEXT} from "./profile-reducer";

export type dialogsType = {
    id: number;
    name: string;
}

export type messagesType = {
    id: number;
    message: string;
}

export type postsType = {
    post: string;
    likeCount: number;
}

export type messagesPageType = {
    dialogs: Array<dialogsType>;
    messages: Array<messagesType>;
    newMessageText: string;
}

export type profilePageType = {
    posts: Array<postsType>;
    newPostText: string;
}

export type friendsItemType = {
    id: number;
    name: string;
    surname: string;
    age: number;
}

type FriendsType = {
    friends: Array<friendsItemType>;
}

export type StateType = {
    messagesPage: messagesPageType;
    profilePage: profilePageType;
    Friends: FriendsType;
}

export type StoreType = {
    _state: StateType;
    _rerenderEntireTree: () => void;
    getState: () => StateType;
    subscribe: (observer: () => void) => void;
    dispatch: (action: ActionsTypes) => void;
}

export type ActionsTypes = AddPostActionType | UpdatePostActionType | UpdateNewMessageTextType | AddNewMessageType;

type AddPostActionType = {
    type: "ADD-POST";
    newText: string;
}
type UpdatePostActionType = {
    type: "UPDATE-POST-TEXT";
    newPostText: string;
}
type UpdateNewMessageTextType = {
    type: "UPDATE-MESSAGE-TEXT";
    newText: string;
}
type AddNewMessageType = {
    type: "ADD-MESSAGE";
    newText: string;
}


export const store: StoreType = {
    _state: {
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Igor'},
                {id: 2, name: 'Oleg'},
                {id: 3, name: 'Alex'},
                {id: 4, name: 'John'},
                {id: 5, name: 'Ron'},
                {id: 6, name: 'Paul'},
            ],
            messages: [
                {id: 1, message: 'hnrhnrhn'},
                {id: 2, message: 'Olerhnrg'},
                {id: 3, message: 'Alnrhnrhex'},
                {id: 4, message: 'Jhngorhnhn'},
                {id: 5, message: 'Rodddddddn'},
                {id: 6, message: 'Paghngul'},
            ],
            newMessageText: 'q'
        },
        profilePage: {
            posts: [
                {post: "It's my second post", likeCount: 5},
                {post: "It's my first post", likeCount: 8},
            ],
            newPostText: 'IT-INC'
        },
        Friends: {
            friends: [
                {id: 1, name: 'Alex', surname: 'Koy', age: 44},
                {id: 1, name: 'Oleg', surname: 'Roy', age: 33},
                {id: 1, name: 'Stepan', surname: 'Toy', age: 22},
            ]
        }
    },
    _rerenderEntireTree() {
        console.log(1)
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action:ActionsTypes) {
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._rerenderEntireTree()
    }
}



