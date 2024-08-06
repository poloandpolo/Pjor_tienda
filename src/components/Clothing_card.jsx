import React from 'react';
import Slider from 'react-slick';
import './styles/Clothing_card.css';
import add_to_cart_icon from '/bolsa-de-la-compra.png';


export const Clothing_card = ({ images, text, isClothingBarOpen }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  
  return (
    <div className={`clothing-card-container ${isClothingBarOpen ? 'open' : ''}`}>
      <Slider {...settings}>
        {images.map((imagen, index) => (
          <div key={index}>
            <img 
              className={`clothing-image ${isClothingBarOpen ? 'open' : ''}`} 
              src={imagen} 
              alt={`clothing-image-${index}`}
            />
          </div>
        ))}
      </Slider>
      <img 
        className={`add-to-cart-icon ${isClothingBarOpen ? 'open' : ''}`} 
        src={add_to_cart_icon} 
        alt="Add to cart" 
      />
      <label>{text}</label>
    </div>
  );
};
