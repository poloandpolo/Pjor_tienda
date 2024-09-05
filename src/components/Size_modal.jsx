import React from 'react';
import './styles/Size_modal.css';

export const Size_modal = ({ isOpen, onClose, sizes = [], onSelectSize }) => {
  const handleSizeSelect = (size) => {
    onSelectSize(size);
    onClose();
  };

  return (
    <div className={`modal-size-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-size-content" onClick={(e) => e.stopPropagation()}>
        <div className='size-modal-close-button-wrapper'>
          <button className='close-size-button' onClick={onClose}>X</button>
        </div>
        <div className='size-modal-sizes-wrapper'>
          {sizes.length > 0 ? (
            sizes.map((size, index) => (
              <label key={index} onClick={() => handleSizeSelect(size)}>{size}</label>
            ))
          ) : (
            <p>No sizes available</p>
          )}
        </div>
      </div>
    </div>
  );
};
