import {rerenderEntireTree} from "../Render";

export type dialogsType = {
	id: number
	name: string
}

export type messagesType = {
	id: number
	message: string
}

export type postsType = {
	post: string
	likeCount: number
}

type messagesPageType={
	dialogs:Array<dialogsType>
	messages:Array<messagesType>
}

export type profilePageType={
	posts:Array<postsType>
}

export type friendsItemType ={
	id:number
	name:string
	surname:string
	age:number
}

type FriendsType={
	friends:Array<friendsItemType>
}

export type StateType = {
	messagesPage:messagesPageType
	ProfilePage:profilePageType
	Friends:FriendsType
}

export const state:StateType = {
	messagesPage: {
		dialogs: [
			{id: 1, name: 'Igor'},
			{id: 2, name: 'Oleg'},
			{id: 3, name: 'Alex'},
			{id: 4, name: 'John'},
			{id: 5, name: 'Ron'},
			{id: 6, name: 'Paul'},
		],
		messages: [
			{id: 1, message: 'hnrhnrhn'},
			{id: 2, message: 'Olerhnrg'},
			{id: 3, message: 'Alnrhnrhex'},
			{id: 4, message: 'Jhngorhnhn'},
			{id: 5, message: 'Rodddddddn'},
			{id: 6, message: 'Paghngul'},
		]
	},
	ProfilePage: {
		posts: [
			{post: "It's my second post", likeCount: 5},
			{post: "It's my first post", likeCount: 8},
		]
	},
	Friends:{
		friends:[
			{id:1,name:'Alex',surname:'Koy', age:44},
			{id:1,name:'Oleg',surname:'Roy', age:33},
			{id:1,name:'Stepan',surname:'Toy', age:22},
		]
	}
}


export const addPost = (title:string)=>{
	let post = {post: title, likeCount: 0}
	console.log(post)
	state.ProfilePage.posts.push(post)
	rerenderEntireTree(state)
}

