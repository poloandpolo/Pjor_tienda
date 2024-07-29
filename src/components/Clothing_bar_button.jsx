import React from 'react';
import './styles/Clothing_bar_button.css';

const Clothing_bar_button = ({ text, onClick }) => {
    return (
        <div className='clothing-bar-checkbox-wrapper' onClick={onClick}>
            <input type='checkbox' id={text} value={text} className='clothing-bar-checkbox' />
            <label htmlFor={text}>{text}</label>
        </div>
    );
};

export default Clothing_bar_button;
