import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Gender_card } from '../components/Gender_card_card';
import men from '../images/men.jpg';
import women from '../images/women.jpg';
import { Header_Landing } from '../components/Header_Landing';
import './styles/LandingPage.css';
import Landing_button from '../components/Landing_button';

export const LandingPage = () => {
  const navigate = useNavigate();

  const handleClickMen = () => {
    navigate('/men');
  };

  const handleClickWomen = () => {
    navigate('/women');
  };

  return (
    <div>
      <Header_Landing />
      <div className='cards-container'>
      <Gender_card imagen={men} onClick={handleClickMen} /> 
      <Gender_card imagen={women} onClick={handleClickWomen}/>
      <div className='landing-buttons-container'>
        <Landing_button text={"Men"}/>
        <Landing_button text={"Woman"}/>
        <Landing_button text={"Media"}/>
        <Landing_button text={"Team"}/>
        <Landing_button text={"Vision"}/>
      </div>
      </div>
    </div>
  );
};