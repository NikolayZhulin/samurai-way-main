import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {StateType} from "./Redux/state";
import {Friends} from "./Components/Friends/Friends";

type AppPropsType = {
	state: StateType
	addPost: (title: string) => void
}

function App(props: AppPropsType) {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header/>
				<div className={'content-wrapper'}>
					<Navbar state={props.state}/>
					<Route path='/profile' render={() => <Profile state={props.state} addPost={props.addPost}/>}/>
					<Route path='/dialogs' render={() => <Dialogs state={props.state}/>}/>
					<Route path='/news' render={News}/>
					<Route path='/music' render={Music}/>
					<Route path='/settings' render={Settings}/>
					<Route path='/friends' render={Friends}/>
				</div>
				<Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;
