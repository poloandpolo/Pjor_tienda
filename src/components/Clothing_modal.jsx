import React from 'react';
import Slider from 'react-slick';
import './styles/Clothing_modal.css';

export const Clothing_modal = ({ isOpen, onClose, data }) => {
  if (!data) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div
      className={`modal-clothing-overlay ${isOpen ? 'show' : ''}`}
      onClick={onClose}
    >
      <div
        className="modal-clothing-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className='close-clothing-button' onClick={onClose}>X</button>
        <h2 className='modal-clothing-title'>{data.text}</h2>
        <div className='clothing-modal-slider-container'>
          <Slider {...settings}>
            {data.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`clothing-${index}`} className='modal-image'/>
              </div>
            ))}
          </Slider>
        </div>
        {/* Aquí puedes añadir más contenido o detalles del modal */}
      </div>
    </div>
  );
};

