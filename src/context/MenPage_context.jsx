import React, { createContext, useContext, useState } from 'react';
import playera_logo_clasica_hombre from '../images/playera_logo_clasica_hombre.jpg';
import playera_logo_clasica_hombre_2 from '../images/playera_logo_clasica_hombre.jpg';
import black from '../images/Clothing_Colors/Black.jpg';
import white from '../images/Clothing_Colors/white.jpg';

// Crear el contexto
const MenPageContext = createContext();

// Hook para utilizar el contexto
export const useMenPageContext = () => {
    return useContext(MenPageContext);
};

// Proveedor del contexto
export const MenPageContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const clothingItems = [
        { id: 1, images: [playera_logo_clasica_hombre, playera_logo_clasica_hombre_2], text: "Playera logo clásica", sizes: ['s', 'm', 'l', 'xl', 'xxl'], colors: [black, white], price: 100 },
        { id: 2, images: [playera_logo_clasica_hombre, playera_logo_clasica_hombre_2], text: "Playera logo clásica 2", sizes: ['s', 'm', 'l', 'xl', 'xxl'], colors: [black, white], price: 100 },
        { id: 3, images: [playera_logo_clasica_hombre, playera_logo_clasica_hombre_2], text: "Playera logo clásica 3", sizes: ['s', 'm', 'l', 'xl', 'xxl'], colors: [black, white], price: 100 },
        { id: 4, images: [playera_logo_clasica_hombre, playera_logo_clasica_hombre_2], text: "Playera logo clásica 4", sizes: ['s', 'm', 'l', 'xl', 'xxl'], colors: [black, white], price: 100 },
        { id: 5, images: [playera_logo_clasica_hombre, playera_logo_clasica_hombre_2], text: "Playera logo clásica 5", sizes: ['s', 'm', 'l', 'xl', 'xxl'], colors: [black, white], price: 100 },
        { id: 6, images: [playera_logo_clasica_hombre, playera_logo_clasica_hombre_2], text: "Playera logo clásica 6", sizes: ['s', 'm', 'l', 'xl', 'xxl'], colors: [black, white], price: 100 }
    ];

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(cartItem => 
                cartItem.id === item.id && cartItem.size === item.size // Verifica tamaño junto con id
            );

            if (existingItemIndex > -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += 1;
                return updatedItems;
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const updateItemQuantity = (id, amount) => {
        setCartItems(prevItems => {
            return prevItems.map(item => 
                item.id === id ? { ...item, quantity: item.quantity + amount } : item
            ).filter(item => item.quantity > 0); // Elimina artículos con cantidad <= 0
        });
    };

    return (
        <MenPageContext.Provider value={{ cartItems, clothingItems, addToCart, updateItemQuantity }}>
            {children}
        </MenPageContext.Provider>
    );
};
