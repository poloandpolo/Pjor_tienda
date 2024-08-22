import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Navigation_bar } from '../components/Navigation_bar';
import { Clothing_bar } from '../components/Clothing_bar';
import './styles/MenPage.css';
import { Clothing_galery } from '../components/Clothing_galery';
import { Clothing_modal } from '../components/Clothing_modal';
import playera_logo_clasica_hombre from '../images/playera_logo_clasica_hombre.jpg';
import playera_logo_clasica_hombre_2 from '../images/playera_logo_clasica_hombre.jpg'; // Asegúrate de que la ruta sea correcta
import { Menu_button } from '../components/Menu_button';
import { Shopping_cart } from '../components/Shopping_cart';
import { Shopping_cart_button } from '../components/Shopping_cart_button';

const dropdownMenus = [
    {
        title: "Gorras",
        emoji: "🧢",
        items: ["Beisbol", "Snapback", "5 Paneles"]
    },
    {
        title: "Prendas superiores",
        emoji: "👕",
        items: ["Playeras", "Polos", "Camisas", "Hoodies", "Chamarras"]
    },
    {
        title: "Prendas inferiores",
        emoji: "👖",
        items: ["Jogger", "Jeans", "Calcetas"]
    },
    {
        title: "Accesorios",
        emoji: "🧦",
        items: ["Cinturones", "Calcetas"]
    },
    {
        title: "Joyeria",
        emoji: "💍",
        items: ["Collares", "Pulseras", "Brazaletes", "Cadenas", "Dijes"]
    }
];

const clothingItems = [
    { id: 1, images: [playera_logo_clasica_hombre, playera_logo_clasica_hombre_2], text: "Playera logo clásica" },
    { id: 2, images: [playera_logo_clasica_hombre, playera_logo_clasica_hombre_2], text: "Playera logo clásica 2" },
    { id: 3, images: [playera_logo_clasica_hombre, playera_logo_clasica_hombre_2], text: "Playera logo clásica 3" },
    { id: 4, images: [playera_logo_clasica_hombre, playera_logo_clasica_hombre_2], text: "Playera logo clásica 4" },
    { id: 5, images: [playera_logo_clasica_hombre, playera_logo_clasica_hombre_2], text: "Playera logo clásica 5" },
    { id: 6, images: [playera_logo_clasica_hombre, playera_logo_clasica_hombre_2], text: "Playera logo clásica 6" }
];

export const MenPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isClothingBarOpen, setIsClothingBarOpen] = useState(false);
    const [clothingModalData, setClothingModalData] = useState(null);
    

    const openClothingModal = (item) => {
        setClothingModalData(item);
    };

    const closeClothingModal = () => {
        setClothingModalData(null);
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const toggleClothingBar = () => {
        setIsClothingBarOpen(prevState => !prevState);
    };

    return (
        <div className='men-page-container'>
            <Header />
            <Navigation_bar />
            <div className='clothing-section'>
                {!isClothingBarOpen && (
                    <Menu_button
                        toggleClothingBar={toggleClothingBar}
                        isOpen={isClothingBarOpen}
                    />
                )}
                {isClothingBarOpen && (
                    <Clothing_bar
                        dropdownMenus={dropdownMenus}
                        isOpen={isClothingBarOpen}
                        toggleClothingBar={toggleClothingBar}
                    />
                )}
                <Clothing_galery
                    items={clothingItems}
                    isClothingBarOpen={isClothingBarOpen}
                    onOpenClothingModal={openClothingModal}
                />
            </div>
            <Shopping_cart_button
                onClick={openModal}
                isOpen={isClothingBarOpen}
            />
            <Shopping_cart
                isOpen={modalIsOpen}
                onClose={closeModal}
            />

            <Clothing_modal
                isOpen={clothingModalData !== null}
                onClose={closeClothingModal}
                data={clothingModalData}
            />
        </div>
    );
};
