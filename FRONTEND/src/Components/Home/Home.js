import React, { useEffect, useState } from 'react';
import './Home.css';
import logo from "../Assets/Logo.png"
import girl from "../Assets/girlshow.png"
import whatsapp from "../Assets/whatsapp.png"
import a from "../Assets/free.png"
import b from "../Assets/30days.png"
import c from "../Assets/c.png"
import d from "../Assets/teach.png"
const Homess = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Animation timing for elements
    const titleElement = document.querySelector('.main-title');
    const subtitleElement = document.querySelector('.subtitle');
    const appDisplayElement = document.querySelector('.app-display');
    
    setTimeout(() => {
      titleElement.classList.add('animate');
      
      setTimeout(() => {
        subtitleElement.classList.add('animate');
        
        setTimeout(() => {
          appDisplayElement.classList.add('animate');
        }, 300);
      }, 300);
    }, 300);

    // Handle scroll for floating bubbles
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="tiqmo-container">
    
      

      {/* Hero Section */}
      <div className="hero-section">
        <div className="content-wrapper">
          <h1 className="main-title">
            NEED TO<br />MASTER COMMUNICATION ?
          </h1>
          <p className="subtitle">BREAK . BUILD . EMPOWER</p>
        </div>

        {/* App Display */}
        <div className="app-display">
          <img src={girl} alt="Tiqmo Mobile App" />
        </div>

        {/* Floating Bubbles */}
        <div className="bubbles-container">
          <div className="bubble bubble-1">
            <img src={a} alt="User" />
          </div>
          <div className="bubble bubble-2">
            <img src={b} alt="User" />
          </div>
          <div className="bubble bubble-3">
            <img src={d} alt="User" />
          </div>
          <div className="bubble bubble-4">
            <img src={a} alt="User" />
          </div>
          <div className="bubble bubble-5">
            <img src={c} alt="User" />
          </div>
          <div className="bubble bubble-6">
            <img src={c} alt="User" />
          </div>
          <div className="bubble bubble-7">
            <img src={d} alt="Wallet" />
          </div>
          <div className="bubble bubble-8">
            <img src={c} alt="User" />
          </div>
        </div>
      </div>

      {/* Download Section */}
      {/* <div className="download-section">
        <div className="qr-code">
          <img src={whatsapp} alt="QR Code" />
        </div>
        <div className="download-info">
          <p>Scan TO<br />Join Our<br />Boldly English Class</p>
        </div>
      </div> */}

      {/* Scroll Down Indicator */}
      {/* <div className="scroll-indicator">
        <div className="scroll-circle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="scroll-text">
          <span>S</span>
          <span>C</span>
          <span>R</span>
          <span>O</span>
          <span>L</span>
          <span>L</span>
          <span>&nbsp;</span>
          <span>D</span>
          <span>O</span>
          <span>W</span>
          <span>N</span>
          <span>&nbsp;</span>
          <span>M</span>
          <span>O</span>
          <span>R</span>
          <span>E</span>
         
        </div>
      </div> */}
    </div>
  );
};

export default Homess;