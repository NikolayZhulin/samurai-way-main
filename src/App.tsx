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
import {StateType, StoreType} from "./Redux/state";
import {Friends} from "./Components/Friends/Friends";

type AppPropsType = {
	store:StoreType
}

function App(props: AppPropsType) {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header/>
				<div className={'content-wrapper'}>
					<Navbar store={props.store}/>
					<Route path='/profile' render={() => <Profile store={props.store}/>}/>
					<Route path='/dialogs' render={() => <Dialogs store={props.store}/>}/>
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
