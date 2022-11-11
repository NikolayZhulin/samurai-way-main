import React from "react";


export const Profile =()=>{
	return(
		<>
			<div className={'main'}>
				<div className={'user-profile'}>
					<div className={'user-profile-image'}><img className={'profile-img'}
					                                           src="https://i.pinimg.com/474x/61/52/60/615260a333b8a6f00ff2cc8e5713e9e2.jpg"
					                                           alt=""/>
					</div>
					<div className={'user-profile-description'}>
						user-profile-description
					</div>
				</div>
				<div className={'posts'}>
					<div className={'new-post'}>new post</div>
					<div className={'my-post'}>my-post</div>
				
				</div>
			</div>
		</>
	
	)
}