import React from 'react'
import './styles/Landing_button.css'

const Landing_button = ({text, onClick}) => {
  return (
    <div className='button-wrapper' onClick={onClick}>
        <button className='landing-button'>{text}</button>
    </div>
  )
}

export default Landing_button