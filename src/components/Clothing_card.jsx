import React, { useState } from 'react';
import Slider from 'react-slick';
import './styles/Clothing_card.css';
import add_to_cart_icon from '/bolsa-de-la-compra.png';
import { Size_modal } from './Size_modal';
import { useMenPageContext } from '../context/MenPage_context';
import { Color_modal } from './Color_modal';

export const Clothing_card = ({ images, text, sizes, colors, id, price, isClothingBarOpen, onOpenClothingModal, onWarning, onConfirm }) => {
  const [isSizeModalOpen, setIsSizeModalOpen] = useState(false);
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
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
    if (!selectedSize || !selectedColor) {
        onWarning(); // Mostrar el modal de advertencia si no se selecciona talla o color
    } else {
        addToCart({ images, text, id, size: selectedSize, color: selectedColor, price });
        onConfirm(); // Mostrar el Confirmation_modal
    }
};


  const openSizeModal = () => {
    setIsSizeModalOpen(true);
  };

  const closeSizeModal = () => {
    setIsSizeModalOpen(false);
  };

  const openColorModal = () => {
    setIsColorModalOpen(true);
  };

  const closeColorModal = () => {
    setIsColorModalOpen(false);
  };

  const handleImageClick = () => {
    onOpenClothingModal({ images, text, sizes, colors, price });
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
      <label>{text} (${price})</label>
      <div className='details-label-container'>
        <label className='details-label-color' onClick={openColorModal}>
          {selectedColor ? (
            <img src={selectedColor} alt="Selected Color" className='selected-color-thumbnail' />
          ) : (
            'Color'
          )}
        </label>
        <label className='details-label-size' onClick={openSizeModal}>
          {selectedSize ? selectedSize : 'Talla'}
        </label>
      </div>
      {isSizeModalOpen && (
        <Size_modal
          isOpen={isSizeModalOpen}
          onClose={closeSizeModal}
          sizes={sizes}
          onSelectSize={setSelectedSize} // Pasar la función para seleccionar talla
        />
      )}
      {isColorModalOpen && (
        <Color_modal
          isOpen={isColorModalOpen}
          onClose={closeColorModal}
          colors={colors}
          onSelectColor={setSelectedColor} // Pasar la función para seleccionar color
        />
      )}
    </div>
  );
};
