import React from 'react';
import Slider from 'react-slick';
import './styles/Clothing_modal.css';
import add_to_cart_icon from '/bolsa-de-la-compra.png';
import { Size_modal } from './Size_modal';

export const Clothing_modal = ({ isOpen, onClose, data }) => {
  if (!data) return null;

  const settings = {
    dots: false,
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
        <div className='close-clothing-button-wrapper'>
          <button className='close-clothing-button' onClick={onClose}>X</button>
        </div>
        <div className='clothing-modal-slider-container'>
          <Slider {...settings}>
            {data.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`clothing-${index}`} className='modal-image' />
              </div>
            ))}
          </Slider>
          <label className='clothing-modal-details-label-color'>Color</label>
          <label className='clothing-modal-details-label-size'>Talla</label>

          <img
            className='clothing-modal-add-to-cart-icon'
            src={add_to_cart_icon}
            alt="Add to cart"
          />

          <h2 className='modal-clothing-title'>{data.text}</h2>

            <Size_modal/>

        </div>
        {/* Aquí puedes añadir más contenido o detalles del modal */}
      </div>
    </div>
  );
};

