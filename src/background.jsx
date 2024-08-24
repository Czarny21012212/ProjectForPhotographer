import React from 'react';
import background from '/photo/Background.jpg';
import './App.css';

function Background() {
    return (
        <div className="background-container">
            <img id='StronaGłówna' className="background-image" src={background} alt="Background" />
        </div>
    );
}

export default Background;
