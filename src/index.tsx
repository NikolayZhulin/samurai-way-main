import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./Redux/state";

export let rerenderEntireTree=():void=>{
	ReactDOM.render(
		<App store={store} />,
		document.getElementById('root')
	);
}

rerenderEntireTree();

store.subscriber(rerenderEntireTree);