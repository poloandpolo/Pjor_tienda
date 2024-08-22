import React, { createContext, useContext, useState } from 'react';

const MenPageContext = createContext();

export const useMenPageContext = () => {
    return useContext(MenPageContext);
};

export const MenPageContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(cartItem => 
                cartItem.id === item.id
            );

            if (existingItemIndex > -1) {
                // Si el ítem ya está en el carrito, actualizar la cantidad
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += 1;
                return updatedItems;
            } else {
                // Si el ítem no está en el carrito, añadirlo con cantidad 1
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const updateItemQuantity = (id, delta) => {
        setCartItems(prevItems => {
            const updatedItems = prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            );
            return updatedItems;
        });
    };

    return (
        <MenPageContext.Provider value={{ cartItems, addToCart, updateItemQuantity }}>
            {children}
        </MenPageContext.Provider>
    );
};
