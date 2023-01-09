import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileInfo} from "../../Redux/profile-reducer";
import { withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {
        this.props.getProfileInfo(this.props.match.params.id | 2)
    }

    // componentDidUpdate() {
    //     this.props.getProfileInfo(this.props.match.params.id)
    // }


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

export default connect(mapStateToProps, {getProfileInfo})(withRouterComponent);