import React from 'react';
import './styles/Menu_button.css';
import menu_clothing from '/Menu-icono.png';

export const Menu_button = ({ isOpen, toggleClothingBar }) => {
  return (
    <div>
      <img 
        src={menu_clothing} 
        className={`menu-button ${isOpen ? 'hide' : 'show'}`}  
        alt="menu-button" 
        onClick={toggleClothingBar}
      />
    </div>
  );
};
