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

    // Calcular el total directamente
    const totalPrice = Number(item.price) * Number(item.quantity);

    return (
        <div className="shopping-cart-card">
            <div className='shopping-cart-image-wrapper'>
                <img src={item.images[0]} alt={item.text} />
            </div>
            <div className='text-container'>
                <span>{item.text}</span>
                <div className='details-container'>
                    <div className='color-size-container'>
                        <div className='color-container'>
                            <label>Color: </label>
                            {item.color && (
                                <img src={item.color} alt="Selected color" className='color-thumbnail' />
                            )}
                        </div>
                        <div className='size-container'>
                            <label>Talla: </label>
                            <span>{item.size ? item.size : 'Not Selected'}</span>
                        </div>
                    </div>
                    <div className='counter-container'>
                        <label>Cantidad</label> <br />
                        <button onClick={handleDecrement}>-</button>
                        <label>{item.quantity}</label>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <div className='price-container'>
                    <label>Total: {`$${totalPrice.toFixed(2)}`}</label>
                </div>
                </div>
                
            </div>
        </div>
    );
};
