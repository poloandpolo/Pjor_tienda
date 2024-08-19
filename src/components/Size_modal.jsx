import React from 'react';
import './styles/Size_modal.css'; // Asegúrate de que este archivo CSS exista y tenga los estilos adecuados

export const Size_modal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal-size-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}>
      <button className='close-size-button' onClick={onClose}>X</button>
      <div className="modal-size-content" onClick={(e) => e.stopPropagation()}>
        <label>S</label>
        <label>M</label>
        <label>L</label>
        <label>XL</label>
        <label>XXL</label>
      </div>
    </div>
  );
};
