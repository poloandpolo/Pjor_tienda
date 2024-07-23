import React from 'react'
import './styles/Navigation_bar.css'
import { useNavigate } from 'react-router-dom';

export const Navigation_bar = () => {

  const navigate = useNavigate();

  const handleClickMen = () => {
    navigate('/hombre');
  };

  const handleClickWomen = () => {
    navigate('/mujer');
  };

  return (
    <div className='navigationbar-container'>
        <label onClick={handleClickMen}>Hombre</label>
        <label onClick={handleClickWomen}>Mujer</label>
        <label>Media</label>
        <label>Crew</label>
        <label>Vision</label>
    </div>
  )
}
