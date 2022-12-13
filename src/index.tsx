import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./Store-context";

export let rerenderEntireTree = (): void => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree();

store.subscriber(rerenderEntireTree);