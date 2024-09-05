import React from 'react';
import './styles/Clothing_galery.css'; 
import { Clothing_card } from './Clothing_card';


export const Clothing_galery = ({ items, isClothingBarOpen, onOpenClothingModal, onWarning, onConfirm }) => {
    return (
        <div className={`galery-container ${isClothingBarOpen ? 'with-clothing-bar' : ''}`}>
            {items.map(item => (
                <Clothing_card
                    key={item.id}
                    images={item.images}
                    text={item.text}
                    id={item.id}
                    sizes={item.sizes}
                    colors={item.colors}
                    price={item.price}
                    isClothingBarOpen={isClothingBarOpen}
                    onOpenClothingModal={onOpenClothingModal}
                    onWarning={onWarning}
                    onConfirm={onConfirm}  // Nueva prop
                />

            ))}
        </div>
    );
};
