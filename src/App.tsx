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
import {dialogsType, messagesType, postsType} from "./index";

type AppPropsType = {
	dialogs: Array<dialogsType>
	posts: Array<postsType>
	messages: Array<messagesType>
}

function App(props: AppPropsType) {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header/>
				<div className={'content-wrapper'}>
					<Navbar/>
					<Route path='/profile' render={()=><Profile posts={props.posts}/>}/>
					<Route path='/dialogs' render={()=><Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
					<Route path='/news' render={News}/>
					<Route path='/music' render={Music}/>
					<Route path='/settings' render={Settings}/>
				</div>
				<Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;
