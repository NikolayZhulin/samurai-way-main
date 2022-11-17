import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type dialogsType={
	id:number
	name:string
}

export type messagesType={
	id:number
	message:string
}

export type postsType={
	post:string
	likeCount:number
}

const dialogs:Array<dialogsType> = [
	{id: 1, name: 'Igor'},
	{id: 2, name: 'Oleg'},
	{id: 3, name: 'Alex'},
	{id: 4, name: 'John'},
	{id: 5, name: 'Ron'},
	{id: 6, name: 'Paul'},
]
const messages:Array<messagesType> = [
	{id: 1, message: 'hnrhnrhn'},
	{id: 2, message: 'Olerhnrg'},
	{id: 3, message: 'Alnrhnrhex'},
	{id: 4, message: 'Jhngorhnhn'},
	{id: 5, message: 'Rodddddddn'},
	{id: 6, message: 'Paghngul'},
]

const posts:Array<postsType>=[
	{post:"It's my second post",likeCount:5  },
	{post:"It's my first post",likeCount:8},
]

ReactDOM.render(
    <App  messages={messages} posts={posts} dialogs={dialogs}/>,
  document.getElementById('root')
);