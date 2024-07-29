import React from 'react'
import { Header } from '../components/Header'
import { Navigation_bar } from '../components/Navigation_bar'
import { Clothing_bar } from '../components/Clothing_bar'
import './styles/WomenPage.css'
import { Clothing_galery } from '../components/Clothing_galery'
import playera_logo_clasica_mujer from '../images/playera_logo_clasica_mujer.jpg';

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
  return (
    <div className='women-page-container'> 
        <Header/>
        <Navigation_bar/>
        <div className='clothing-section'>
        <Clothing_bar dropdownMenus={dropdownMenus} />
        <Clothing_galery 
        image={playera_logo_clasica_mujer} 
        text="Playera logo clásica" 
        repeat={6} 
      />
        </div>
    </div>
  )
}
