import React from "react";
import {socialNetworkAPI} from "../API/API";

type UsersPageType = {
    users: UsersType[];
    totalUsers: number;
    pageSize: number;
    selectedPage: number;
    isFetch: boolean;
    followingInProgress:number[];
}

type locationType = {
    city: string;
    country: string;
}

export type UsersType = {
    id: number;
    name: string;
    status: string;
    // location: locationType
    followed: boolean | null;
    photos: {
        "small": null | string,
        "large": null | string
    },
    uniqueUrlName: null | string;
}

const usersInitialState: UsersPageType = {
    users: [
        // {
        //     id: 1,
        //     userName: 'Oleg',
        //     status: 'Hi everyone',
        //     location: {city: 'Minsk', country: 'Belrus'},
        //     follow: true,
        //       avatar: 'https://tunnel.ru/media/images/2016-10/post_comment/798569/at256945296.jpg'
        // },
        // {
        //     id: 2,
        //     userName: 'Oleg',
        //     status: 'Hi everyone',
        //     location: {city: 'Minsk', country: 'Belrus'},
        //     follow: false,
        //     avatar: 'https://tunnel.ru/media/images/2016-10/post_comment/798569/at256945296.jpg'
        // },
    ],
    totalUsers: 0,
    pageSize: 10,
    selectedPage: 1,
    isFetch: false,
    followingInProgress:[]
}

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';
export const SET_IS_FOLLOWING = 'SET_IS_FOLLOWING';
export const FINISH_FOLLOWING = 'FINISH_FOLLOWING';


type UsersActionType =
    followACType
    | unFollowACType
    | setUsersACType
    | setPageACType
    | setTotalUsersCountACType
    | setIsFetchingACType
    |setIsFollowingACType
    |finishFollowingACType;

export type followACType = ReturnType<typeof follow>
export type unFollowACType = ReturnType<typeof unfollow>
export type setUsersACType = ReturnType<typeof setUsers>
export type setPageACType = ReturnType<typeof setPage>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type setIsFetchingACType = ReturnType<typeof setIsFetch>
export type setIsFollowingACType = ReturnType<typeof setIsFollowing>
export type finishFollowingACType = ReturnType<typeof finishFollowing>

export const follow = (id: number) => {
    return {
        type: FOLLOW,
        payload: {
            id: id,
        }
    } as const;
}

export const unfollow = (id: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            id: id,
        }
    } as const;
}

export const setUsers = (users: UsersType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users: users,
        }
    } as const;
}

export const setPage = (page: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            page: page,
        }
    } as const;
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {
            totalUsersCount,
        }
    } as const;
}
export const setIsFetch = (isFetch: boolean) => {
    return {
        type: SET_IS_FETCHING,
        payload: {
            isFetch,
        }
    } as const;
}

export const setIsFollowing = (userID:number) => {
    return {
        type: SET_IS_FOLLOWING,
        payload: {
            userID,
        }
    } as const;
}

export const finishFollowing = (userID:number) => {
    return {
        type: FINISH_FOLLOWING,
        payload: {
            userID,
        }
    } as const;
}

export const usersReducer = (state: UsersPageType = usersInitialState, action: UsersActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users.map(user => user.id === action.payload.id ? {...user, followed: true} : user)]
            }
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users.map(user => user.id === action.payload.id ? {...user, followed: false} : user)]
            }
        case SET_USERS:
            return {...state, users: [...action.payload.users]}
        case SET_CURRENT_PAGE:
            return {...state, selectedPage: action.payload.page}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsers: action.payload.totalUsersCount}
        case SET_IS_FETCHING:
            console.log(action)
            return {...state, isFetch: action.payload.isFetch}
        case SET_IS_FOLLOWING:
            console.log(action)
            return {...state, followingInProgress: [...state.followingInProgress, action.payload.userID]}
        case FINISH_FOLLOWING:
            console.log(action)
            return {...state, followingInProgress: state.followingInProgress.filter(el=> el !== action.payload.userID)}
        default:
            return state
    }
}

export const getUsers = (pageSize: number, selectedPage: number) => (dispatch:any)=>{
    dispatch(setIsFetch(true))
    socialNetworkAPI.getUsers(pageSize, selectedPage)
        .then(response => {
           dispatch(setIsFetch(false))
            dispatch(setUsers(response.data.items))
            dispatch(setTotalUsersCount(response.data.totalCount))
        })
}

export const onPageChange = (pageSize: number, currentPage: number) => (dispatch:any)=>{
    dispatch(setPage(currentPage))
    dispatch(setIsFetch(true))
    socialNetworkAPI.getUsers(pageSize, currentPage)
        .then(response => {
            dispatch(setIsFetch(false))
            dispatch(setUsers(response.data.items))
        })
}

export const onFollow = (userId: number) => (dispatch:any)=>{
    dispatch(setIsFollowing(userId))
    socialNetworkAPI.follow(userId)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(finishFollowing(userId))
        })
}

export const onUnfollow = (userId: number) => (dispatch:any)=>{
    dispatch(setIsFollowing(userId))
    socialNetworkAPI.unfollow(userId).then(response => {
        if (response.resultCode === 0) {
            dispatch(unfollow(userId))
        }
    })
    dispatch(finishFollowing(userId))
}