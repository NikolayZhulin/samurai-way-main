import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";



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
