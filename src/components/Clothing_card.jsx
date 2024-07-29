import React from 'react'
import './styles/Clothing_card.css'

export const Clothing_card = ({imagen, text}) => {
  return (
    <div className='clothing-card-container'>
        <img className='clothing-image' src={imagen} alt="clothing-image"/>
        <label>{text}</label>
    </div>
  )
}
