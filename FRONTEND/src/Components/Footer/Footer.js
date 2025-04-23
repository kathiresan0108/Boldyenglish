// Footer.jsx
import React, { useState } from 'react';
import './Footer.css';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import logo from "../Assets/Logo.png"
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <div className="footer-logo">
            <img src={logo} alt="Boldly English Logo" />
            <p className="tagline">BREAK · BUILD · EMPOWER</p>
          </div>
          <p className="footer-description">
            Helping you master English with confidence through personalized learning experiences.
          </p>
        </div>
        
        <div className="footer-nav-section">
          <h3>Quick Links</h3>
          <ul className="footer-nav">
            <li onMouseEnter={() => setHoveredItem('home')} onMouseLeave={() => setHoveredItem(null)}>
              <a href="/" className={hoveredItem === 'home' ? 'hovered' : ''}>Home</a>
            </li>
            {/* <li onMouseEnter={() => setHoveredItem('ielts')} onMouseLeave={() => setHoveredItem(null)}>
              <a href="/ielts" className={hoveredItem === 'ielts' ? 'hovered' : ''}>IELTS</a>
            </li> */}
            <li onMouseEnter={() => setHoveredItem('about')} onMouseLeave={() => setHoveredItem(null)}>
              <a href="/about" className={hoveredItem === 'about' ? 'hovered' : ''}>About Us</a>
            </li>
            <li onMouseEnter={() => setHoveredItem('contact')} onMouseLeave={() => setHoveredItem(null)}>
              <a href="/contact" className={hoveredItem === 'contact' ? 'hovered' : ''}>Contact Us</a>
            </li>
          </ul>
        </div>
        
        <div className="footer-courses-section">
          <h3>Our Courses</h3>
          <ul className="footer-courses">
            <li onMouseEnter={() => setHoveredItem('beginner')} onMouseLeave={() => setHoveredItem(null)}>
              <a href="/beginners" className={hoveredItem === 'beginner' ? 'hovered' : ''}>Beginner</a>
            </li>
            <li onMouseEnter={() => setHoveredItem('intermediate')} onMouseLeave={() => setHoveredItem(null)}>
              <a href="/intermediate" className={hoveredItem === 'intermediate' ? 'hovered' : ''}>Intermediate</a>
            </li>
            <li onMouseEnter={() => setHoveredItem('advanced')} onMouseLeave={() => setHoveredItem(null)}>
              <a href="/advanced" className={hoveredItem === 'advanced' ? 'hovered' : ''}>Advanced</a>
            </li>
            {/* <li onMouseEnter={() => setHoveredItem('voice-finder')} onMouseLeave={() => setHoveredItem(null)}>
              <a href="/voice-finder" className={hoveredItem === 'voice-finder' ? 'hovered' : ''}>Voice Finder</a>
            </li> */}
          </ul>
        </div>
        
        <div className="footer-contact-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={16} className="contact-icon" />
              <a href="tel:+919360458870">+91 9360458870</a>
            </div>
            <div className="contact-item">
              <Mail size={16} className="contact-icon" />
              <a href="mailto:info@boldlyenglish.com">talktous@boldlyenglish.com</a>
            </div>
            <div className="contact-item">
              <MapPin size={16} className="contact-icon" />
              <span>21 main nagar, 3 street, Thoothukudi - 628002</span>
            </div>
          </div>
          
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61572547901013" aria-label="Facebook" target="_blank" className="social-icon">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/boldly_english" aria-label="Instagram" target="_blank" className="social-icon">
              <Instagram size={20} />
            </a>
            <a href="http://www.linkedin.com/in/boldly-english-450a8934a" aria-label="Twitter" target="_blank" className="social-icon">
              <Linkedin size={20} />
            </a>
            <a href="https://www.youtube.com/@Boldly_English" aria-label="YouTube" target="_blank" className="social-icon">
              <Youtube size={20} />
            </a>
          </div>
          
          <div className="whatsapp-buttonss">
            <a href="https://wa.me/919360458870" target="_blank" className="whatsapp-linkss">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Boldly English. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;