import React from 'react';
import './styles/Clothing_galery.css';
import { Clothing_card } from './Clothing_card';

export const Clothing_galery = ({ image, text, repeat }) => {
  const cards = Array.from({ length: repeat }).map((_, index) => (
    <Clothing_card key={index} imagen={image} text={text} />
  ));

  return (
    <div className='galery-container'>
      {cards}
    </div>
  );
};
