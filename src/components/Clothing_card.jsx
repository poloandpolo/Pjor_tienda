import React from 'react';
import './styles/Clothing_card.css';
import add_to_cart_icon from '/bolsa-de-la-compra.png';

export const Clothing_card = ({ imagen, text, isClothingBarOpen }) => {
  return (
    <div className='clothing-card-container'>
      <img 
        className={`clothing-image ${isClothingBarOpen ? 'open' : ''}`} 
        src={imagen} 
        alt="clothing-image"
      />
      <img 
        className={`add-to-cart-icon ${isClothingBarOpen ? 'open' : ''}`} 
        src={add_to_cart_icon} 
        alt="Add to cart" 
      />
      <label>{text}</label>
    </div>
  );
};

