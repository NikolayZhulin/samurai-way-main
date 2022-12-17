import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../Redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../Redux/usersReducer";

type mapStateToPropsType={
    users:UsersType[],
}

const mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return{
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        setUsers: (users: UsersType[])=>dispatch(setUsersAC(users)),
        follow:(id:number)=>dispatch(followAC(id)),
        unfollow:(id:number)=>dispatch(unFollowAC(id)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)