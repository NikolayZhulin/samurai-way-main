import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {Navbar} from "./Components/Navbar/Navbar";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Friends} from "./Components/Friends/Friends";
import {UsersContainer} from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";



function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className={'content-wrapper'}>
                <Navbar/>
                <Route path='/profile' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <Dialogs/>}/>
                <Route path='/news' render={News}/>
                <Route path='/music' render={Music}/>
                <Route path='/settings' render={Settings}/>
                <Route path='/users' render={()=><UsersContainer/>}/>
                <Route path='/friends' render={Friends}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
