import React, { useState } from 'react';
import './styles/Clothing_dropdown_menu.css';

export const Clothing_dropdown_menu = ({ title, children, emoji }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        <label>{emoji}</label> {title}
      </button>
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        {children}
      </div>
    </div>
  );
};
