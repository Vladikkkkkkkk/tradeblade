import React from 'react';
import './Rectangle.css';

const Rectangle = ({ fileName }) => {
    return (
        <div className="rectangle-block">
            <img src={`/${fileName}`} alt="" className="rectangle-img" />
        </div>
    );
};

export default Rectangle;