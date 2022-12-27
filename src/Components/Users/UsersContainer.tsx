import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    followAC,
    setIsFetchingAC,
    setPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersType
} from "../../Redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import preloader from "../img/Settings.gif"

type mapStateToPropsType={
    users:UsersType[];
    totalUsers: number;
    pageSize: number;
    selectedPage:number;
    isFetch:boolean;
}

type UsersPropsType = {
    users: UsersType[];
    totalUsers: number;
    pageSize: number;
    selectedPage: number;
    follow: (id: number) => void;
    unfollow: (id: number) => void;
    setUsers: (users: UsersType[]) => void;
    setPage: (page: number) => void;
    setTotalUsersCount: (totalUsersCount: number) => void;
    setIsFetch: (isFetch:boolean)=> void;
    isFetch:boolean
}

class UsersAPIComponent extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
       this.props.setIsFetch(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.selectedPage}`)
            .then(response => {
                this.props.setIsFetch(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChange = (p: number) => {
        this.props.setPage(p)
        this.props.setIsFetch(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
            .then(response => {
                this.props.setIsFetch(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (this.props.isFetch
            ? <img style={{width: '300px'}} src={preloader} alt="Preloader"/>
           : <Users totalUsers={this.props.totalUsers}
                      pageSize={this.props.pageSize}
                      selectedPage={this.props.selectedPage}
                      onPageChange={this.onPageChange}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>)
    }
}

const mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return{
        users: state.usersPage.users,
        totalUsers: state.usersPage.totalUsers,
        pageSize:state.usersPage.pageSize,
        selectedPage:state.usersPage.selectedPage,
        isFetch: state.usersPage.isFetch
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        setUsers: (users: UsersType[])=>dispatch(setUsersAC(users)),
        follow:(id:number)=>dispatch(followAC(id)),
        unfollow:(id:number)=>dispatch(unFollowAC(id)),
        setPage:(page:number)=>dispatch(setPageAC(page)),
        setTotalUsersCount:(totalUsersCount:number)=>dispatch(setTotalUsersCountAC(totalUsersCount)),
        setIsFetch: (isFetch:boolean)=> dispatch(setIsFetchingAC(isFetch))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)