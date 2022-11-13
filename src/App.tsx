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



function App() {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header/>
				<div className={'content-wrapper'}>
					<Navbar/>
					<Route path='/profile' component={Profile}/>
					<Route path='/dialogs' component={Dialogs}/>
					<Route path='/news' component={News}/>
					<Route path='/music' component={Music}/>
					<Route path='/settings' component={Settings}/>
				</div>
				<Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;
