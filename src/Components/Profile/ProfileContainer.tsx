import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {useParams, withRouter} from "react-router-dom";

// export function withRouter(Children:any){
//     return(props:any)=>{
//         const match  = {params: useParams()};
//         return <Children {...props}  match = {match}/>
//     }
// }

class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {

        let currentUserId = this.props.match.params.id
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+currentUserId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    componentDidUpdate() {

        let currentUserId = this.props.match.params.id?this.props.match.params.id:2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+currentUserId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }


    render(){

        return (
            <div>
                <Profile {...this.props}/>
            </div>
        );
    }
};

let withRouterComponent = withRouter(ProfileContainer)

let mapStateToProps = (state:any) =>({
profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(withRouterComponent);