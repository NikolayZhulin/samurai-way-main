import React from "react";
import {UsersType} from "../../Redux/usersReducer";
import classes from "./Users.module.css";

type UsersPropsType = {
    users: UsersType[];
    follow: (id: number) => void;
    unfollow: (id: number) => void;
}

export const Users = (props: UsersPropsType) => {
    return (
        <div>{props.users.map((user, ind) => {
            return (
                <div key={ind} className={classes.userItem}>
                    <div>
                        <img src={user.avatar}/>
                        <div>{!user.follow
                            ? <button onClick={() => props.follow(user.id)}>Follow</button>
                            : <button onClick={() => props.unfollow(user.id)}>Unfollow</button>}
                        </div>
                    </div>
                    <div>
                        <span>{user.userName}</span>
                        <span>{user.status}</span>
                        <span>{user.location.city}</span>
                        <span>{user.location.country}</span>
                    </div>

                </div>
            )
        })}</div>
    )
}