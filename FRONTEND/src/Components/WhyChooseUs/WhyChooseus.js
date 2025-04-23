import { useState, useEffect, useRef } from 'react';
import './WhyChooseus.css';
import { XIcon, BookOpen, Video, Award, Mic, HeartHandshake, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <BookOpen className="icon" size={40} />,
      title: "Free Trial Classes",
      description: "Start your journey with our no-obligation free trial classes and experience our unique teaching methodology."
    },
    {
      icon: <Award className="icon" size={40} />,
      title: "30-Day Professional Transformation",
      description: "Our accelerated program guarantees remarkable improvement in just 30 days through intensive practice and personalized feedback."
    },
    {
      icon: <Users className="icon" size={40} />,
      title: "Role Play Scenarios",
      description: "Practice real-life conversations through immersive role play exercises that prepare you for actual English-speaking situations."
    },
    {
      icon: <XIcon className="icon" size={40} />,
      title: "Results-Oriented Training",
      description: "Our curriculum focuses on measurable outcomes with regular assessments to track your progress and celebrate achievements."
    },
    {
      icon: <Video className="icon" size={40} />,
      title: "Live Stream Sessions",
      description: "Join interactive live streams with native speakers and fellow learners to practice in a supportive group environment."
    },
    {
      icon: <Mic className="icon" size={40} />,
      title: "Break The Shyness",
      description: "Our specialized techniques help overcome communication anxiety and build confidence in speaking English publicly."
    },
    {
      icon: <Mic className="icon" size={40} />,
      title: "Build Fluency and Confidence",
      description: "Progressive speaking exercises develop natural fluency and the confidence to express yourself clearly in any situation."
    },
    {
      icon: <HeartHandshake className="icon" size={40} />,
      title: "Speak Like Native English Users",
      description: "Master authentic pronunciations, idioms, and cultural nuances to communicate like a native English speaker."
    }
  ];

  return (
    <div className="why-container" ref={containerRef}>
      {/* Hero Section */}
      <div className="hero-section">
        <div
          className="hero-card"
          style={{
            transform: `perspective(1000px) rotateX(${scrollY * 0.02}deg) rotateY(${scrollY * 0.01}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <h1 className="hero-title">Why Choose Bloody English?</h1>
          <p className="hero-subtitle">Transform your English speaking abilities with our innovative approach</p>
        </div>

        <div className="scroll-indicator">
          <p>Scroll to discover our unique approach</p>
          <svg className="scroll-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-wrapper">
        <h2 className="section-title">Our Transformative Approach</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => sectionRefs.current[index] = el}
              className="feature-card"
              style={{
                opacity: 1 - Math.max(0, Math.min(1, (scrollY - index * 100) / 800)),
                transform: `translateY(${Math.max(0, Math.min(50, (scrollY - index * 100) / 10))}px)`
              }}
            >
              <div className="icon-container">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonial-section">
        <div className="testimonial-container"
          style={{
            transform: `perspective(1000px) rotateY(${scrollY * 0.01}deg)`,
            transition: 'transform 0.2s ease-out'
          }}>
          <div className="testimonial-bar" />
          <div className="testimonial-content">
            <div className="testimonial-card">
              <div className="testimonial-avatar">JM</div>
              <div>
                <p className="testimonial-text">"After just three weeks with Bloody English, I gave a presentation in English at work. The techniques to break my shyness were life-changing!"</p>
                <p className="testimonial-author">Jane Mitchell, Marketing Professional</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-wrapper">
        <div className="cta-box"
          style={{
            transform: `translateY(${Math.max(0, 100 - scrollY / 10)}px)`,
            opacity: Math.min(1, Math.max(0, (scrollY - 1000) / 500))
          }}>
          <h2 className="cta-title">Ready to Transform Your English?</h2>
          <p className="cta-subtitle">Join thousands of students who've broken through language barriers with our unique methodology.</p>
          <button className="cta-button">Start Your Free Trial Today</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Bloody English. All rights reserved.</p>
        <p>Transform your English speaking journey with us!</p>
      </footer>
    </div>
  );
}
