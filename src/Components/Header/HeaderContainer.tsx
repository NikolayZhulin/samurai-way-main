import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {setUserAuthData} from "../../Redux/auth-reducer";
import {socialNetworkAPI} from "../../API/API";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        socialNetworkAPI.getUserAuthData().then(response => {
                if(response.data.resultCode === 0){
                    this.props.setUserAuthData(response.data.data)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state:AppStateType):any => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {setUserAuthData})(HeaderContainer);