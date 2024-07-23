import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Gender_card } from '../components/Gender_card_card';
import men from '../images/men.jpg';
import women from '../images/women.jpg';
import { Header_Landing } from '../components/Header_Landing';
import './styles/LandingPage.css';
import Landing_button from '../components/Landing_button';

export const LandingPage = () => {
  const navigate = useNavigate();

  const handleClickMen = () => {
    navigate('/hombre');
  };

  const handleClickWomen = () => {
    navigate('/mujer');
  };

  return (
    <div>
      <Header_Landing />
      <div className='cards-container'>
      <Gender_card imagen={men}/> 
      <Gender_card imagen={women}/>
      <div className='landing-buttons-container'>
        <Landing_button text={"Hombre"} onClick={handleClickMen}/>
        <Landing_button text={"Mujer"} onClick={handleClickWomen}/>
        <Landing_button text={"Media"}/>
        <Landing_button text={"Crew "}/>
        <Landing_button text={"Vision"}/>
      </div>
      </div>
    </div>
  );
};