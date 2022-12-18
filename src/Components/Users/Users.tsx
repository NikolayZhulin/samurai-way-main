import React from "react";
import {UsersType} from "../../Redux/usersReducer";
import classes from "./Users.module.css";
import axios from "axios";

type UsersPropsType = {
    users: UsersType[];
    follow: (id: number) => void;
    unfollow: (id: number) => void;
    setUsers: (users: UsersType[]) => void;
}

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
            props.setUsers(response.data.items)
        })
    }
    return (


        <div>{props.users.map((user, ind) => {
            return (
                <div key={ind} className={classes.userItem}>
                    <div>
                        <img src={user.photos.small
                            ?user.photos.small
                            :'https://tunnel.ru/media/images/2016-10/post_comment/798569/at256945296.jpg'}/>
                        <div>{!user.followed
                            ? <button onClick={() => props.follow(user.id)}>Follow</button>
                            : <button onClick={() => props.unfollow(user.id)}>Unfollow</button>}
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
    )
}