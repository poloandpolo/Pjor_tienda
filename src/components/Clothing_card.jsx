import React from 'react'
import './styles/Clothing_card.css'
import add_to_cart_icon from '/bolsa-de-la-compra.png'

export const Clothing_card = ({imagen, text}) => {
  return (
    <div className='clothing-card-container'>
        <img className='clothing-image' src={imagen} alt="clothing-image"/>
        <img className='add-to-cart-icon' src={add_to_cart_icon} alt="" />
        <label>{text}</label>
    </div>
  )
}
