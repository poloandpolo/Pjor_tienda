import React from 'react'
import './styles/Gender_card.css'

export const Gender_card = ({imagen, onClick} ) => {
  return (
    <div className='model-container' onClick={onClick}>
      <img className='model-image' src={imagen} alt="" />
    </div>

  )
}
