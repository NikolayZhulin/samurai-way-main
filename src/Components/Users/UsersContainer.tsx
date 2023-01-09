import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    finishFollowing,
    getUsers, onFollow,
    onPageChange, onUnfollow,
    setIsFollowing,
    UsersType
} from "../../Redux/usersReducer";
import {Users} from "./Users";
import Preloader from "../Preloader/Preloader";


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
    isFetch: boolean;
    followingInProgress: number[];
    getUsers: (pageSize: number, selectedPage: number) => void;
    onPageChange: (pageSize: number, currentPage: number) => void;
    onFollow: (userId: number) => void;
    onUnfollow: (userId: number) => void;
}

class UsersAPIComponent extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.selectedPage)
    }

    onPageChange = (p: number) => {
        this.props.onPageChange(this.props.pageSize, p)
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
    finishFollowing,
    getUsers,
    onPageChange,
    onFollow,
    onUnfollow
})(UsersAPIComponent)