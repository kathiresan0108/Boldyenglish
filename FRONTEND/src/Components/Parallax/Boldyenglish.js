import React, { useEffect, useRef } from 'react';
import './BoldlyEnglishParallax.css';

import slide1 from '../Assets/mindset1.png';
import slide2 from '../Assets/pngwing.png';
import slide3 from '../Assets/promise.png';

const BoldlyEnglishParallax = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-view');
          } else {
            entry.target.classList.remove('slide-in-view');
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px' }
    );

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const slideContents = [
    {
      title: "IT'S A MINDSET SHIFT",
      points: [
        "<span class='highlight'>Break</span> the shyness barrier",
        "<span class='highlight'>Build</span> fluency and confidence",
        "<span class='highlight'>Empower</span> students to speak like native English users"
      ],
      bgColor: "#ff5a5f",
      image: slide1
    },
    {
      title: "WHY DO WE DO IT?",
      points: [
        "Speak Bold. Think Bold. Be Bold",
        "Communicate their thoughts boldly, naturally, and fluently",
        "Unlock new opportunities for personal and professional growth"
      ],
      bgColor: "#47a8e5",
      image: slide2
    },
    {
      title: "THE BOLDLY ENGLISH PROMISE",
      points: [
        "Speak clearly and confidently",
        "Express thoughts without fear",
        "Be interview-ready",
        "Communicate fluently in social and professional settings"
      ],
      bgColor: "#1e5fba",
      image: slide3
    }
  ];

  return (
    <div className="parallax-container">
      {slideContents.map((slide, index) => (
        <section 
          key={index} 
          ref={addToRefs}
          className="parallax-section"
          style={{ backgroundColor: slide.bgColor }}
        >
          <div className="slide-inner">
            <div className="slide-content">
              <h1 className="slide-title">{slide.title}</h1>
              <ul className="slide-points">
                {slide.points.map((point, i) => (
                  <li key={i} className="slide-point">
                    <span className="check-icon">✓</span>
                    <span dangerouslySetInnerHTML={{ __html: point }} />
                  </li>
                ))}
              </ul>
            </div>
            <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />
          </div>
          <div className="slide-number">{index + 1} / 3 Our Solution</div>
        </section>
      ))}
    </div>
  );
};

export default BoldlyEnglishParallax;
