import React, { useState } from 'react';
import Slider from 'react-slick';
import './styles/Clothing_card.css';
import add_to_cart_icon from '/bolsa-de-la-compra.png';
import { Size_modal } from './Size_modal';
import { useMenPageContext } from '../context/MenPage_context';

export const Clothing_card = ({ images, text, id, isClothingBarOpen, onOpenClothingModal }) => {
  const [isSizeModalOpen, setIsSizeModalOpen] = useState(false);
  const { addToCart } = useMenPageContext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const handleAddToCart = () => {
    addToCart({ images, text, id });
  };

  const openSizeModal = () => {
    setIsSizeModalOpen(true);
  };

  const closeSizeModal = () => {
    setIsSizeModalOpen(false);
  };

  const handleImageClick = () => {
    onOpenClothingModal({ images, text });
  };

  return (
    <div className={`clothing-card-container ${isClothingBarOpen ? 'open' : ''}`}>
      <div className="slider-container">
        <Slider {...settings} className="slider">
          {images.map((image, index) => (
            <div key={index}>
              <img 
                className={`clothing-image ${isClothingBarOpen ? 'open' : ''}`} 
                src={image} 
                alt={`clothing-image-${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <button className='open-clothing-modal-button' onClick={handleImageClick}></button>
      <img 
        className={`add-to-cart-icon ${isClothingBarOpen ? 'open' : ''}`} 
        src={add_to_cart_icon} 
        alt="Add to cart" 
        onClick={handleAddToCart}
      />
      <label>{text}</label>
      <label className='details-label-color'>Color</label>
      <label className='details-label-size' onClick={openSizeModal}>
        Talla
      </label>
      {isSizeModalOpen && (
        <Size_modal
          isOpen={isSizeModalOpen}
          onClose={closeSizeModal}
        />
      )}
    </div>
  );
};
