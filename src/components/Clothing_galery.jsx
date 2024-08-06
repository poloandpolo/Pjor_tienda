import React from 'react';
import './styles/Clothing_galery.css';
import { Clothing_card } from './Clothing_card';

export const Clothing_galery = ({ items, isClothingBarOpen }) => {
  const cards = items.map((item, index) => (
    <Clothing_card 
      key={index} 
      images={item.images} 
      text={item.text} 
      isClothingBarOpen={isClothingBarOpen} 
    />
  ));

  return (
    <div className={`galery-container ${isClothingBarOpen ? 'with-clothing-bar' : ''}`}>
      {cards}
    </div>
  );
};
