import React from 'react';
import './styles/Menu_button.css';
import menu_clothing from '/Menu-icono.png';

export const Menu_button = ({ isOpen, toggleClothingBar }) => {
  return (
    <div>
      {/* <img 
        src={menu_clothing} 
        className={`menu-button ${isOpen ? 'hide' : 'show'}`}  
        alt="menu-button" 
        onClick={toggleClothingBar}
      /> */}

      <label 
        className={`menu-button ${isOpen ? 'hide' : 'show'}`}  
        alt="menu-button" 
        onClick={toggleClothingBar}
        style={{ whiteSpace: 'pre-wrap' }} // Mantener los saltos de línea
      >
        {'📌'.split('\n').map((char, index) => (
          <React.Fragment key={index}>
            {char}
            <br />
          </React.Fragment>
        ))}
      </label>
    </div>
  );
};
