import React, { useState } from 'react';
import Slider from 'react-slick';
import './styles/Clothing_modal.css';
import add_to_cart_icon from '/bolsa-de-la-compra.png';
import { Size_modal } from './Size_modal';
import { Color_modal } from './Color_modal';
import { useMenPageContext } from '../context/MenPage_context';

export const Clothing_modal = ({ isOpen, onClose, data, onWarning, onConfirm }) => {
  const [isSizeModalOpen, setIsSizeModalOpen] = useState(false);
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const { addToCart } = useMenPageContext();

  if (!data) return null;

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
      addToCart({
        images: data.images,
        text: data.text,
        id: data.id,
        size: selectedSize,
        color: selectedColor,
        price: data.price
      });
      onConfirm()
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
          <div className='details-label-container'>
            <label className='clothing-modal-details-label-color' onClick={openColorModal}>
              {selectedColor ? (
                <img src={selectedColor} alt="Selected Color" className='modal-selected-color-thumbnail' />
              ) : (
                'Color'
              )}
            </label>
            <label className='clothing-modal-details-label-size' onClick={openSizeModal}>
              {selectedSize ? selectedSize : 'Talla'}
            </label>
          </div>

          <img
            className='clothing-modal-add-to-cart-icon'
            src={add_to_cart_icon}
            alt="Add to cart"
            onClick={handleAddToCart}
          />
          <div className='modal-clothing-title-wrapper'>
            <label className='modal-clothing-title'>{data.text} (${data.price})</label>
          </div>

        </div>
        <Size_modal
          isOpen={isSizeModalOpen}
          onClose={closeSizeModal}
          sizes={data.sizes || []}
          onSelectSize={setSelectedSize}
        />
        <Color_modal
          isOpen={isColorModalOpen}
          onClose={closeColorModal}
          colors={data.colors || []}
          onSelectColor={setSelectedColor}
        />
      </div>
    </div>
  );
};
