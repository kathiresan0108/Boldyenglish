// HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Details.css';
import hero from "../Assets/hero1.jpg"
const HeroSection = () => {
  return (
    <div className="hero-container">
      <motion.h1 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to the Adventure!
      </motion.h1>

      <motion.img 
        src={hero}
        alt="Hero Character"
        className="character"
        animate={{ x: [0, 100, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </div>
  );
};

export default HeroSection;
