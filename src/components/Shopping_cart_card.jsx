import React from 'react';
import { useMenPageContext } from '../context/MenPage_context'; // Ajusta la ruta si es necesario
import './styles/Shopping_cart_card.css';

export const Shopping_cart_card = ({ item }) => {
    const { updateItemQuantity } = useMenPageContext();

    const handleIncrement = () => {
        updateItemQuantity(item.id, 1);
    };

    const handleDecrement = () => {
        updateItemQuantity(item.id, -1);
    };

    return (
        <div className="shopping-cart-card">
            <div className='shopping-cart-image-wrapper'>
                <img src={item.images[0]} alt={item.text} />
            </div>
            <div className='text-container'>
                <span>{item.text}</span>
                <div className='details-container'>
                    <label>Color</label> <br />
                    <label>Talla</label> <br />
                    <div className='counter-container'>
                        <label>Cantidad</label> <br />
                        <button onClick={handleDecrement}>-</button>
                        <label>{item.quantity}</label>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
