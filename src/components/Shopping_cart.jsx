import React from 'react';
import './styles/Shopping_cart.css';
import { Shopping_cart_card } from './Shopping_cart_card';

export const Shopping_cart = ({ isOpen, onClose, items }) => {
  const cartCards = items.map((item, index) => (
    <Shopping_cart_card key={index} item={item} />
  ));

  return (
    <div className={`modal-cart-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-cart-content" onClick={(e) => e.stopPropagation()}>
        <div className='close-button-wrapper'>
          <button className='close-cart-button' onClick={onClose}>X</button>
        </div>
        <h2 className='model-cart-title'>Carrito de Compras</h2>
        <div className="cart-items">
          {cartCards}
        </div>
      </div>
    </div>
  );
};




