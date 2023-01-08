import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    finishFollowing,
    follow,
    setIsFetch, setIsFollowing,
    setPage,
    setTotalUsersCount,
    setUsers,
    unfollow,

    UsersType
} from "../../Redux/usersReducer";
import {Users} from "./Users";
import Preloader from "../Preloader/Preloader";
import {socialNetworkAPI} from "../../API/API";

type mapStateToPropsType = {
    users: UsersType[];
    totalUsers: number;
    pageSize: number;
    selectedPage: number;
    isFetch: boolean;
    followingInProgress: number[]
}

export type UsersPropsType = {
    users: UsersType[];
    totalUsers: number;
    pageSize: number;
    selectedPage: number;
    follow: (id: number) => void;
    unfollow: (id: number) => void;
    setUsers: (users: UsersType[]) => void;
    setPage: (page: number) => void;
    setTotalUsersCount: (totalUsersCount: number) => void;
    setIsFetch: (isFetch: boolean) => void;
    isFetch: boolean;
    followingInProgress: number[];
    setIsFollowing: (userID: number) => void;
    finishFollowing: (userID: number) => void;
}

class UsersAPIComponent extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.setIsFetch(true)
        socialNetworkAPI.getUsers(this.props.pageSize, this.props.selectedPage)
            .then(response => {
                this.props.setIsFetch(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChange = (p: number) => {
        this.props.setPage(p)
        this.props.setIsFetch(true)
        socialNetworkAPI.getUsers(this.props.pageSize, p)
            .then(response => {
                this.props.setIsFetch(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (this.props.isFetch
            ? <Preloader/>
            : <Users {...this.props} onPageChange={this.onPageChange}/>)
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        totalUsers: state.usersPage.totalUsers,
        pageSize: state.usersPage.pageSize,
        selectedPage: state.usersPage.selectedPage,
        isFetch: state.usersPage.isFetch,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         setUsers: (users: UsersType[]) => dispatch(setUsersAC(users)),
//         follow: (id: number) => dispatch(followAC(id)),
//         unfollow: (id: number) => dispatch(unFollowAC(id)),
//         setPage: (page: number) => dispatch(setPageAC(page)),
//         setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount)),
//         setIsFetch: (isFetch: boolean) => dispatch(setIsFetchingAC(isFetch))
//     }
// }

export const UsersContainer = connect(mapStateToProps, {
    setUsers,
    follow,
    unfollow,
    setPage,
    setTotalUsersCount,
    setIsFetch,
    setIsFollowing,
    finishFollowing
})(UsersAPIComponent)