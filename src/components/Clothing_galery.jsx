import React from 'react';
import { Clothing_card } from './Clothing_card';
import './styles/Clothing_galery.css'; // Asegúrate de que esta importación sea correcta

export const Clothing_galery = ({ items, isClothingBarOpen, onOpenClothingModal }) => {
    return (
        <div className={`galery-container ${isClothingBarOpen ? 'with-clothing-bar' : ''}`}>
            {items.map(item => (
                <Clothing_card
                    key={item.id}
                    images={item.images}
                    text={item.text}
                    id={item.id}
                    isClothingBarOpen={isClothingBarOpen}
                    
                    onOpenClothingModal={onOpenClothingModal}
                />
            ))}
        </div>
    );
};
