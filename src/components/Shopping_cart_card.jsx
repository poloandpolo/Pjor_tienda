import React, { useState } from 'react';
import './styles/Shopping_cart_card.css';

export const Shopping_cart_card = ({ item }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return (
        <div className="shopping-cart-card">
            <div className='shopping-cart-image-wrapper'></div>
            <img src={item.images[0]} alt={item.text} />
            <div className='text-container'>
                <span>{item.text}</span>
                <div className='details-container'>
                    <label>Color</label> <br />
                    <label>Talla</label> <br />
                    <div className='counter-container'>
                    <label>Cantidad</label> <br />
                        <button onClick={handleDecrement}>-</button>
                        <label>{quantity}</label>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
