import React, { useState, useEffect, useRef } from 'react';
import './Course.css';

const Course = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  const containerRef = useRef(null);

  const levels = [
    {
      title: "Beginner",
      subtitle: "Voice Finder",
      description: "The perfect foundation for newcomers. Master the basics and build confidence with step-by-step guidance designed for first-time learners.",
      features: ["Fundamentals", "Basic concepts", "Essential skills", "Guided practice"]
    },
    {
      title: "Intermediate",
      subtitle: "Take your skills to the next level!",
      description: "Build on your foundation with more advanced topics and real-world applications to expand your knowledge and capabilities.",
      features: ["Advanced techniques", "Problem-solving", "Project work", "Practical applications"]
    },
    {
      title: "Advanced Learner",
      subtitle: "Become a true expert!",
      description: "Master complex concepts and cutting-edge techniques to solve challenging problems and distinguish yourself as an expert.",
      features: ["Expert methodologies", "Complex problem solving", "Industry-level projects", "Specialized knowledge"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const scrollPosition = container.scrollTop;
      const containerHeight = container.clientHeight;
      
      // Determine active section based on scroll position
      const newActiveSection = Math.floor(scrollPosition / containerHeight);
      if (newActiveSection !== activeSection && newActiveSection >= 0 && newActiveSection < 3) {
        setActiveSection(newActiveSection);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeSection]);

  const scrollToSection = (index) => {
    if (containerRef.current && sectionRefs[index]?.current) {
      containerRef.current.scrollTo({
        top: sectionRefs[index].current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="course-app" ref={containerRef}>
     

      {levels.map((level, index) => (
        <section 
          key={index} 
          ref={sectionRefs[index]}
          className={`course-section ${activeSection === index ? 'active' : ''}`}
        >
          <div className="content-container">
            <div className="content-left">
              <h1>
                <span className="title-prefix">Program For</span>
                <span className="title-level">{level.title}</span>
              </h1>
              <h2>{level.subtitle}</h2>
              <p className="description">{level.description}</p>
              <ul className="features">
                {level.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="discover-btn">DISCOVER MORE</button>
            </div>
            
            <div className="content-right">
              <div className={`device-container level-${index}`}>
                <div className="device-frame">
                  <div className="device-screen">
                    <div className="screen-header">
                      <div className="back-button">← Course Content</div>
                      <div className="menu-icon">☰</div>
                    </div>
                    
                    <div className="screen-content">
                      <div className="course-module">
                        <div className="module-icon" style={{backgroundColor: index === 0 ? '#4A90E2' : index === 1 ? '#F5A623' : '#7ED321'}}>
                          {index === 0 ? '1' : index === 1 ? '2' : '3'}
                        </div>
                        <div className="module-info">
                          <h4>Module {index + 1}</h4>
                          <p>{level.title} Level Content</p>
                        </div>
                      </div>
                      
                      {level.features.map((feature, i) => (
                        <div className="course-lesson" key={i}>
                          <div className="lesson-check">✓</div>
                          <div className="lesson-name">{feature}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="screen-footer">
                      <div className="footer-icon">📚</div>
                      <div className="footer-icon">📊</div>
                      <div className="footer-icon">📝</div>
                    </div>
                  </div>
                </div>
                
                <div className="floating-elements">
                  <div className="floating-element elem1"></div>
                  <div className="floating-element elem2"></div>
                  <div className="floating-element elem3"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      
    </div>
  );
};

export default Course;