import React from 'react';
import shopping_cart from '/shopping_cart.png';
import './styles/Shopping_cart_button.css';

export const Shopping_cart_button = ({ onClick, isOpen }) => {
  return (
    <div className={`shopping-cart-container ${isOpen ? 'hide' : ''}`}>
      <img 
        className='shopping-cart-button'
        src={shopping_cart} 
        alt="shopping-button" 
        onClick={onClick}
      />
    </div>
  );
};

