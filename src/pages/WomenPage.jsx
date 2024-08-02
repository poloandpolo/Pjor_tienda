import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Navigation_bar } from '../components/Navigation_bar';
import { Clothing_bar } from '../components/Clothing_bar';
import './styles/WomenPage.css';
import { Clothing_galery } from '../components/Clothing_galery';
import playera_logo_clasica_mujer from '../images/playera_logo_clasica_mujer.jpg';
import { Menu_button } from '../components/Menu_button';

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

export const WomenPage = () => {
  const [isClothingBarOpen, setIsClothingBarOpen] = useState(false);

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
          image={playera_logo_clasica_mujer} 
          text="Playera logo clásica" 
          repeat={6} 
          isClothingBarOpen={isClothingBarOpen}
        />
      </div>
    </div>
  );
};
