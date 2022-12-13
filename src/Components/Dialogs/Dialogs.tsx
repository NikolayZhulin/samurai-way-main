import React from "react";
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {StoreType} from "../../Redux/state";
import {MessagesContainer} from "./Messages/Messages-container"


type DialogsPropsType = {
    store: StoreType | any;
}


export const Dialogs = (props: DialogsPropsType) => {

    return (
        <div className={classes.main}>
            <DialogItem dialogs={props.store.getState().messagesPage.dialogs}/>
            <MessagesContainer/>
        </div>
    )
}