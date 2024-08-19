import React from 'react';
import './styles/Clothing_bar.css';
import { Clothing_dropdown_menu } from './Clothing_dropdown_menu';
import Clothing_bar_button from './Clothing_bar_button';

export const Clothing_bar = ({ dropdownMenus, isOpen, toggleClothingBar }) => {

  return (
    <div className={`clothing-bar-container ${isOpen ? 'show' : ''}`}>

      <button className='close-menu-button' onClick={toggleClothingBar}>X</button>
      
      {dropdownMenus.length > 0 && dropdownMenus.map((menu, index) => (
        <Clothing_dropdown_menu key={index} title={menu.title} emoji={menu.emoji}>
          {menu.items.map((item, itemIndex) => (
            <Clothing_bar_button key={itemIndex} text={item} />
          ))}
        </Clothing_dropdown_menu>
      ))}
    </div>
  );
};


