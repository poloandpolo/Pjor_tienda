import React from 'react';
import './styles/Color_modal.css';

export const Color_modal = ({ isOpen, onClose, colors = [], onSelectColor }) => {
  const handleColorSelect = (color) => {
    onSelectColor(color);
    onClose();
  };

  return (
    <div className={`modal-color-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-color-content" onClick={(e) => e.stopPropagation()}>
        <div className='color-modal-close-button-wrapper'>
          <button className='close-color-button' onClick={onClose}>X</button>
        </div>
        <div className='color-modal-colors-wrapper'>
          {colors.length > 0 ? (
            colors.map((color, index) => (
              <label key={index} onClick={() => handleColorSelect(color)}>
                <img src={color} alt={`color-${index}`} className='color-thumbnail' />
              </label>
            ))
          ) : (
            <p>No colors available</p>
          )}
        </div>
      </div>
    </div>
  );
};
