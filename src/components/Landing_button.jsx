import React from 'react'
import './styles/Landing_button.css'

const Landing_button = ({text}) => {
  return (
    <div className='button-wrapper'>
        <button className='landing-button'>{text}</button>
    </div>
  )
}

export default Landing_button