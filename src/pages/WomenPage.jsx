import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Navigation_bar } from '../components/Navigation_bar';
import { Clothing_bar } from '../components/Clothing_bar';
import './styles/WomenPage.css';
import { Clothing_galery } from '../components/Clothing_galery';
import playera_logo_clasica_mujer from '../images/playera_logo_clasica_mujer.jpg';
import playera_logo_clasica_mujer_2 from '../images/playera_logo_clasica_mujer.jpg';
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
    emoji: "👚",
    items: ["Blusas", "Croptops", "Camisas", "Hoodies", "Chamarras"]
  },
  {
    title: "Vestidos y Jumper",
    emoji: "👗",
    items: ["Vestido", "Jumper"]
  },
  {
    title: "Prendas inferiores",
    emoji: "👖",
    items: ["Jogger", "Jeans", "Faldas"]
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
  { images: [playera_logo_clasica_mujer, playera_logo_clasica_mujer_2], text: "Playera logo clásica" },
  { images: [playera_logo_clasica_mujer, playera_logo_clasica_mujer_2], text: "Playera logo clásica 2" },
  { images: [playera_logo_clasica_mujer, playera_logo_clasica_mujer_2], text: "Playera logo clásica 3" },
  { images: [playera_logo_clasica_mujer, playera_logo_clasica_mujer_2], text: "Playera logo clásica 4" },
  { images: [playera_logo_clasica_mujer, playera_logo_clasica_mujer_2], text: "Playera logo clásica 5" },
  { images: [playera_logo_clasica_mujer, playera_logo_clasica_mujer_2], text: "Playera logo clásica 6" }
];

export const WomenPage = () => {
  const [isClothingBarOpen, setIsClothingBarOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsClothingBarOpen(true); // Muestra la barra de ropa en pantallas grandes
    } else {
      setIsClothingBarOpen(false); // Oculta la barra de ropa en pantallas pequeñas
    }
  };

  useEffect(() => {
    handleResize(); // Verifica el tamaño inicial
    window.addEventListener('resize', handleResize); // Agrega el listener para cambios de tamaño

    return () => window.removeEventListener('resize', handleResize); // Limpia el listener al desmontar
  }, []); // Solo se ejecuta al montar y desmontar el componente

  const toggleClothingBar = () => {
    setIsClothingBarOpen(prevState => !prevState);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='women-page-container'>
      <Header />
      <Navigation_bar />
      <div className='clothing-section'>
        {!isClothingBarOpen && (
          <Menu_button 
            toggleClothingBar={toggleClothingBar} 
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
        />
      </div>
      <Shopping_cart_button onClick={openModal} />
      <Shopping_cart isOpen={modalIsOpen} onClose={closeModal} />
    </div>
  );
};
