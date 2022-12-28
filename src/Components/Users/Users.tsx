import React from 'react';
import s from "./Users.module.css";
import {UsersType} from "../../Redux/usersReducer";
import {NavLink} from "react-router-dom";

type UsersFuncPropsType = {
    totalUsers: number;
    pageSize: number;
    selectedPage: number;
    onPageChange: (p: number) => void;
    users: UsersType[];
    follow: (id: number) => void;
    unfollow: (id: number) => void;
}

export const Users: React.FC<UsersFuncPropsType> = ({
                                        totalUsers,
                                        pageSize,
                                        selectedPage,
                                        onPageChange,
                                        users,
                                        follow,
                                        unfollow,
                                    }) => {
    console.log(totalUsers)
    let pageCount = Math.ceil(totalUsers / pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let curPage = selectedPage
    let slicedPages
    if (curPage - 10 < 0) {
        slicedPages = pages.slice(0, 10);
    } else {
        slicedPages = pages.slice(curPage - 5, curPage + 5);
    }

    return (
        <div>
            <>
                <div>
                    {slicedPages.map(p => {
                        return <span onClick={() => onPageChange(p)}
                                     className={selectedPage == p ? s.selected : ""}>{p + ' ' + '|' + ' '}</span>
                    })}
                    {users.map((user, ind) => {
                        return (
                            <div key={ind} className={s.userItem}>
                                <div>
                                    <NavLink to={'/profile/' + user.id}><img src={user.photos.small
                                        ? user.photos.small
                                        : 'https://tunnel.ru/media/images/2016-10/post_comment/798569/at256945296.jpg'}/></NavLink>
                                    <div>{!user.followed
                                        ? <button onClick={() => follow(user.id)}>Follow</button>
                                        : <button onClick={() => unfollow(user.id)}>Unfollow</button>}
                                    </div>
                                </div>
                                <div>
                                    <span>{user.name}</span>
                                    <span>{user.status}</span>
                                    <span>{'user.location.city'}</span>
                                    <span>{'user.location.country'}</span>
                                </div>

                            </div>
                        )
                    })}</div>
            </>
        </div>
    );
};

