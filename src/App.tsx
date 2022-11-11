import React from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {Footer} from "./Components/Footer";
import {Navbar} from "./Components/Navbar";
import {Profile} from "./Components/Profile";



function App() {
	return (
		<div className="wrapper">
			<Header/>
			<div className={'content-wrapper'}>
				<Navbar/>
				<Profile/>
			</div>
			<Footer/>
		</div>
	);
}

export default App;
