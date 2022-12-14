import React from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";


export const ProfileInfo = (props:any) => {
    return (<>
        {props.profile
            ? <><div className={classes.main}>
                <div className={classes.user_profile_image}>
                    <img className={classes.profile_img}
                         src="https://i.pinimg.com/474x/61/52/60/615260a333b8a6f00ff2cc8e5713e9e2.jpg"
                         alt=""/>
                </div>
                <div className={classes.user_profile_description}>
                    user-profile-description
                </div>
            </div>
            <img src={props.profile.photos.large} alt=""/>
            </>
            :<Preloader/>
        }
    </>)

}