// src/pages/MenPage.js
import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Navigation_bar } from '../components/Navigation_bar';
import { Clothing_bar } from '../components/Clothing_bar';
import './styles/MenPage.css';
import { Clothing_galery } from '../components/Clothing_galery';
import { Clothing_modal } from '../components/Clothing_modal';
import { Menu_button } from '../components/Menu_button';
import { Shopping_cart } from '../components/Shopping_cart';
import { Shopping_cart_button } from '../components/Shopping_cart_button';
import { useMenPageContext } from '../context/MenPage_context';
import { Warning_modal } from '../components/Warning_modal';
import { Confirmation_modal } from '../components/Confimation_modal';

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

export const MenPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isClothingBarOpen, setIsClothingBarOpen] = useState(false);
    const [clothingModalData, setClothingModalData] = useState(null);
    const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

    const { clothingItems } = useMenPageContext();

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

    const openWarningModal = () => {
        setIsWarningModalOpen(true);
    };

    const closeWarningModal = () => {
        setIsWarningModalOpen(false);
    };

    const openConfirmationModal = () => {
        setIsConfirmationModalOpen(true);
    };

    const closeConfirmationModal = () => {
        setIsConfirmationModalOpen(false);
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
                    onWarning={openWarningModal}
                    onConfirm={openConfirmationModal}  // Nueva prop
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
                onWarning={openWarningModal}
                onConfirm={openConfirmationModal} 
            />

            <Confirmation_modal
                isOpen={isConfirmationModalOpen}
                onClose={closeConfirmationModal}
            />


            <Warning_modal
                isOpen={isWarningModalOpen}
                onClose={closeWarningModal}
            />
        </div>
    );
};
