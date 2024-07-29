import React from 'react'
import { Header } from '../components/Header'
import { Navigation_bar } from '../components/Navigation_bar'
import { Clothing_bar } from '../components/Clothing_bar'
import './styles/MenPage.css'
import { Clothing_galery } from '../components/Clothing_galery'
import playera_logo_clasica_hombre from '../images/playera_logo_clasica_hombre.jpg';

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
  return (
    <div className='men-page-container'> 
        <Header/>
        <Navigation_bar/>
        <div className='clothing-section'>
        <Clothing_bar dropdownMenus={dropdownMenus} />
        <Clothing_galery 
        image={playera_logo_clasica_hombre} 
        text="Playera logo clásica" 
        repeat={6} 
      />
        </div>
    </div>
  )
}
