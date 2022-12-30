import React from 'react';
import preloader from "../img/Settings.gif";

const Preloader = () => {
    return (
        <div>
            <img style={{width: '300px'}} src={preloader} alt="Preloader"/>
        </div>
    );
};

export default Preloader;