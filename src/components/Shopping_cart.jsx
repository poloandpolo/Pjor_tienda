import React from 'react';
import './styles/Shopping_cart.css'

export const Shopping_cart = ({ isOpen, onClose }) => {
  return (
    <div className={`modal-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Carrito de Compras</h2>
        <button onClick={onClose}>Cerrar Carrito</button>
        {/* Aquí puedes agregar el contenido del carrito */}
      </div>
    </div>
  );
};




