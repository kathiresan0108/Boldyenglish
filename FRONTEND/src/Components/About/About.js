
// App.js
import React, { useEffect, useState } from 'react';
import './About.css';
import logo from "../Assets/Logo.png";
import tuty from "../Assets/tuticorin.JPG"
import chennai from "../Assets/chennai.jpeg"
import coimbatore from "../Assets/cbe.jpeg"
// import build from "../Assets/Break.jpg"
import Break from "../Assets/Break.jpg"
import { FaRocket, FaBuilding, FaBolt } from 'react-icons/fa';

function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollAnimation = () => {
      const scrollElements = document.querySelectorAll(
        '.mission-card, .methodology-image, .methodology-text, .team-description, .team-highlight, .location-card, .cta-content'
      );

      const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
          elementTop <= 
          ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
      };

      scrollElements.forEach((el) => {
        if (elementInView(el, 85)) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    };

    // Initialize on load
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
    

      <section className="hero">
        <div className="container hero-content">
          <h1>About Boldly English</h1>
          <p>We empower students to break barriers, build confidence, and express themselves boldly in English through our innovative learning approach.</p>
          <a href="#" className="btn">Explore Our Courses</a>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Mission</h2>
          </div>
          <div className="mission-cards">
            <div className="mission-card">
              <div className="mission-card-icon">
              <FaRocket />
              </div>
              <div className="mission-card-content">
                <h3>Break Barriers</h3>
                <p>We help students overcome fear and hesitation in speaking English, creating a judgment-free environment where mistakes become learning opportunities.</p>
              </div>
            </div>
            <div className="mission-card">
              <div className="mission-card-icon">
              <FaBuilding />
              </div>
              <div className="mission-card-content">
                <h3>Build Confidence</h3>
                <p>Our structured approach emphasizes practical skills that progressively build speaking confidence through real-world scenarios and personalized feedback.</p>
              </div>
            </div>
            <div className="mission-card">
              <div className="mission-card-icon">
              <FaBolt />
              </div>
              <div className="mission-card-content">
                <h3>Empower Expression</h3>
                <p>We equip students with the tools to express themselves clearly and confidently in professional settings, social interactions, and global contexts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="methodology">
        <div className="container">
          <div className="methodology-content">
            <div className="methodology-image">
              <img src={Break} alt="Boldly English Methodology" />
            </div>
            <div className="methodology-text">
              <h2>Our Approach</h2>
              <p>At Boldly English, we've developed a unique methodology that transforms your English speaking abilities from the inside out. Our confidence-building structure ensures measurable progress at every step.</p>
              <div className="methodology-steps">
                {[
                  {
                    number: 1,
                    title: 'Initial Assessment',
                    description: 'We identify your current proficiency level - Basic, Intermediate, or Advanced - to create a personalized learning path.'
                  },
                  {
                    number: 2,
                    title: 'Daily Practice',
                    description: 'Our judgment-free speaking environment encourages daily language usage in comfortable settings.'
                  },
                  {
                    number: 3,
                    title: 'Confidence-Based Structure',
                    description: 'Through roleplays, voice exercises, and real-world practice, we build your speaking confidence systematically.'
                  },
                  {
                    number: 4,
                    title: 'Real-Life Fluency Training',
                    description: 'We prepare you for interviews, group discussions, and casual conversations in English.'
                  }
                ].map((step, index) => (
                  <div className="step-item" key={index}>
                    <div className="step-number">{step.number}</div>
                    <div className="step-text">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Expert Trainers</h2>
          </div>
          <div className="team-description">
            <p>Our biggest strength lies in our expert trainers who bring a wealth of experience, credentials, and empathetic teaching approaches to transform your English speaking journey.</p>
          </div>
          <div className="team-highlights">
            <div className="team-highlight">
              <div className="team-highlight-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>Certified Professionals</h3>
              <p>Our trainers are certified IELTS and TOEFL instructors with advanced credentials in Business Communication.</p>
            </div>
            <div className="team-highlight">
              <div className="team-highlight-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>International Exposure</h3>
              <p>Experienced in training students for global standards with exposure to international teaching methodologies.</p>
            </div>
            <div className="team-highlight">
              <div className="team-highlight-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Empathetic Approach</h3>
              <p>Focused on nurturing confidence alongside language skills through personalized attention and support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="locations">
        <div className="container">
          <div className="section-title">
            <h2>Our Centers</h2>
          </div>
          <div className="location-cards">
            {[
              {
                img: coimbatore,
                name: 'Coimbatore',
                description: 'Our flagship center with state-of-the-art language labs and interactive learning spaces.',
                // address: '123 Anna Nagar, Coimbatore',
                // phone: '+91 98765 43210'
              },
              {
                img: chennai,
                name: 'Chennai',
                description: 'Modern facilities with specialized focus on business English and corporate training.',
                // address: '45 T. Nagar, Chennai',
                // phone: '+91 98765 43211'
              },
              {
                img: tuty,
                name: 'Tuticorin',
                description: 'Our newest center offering personalized English coaching and exam preparation.',
                // address: '78 Beach Road, Tuticorin',
                // phone: '+91 98765 43212'
              }
            ].map((location, index) => (
              <div className="location-card" key={index}>
                <div className="location-img" style={{ backgroundImage: `url(${location.img})` }}></div>
                <div className="location-content">
                  <h3>{location.name}</h3>
                  <p>{location.description}</p>
                  <div className="location-contact">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{location.address}</span>
                  </div>
                  <div className="location-contact">
                    <i className="fas fa-phone"></i>
                    <span>{location.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Speak English Boldly?</h2>
            <p>Join thousands of successful students who have transformed their English communication skills with our proven methodology. Take the first step towards confident English speaking today.</p>
            <a href="#" className="btn btn-white">Enroll Now</a>
          </div>
        </div>
      </section>

     
    </div>
  );
}

export default About;