import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import store from "./Redux/redux-store";
import {StateType} from "./Redux/state";
import {Provider} from "react-redux";


 let rerenderEntireTree = (): void => {
     ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree();

store.subscribe(()=>{
    rerenderEntireTree()
})
