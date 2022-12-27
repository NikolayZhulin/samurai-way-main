import React from "react";

type UsersPageType = {
    users: UsersType[];
    totalUsers: number;
    pageSize: number;
    selectedPage: number;
    isFetch: boolean;
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
}

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';


type UsersActionType =
    followACType
    | unFollowACType
    | setUsersACType
    | setPageACType
    | setTotalUsersCountACType
    | setIsFetchingACType;

export type followACType = ReturnType<typeof followAC>
export type unFollowACType = ReturnType<typeof unFollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type setPageACType = ReturnType<typeof setPageAC>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export type setIsFetchingACType = ReturnType<typeof setIsFetchingAC>

export const followAC = (id: number) => {
    return {
        type: FOLLOW,
        payload: {
            id: id,
        }
    } as const;
}

export const unFollowAC = (id: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            id: id,
        }
    } as const;
}

export const setUsersAC = (users: UsersType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users: users,
        }
    } as const;
}

export const setPageAC = (page: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            page: page,
        }
    } as const;
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {
            totalUsersCount,
        }
    } as const;
}
export const setIsFetchingAC = (isFetch: boolean) => {
    return {
        type: SET_IS_FETCHING,
        payload: {
            isFetch,
        }
    } as const;
}

export const usersReducer = (state: UsersPageType = usersInitialState, action: UsersActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            console.log(state.users[0].followed)
            return {
                ...state,
                users: [...state.users.map(user => user.id === action.payload.id ? {...user, followed: true} : user)]
            }
        case UNFOLLOW:
            console.log(state.users[1].followed)
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
            return {...state, isFetch: action.payload.isFetch}
        default:
            return state
    }
}