import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getAuthData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.getAuthData()
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

export default connect(mapStateToProps, {getAuthData})(HeaderContainer);