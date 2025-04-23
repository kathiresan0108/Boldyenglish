import { useState, useEffect, useRef } from 'react';
import '../Beginers/Beginers.css'; // Make sure to create this CSS file
import girl1 from "../../Assets/testimonialgirl1.jpg"
import girl2 from "../../Assets/testimonialgirl2.jpg"
import boy from "../../Assets/testimonialboy1.jpeg"


export default function Advanced() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    features: false,
    promise: false,
    testimonials: false,
    trial: false,
    contact: false
  });

  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    features: useRef(null),
    promise: useRef(null),
    testimonials: useRef(null),
    trial: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const testimonials = [
    {
      name: "Harini",
      location: "Thoothukudi",
      text: "Boldly English advanced program transformed my professional communication skills. Now I confidently lead meetings and presentations in English!",
      img: girl2
    },
    {
      name: "Sumathi",
      location: "Pondicherry",
      text: "The advanced course was exactly what I needed to take my English to the next level. The instructor understood my specific needs and tailored the program accordingly. Now I can express complex ideas with clarity and confidence. The accent neutralization exercises were particularly helpful for my career advancement.",
      img: girl1
    },
    {
      name: "Jeffin",
      location: "Chennai",
      text: "The advanced impact speaker program helped me master the nuances of professional English communication. The focus on critical thinking and debate preparation has been invaluable for my academic pursuits. My presentation skills have improved dramatically, and I'm now comfortable using idiomatic expressions naturally.",
      img: boy
    }
  ];

  return (
    <div className="w-full overflow-x-hidden font-sans">
      {/* Hero Section */}
      <section 
        id="hero" 
        ref={sectionRefs.hero}
      >
        <div className={`hero-content ${isVisible.hero ? 'visible' : 'hidden'}`}>
          <h1 className="hero-title">IMPACT SPEAKER</h1>
          <h2 className="hero-subtitle">Advanced Level</h2>
          <p className="hero-description">
            In <span className="hero-emphasis">30 days</span>, you will be able to engage in complex discussions, 
            express abstract ideas clearly, use idiomatic language naturally, and speak fluently in academic, business, and social contexts.
          </p>
          <button className="btn-primary">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={sectionRefs.about}
      >
        <div className="section-container">
          <div className={`about-header ${isVisible.about ? 'visible' : 'hidden'}`}>
            <h2 className="section-title">WHY DO WE DO IT?</h2>
            <h3 className="section-subtitle">
              Speak Bold. Think Bold. <span className="red-text">Be Bold.</span>
            </h3>
            <p className="section-description">
              Empowering professionals and students to communicate complex ideas with confidence and authority. 
              Master advanced English skills to excel in leadership roles, academic presentations, and international business settings.
              Unlocking <strong>GREATER Opportunities.</strong>
            </p>
          </div>

          <div className={`about-grid ${isVisible.about ? 'visible' : 'hidden'}`}>
            <div className="about-card">
              <h3 className="card-title">Break</h3>
              <p>Break through communication barriers in professional and academic settings</p>
            </div>
            <div className="about-card">
              <h3 className="card-title">Build</h3>
              <p>Build advanced language skills for leadership positions and complex discussions</p>
            </div>
            <div className="about-card">
              <h3 className="card-title">Empower</h3>
              <p>Empower yourself with sophisticated language tools for global communication</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        ref={sectionRefs.features}
      >
        <div className="section-container">
          <h2 className={`features-title ${isVisible.features ? 'visible' : 'hidden'}`}>
            PROGRAM FEATURES
          </h2>

          <div className="features-grid">
            <div className={`features-column ${isVisible.features ? 'visible-left' : 'hidden-left'}`}>
              <ol className="features-list">
                <li className="features-list-item">
                  <span className="feature-number">1</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Advanced sentence structures and complex grammar</h3>
                    <p className="feature-description">Master sophisticated language patterns for nuanced expression</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">2</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Speaking like a native - accent neutralization</h3>
                    <p className="feature-description">Refine pronunciation and intonation for natural delivery</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">3</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Critical thinking and debate preparation</h3>
                    <p className="feature-description">Develop persuasive arguments and counterarguments</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">4</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Professional presentation skills</h3>
                    <p className="feature-description">Deliver impactful presentations with confidence and authority</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">5</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Idiomatic expressions and advanced vocabulary</h3>
                    <p className="feature-description">Command sophisticated language for various contexts</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className={`features-column ${isVisible.features ? 'visible-right' : 'hidden-right'}`}>
              <ol className="features-list" start="6">
                <li className="features-list-item">
                  <span className="feature-number">6</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Fluency test and performance review</h3>
                    <p className="feature-description">Regular assessment to track your remarkable progress</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">7</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Business English and negotiation techniques</h3>
                    <p className="feature-description">Perfect your language for professional success</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">8</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Advanced communication workbooks and materials</h3>
                    <p className="feature-description">Comprehensive resources for continued growth</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">9</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Impact Speaker certification</h3>
                    <p className="feature-description">Recognition of your advanced English communication mastery</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section 
        id="promise" 
        ref={sectionRefs.promise}
      >
        <div className="section-container">
          <div className={`promise-header ${isVisible.promise ? 'visible' : 'hidden'}`}>
            <h2 className="promise-title">THE BOLDLY ENGLISH PROMISE</h2>
            <p className="promise-subtitle">Transforming Advanced Speakers into Impact Communicators</p>
          </div>
          
          <div className={`promise-content ${isVisible.promise ? 'visible' : 'hidden'}`}>
            <div className="promise-card">
              <div className="promise-icon">✓</div>
              <h3 className="promise-card-title">Transformative Results</h3>
              <p>Noticeable improvement in complex communication skills within 30 days</p>
            </div>
            
            <div className="promise-card">
              <div className="promise-icon">✓</div>
              <h3 className="promise-card-title">Expert-Level Instruction</h3>
              <p>Guidance from professionals with expertise in advanced communication</p>
            </div>
            
            <div className="promise-card">
              <div className="promise-icon">✓</div>
              <h3 className="promise-card-title">Real-World Application</h3>
              <p>Skills directly applicable to academic, business, and leadership contexts</p>
            </div>
            
            <div className="promise-card">
              <div className="promise-icon">✓</div>
              <h3 className="promise-card-title">Ongoing Development</h3>
              <p>Resources and community for continuous growth beyond the program</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section 
        id="testimonials" 
        ref={sectionRefs.testimonials}
      >
        <div className="section-container">
          <h2 className={`section-title ${isVisible.testimonials ? 'visible' : 'hidden'}`}>
            SUCCESS STORIES
          </h2>
          
          <div className={`testimonials-grid ${isVisible.testimonials ? 'visible' : 'hidden'}`}>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-header">
                  <img 
                    src={testimonial.img} 
                    alt={`${testimonial.name} from ${testimonial.location}`} 
                    className="testimonial-image"
                  />
                  <div className="testimonial-info">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-location">{testimonial.location}</p>
                  </div>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Free Trial Section */}
      <section 
        id="trial" 
        ref={sectionRefs.trial}
      >
        <div className={`section-container ${isVisible.trial ? 'visible' : 'hidden'}`}>
          <div className="trial-content">
            <h2 className="trial-title">START YOUR JOURNEY TODAY</h2>
            <p className="trial-description">
              Try our 3-day free trial and experience the Advanced Impact Speaker program. 
              See how our expert instructors can elevate your communication to the highest level.
            </p>
            <div className="trial-features">
              <div className="trial-feature">
                <span className="feature-check">✓</span>
                <p>Access to 3 advanced communication sessions</p>
              </div>
              <div className="trial-feature">
                <span className="feature-check">✓</span>
                <p>Advanced language assessment and feedback</p>
              </div>
              <div className="trial-feature">
                <span className="feature-check">✓</span>
                <p>One-on-one consultation with expert instructor</p>
              </div>
            </div>
            <button className="btn-primary btn-large">
              Start Your Free Trial Class
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}