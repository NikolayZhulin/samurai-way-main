import React from "react";
import classes from './Dialogs.module.css';
import {MessagesContainer} from "./Messages/Messages-container"

export const Dialogs = () => {

    return (
        <div className={classes.main}>
            {/*<DialogItem dialogs={props.store.getState().messagesPage.dialogs}/>*/}
            <MessagesContainer />
        </div>
    )
}