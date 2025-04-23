import React from 'react';
import Homess from './../Home/Home';
import Course from '../Course/Course';
import './HomePage.css';
import BoldlyEnglishParallax from '../Parallax/Boldyenglish';

const HomePage = () => {
  return (
    <div className="scroll-wrapper">
      <section className="section"><Homess /></section>
      <section className="section"><BoldlyEnglishParallax /></section>
      <section className="section"><Course /></section>
    </div>
  );
};

export default HomePage;