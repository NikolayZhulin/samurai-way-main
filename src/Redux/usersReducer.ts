import React from "react";

type UsersPageType = {
    users: UsersType[]
}

type locationType={
    city:string;
    country:string;
}

export type UsersType = {
    id: number;
    userName: string;
    status: string;
    location: locationType
    follow: boolean;
    avatar: string;
}

const usersInitialState: UsersPageType = {
    users: [
        {
            id: 1,
            userName: 'Oleg',
            status: 'Hi everyone',
            location: {city: 'Minsk', country: 'Belrus'},
            follow: true,
            avatar: 'https://tunnel.ru/media/images/2016-10/post_comment/798569/at256945296.jpg'
        },
        {
            id: 2,
            userName: 'Oleg',
            status: 'Hi everyone',
            location: {city: 'Minsk', country: 'Belrus'},
            follow: false,
            avatar: 'https://tunnel.ru/media/images/2016-10/post_comment/798569/at256945296.jpg'
        },
    ]
}

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';


type UsersActionType = followACType | unFollowACType | setUsersACType;

export type followACType = ReturnType<typeof followAC>
export type unFollowACType = ReturnType<typeof unFollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>

export const followAC = (id:number) =>{
    return{
        type:FOLLOW,
        payload:{
            id: id,
        }
    } as const;
}

export const unFollowAC = (id:number) =>{
    return{
        type:UNFOLLOW,
        payload:{
            id: id,
        }
    } as const;
}

export const setUsersAC = (users:UsersType[]) =>{
    return{
        type:SET_USERS,
        payload:{
            users: users,
        }
    } as const;
}

export const usersReducer = (state: UsersPageType = usersInitialState, action: UsersActionType):UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            console.log(state.users[0].follow)
            return {...state, users:[...state.users.map(user=> user.id === action.payload.id?{...user, follow: true}:user)]}
        case UNFOLLOW:
            console.log(state.users[1].follow)
            return {...state, users:[...state.users.map(user=> user.id === action.payload.id?{...user, follow: false}:user)]}
        case SET_USERS:
            return {...state, users:  [...action.payload.users]}
        default:
            return state
    }
}