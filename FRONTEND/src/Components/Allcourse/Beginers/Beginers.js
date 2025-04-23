import { useState, useEffect, useRef } from 'react';
import './Beginers.css'; // Import the CSS file
import girl1 from "../../Assets/testimonialgirl1.jpg"
import girl2 from "../../Assets/testimonialgirl2.jpg"
import boy from "../../Assets/testimonialboy1.jpeg"
export default function Beginners() {
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
      text: "Boldly English transformed my confidence in just 30 days. Now I can express myself clearly in meetings!",
      img: girl2
    },
    {
      name: "Sumathi",
      location: "Pondicherry",
      text: `Initially, I was hesitant to join offline classes, thinking they might not deliver good results. However, to my surprise, she is truly dedicated to her work. Now, I feel more confident in approaching people with ease.
  
  Once you join this class, there's no need to worry about timings or anything else. She is highly flexible and understands exactly what you need. She will guide you in the right way, ensuring a smooth learning experience.
  
  Moreover, she is not money-minded — her focus is truly on helping students. Joining this academy is absolutely worth it. I highly recommend this academy.`,
      img: girl1
    },
    {
      name: "Jeffin",
      location: "Chennai",
      text: `The course was well-structured, with each day building on the previous one. The lessons were clear, engaging, and practical, focusing on grammar, vocabulary, speaking, and listening.

One of the things I appreciated most was the consistent practice and encouragement to use English daily. The interactive activities, quizzes, and real-life conversations really helped improve my confidence.

The instructor was knowledgeable, patient, and supportive throughout the program.`,
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
          <h1 className="hero-title">VOICE FINDER</h1>
          <h2 className="hero-subtitle">Beginner Level</h2>
          <p className="hero-description">
            In <span className="hero-emphasis">30 days</span>, learners will be able to introduce themselves, 
            ask and answer basic questions, hold simple conversations, and use day-to-day English confidently.
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
              Empowering college students to communicate their thoughts boldly, naturally, 
              and fluently – just like a native speaker, helps them succeed in interviews, 
              workplaces, and everyday life. Unlocking <strong>NEW Opportunities.</strong>
            </p>
          </div>

          <div className={`about-grid ${isVisible.about ? 'visible' : 'hidden'}`}>
            <div className="about-card">
              <h3 className="card-title">Break</h3>
              <p>Break the barriers of language hesitation and fear</p>
            </div>
            <div className="about-card">
              <h3 className="card-title">Build</h3>
              <p>Build confidence through consistent practice and feedback</p>
            </div>
            <div className="about-card">
              <h3 className="card-title">Empower</h3>
              <p>Empower yourself with the skills to communicate effectively</p>
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
                    <h3 className="feature-title">Introduction to English and basic communication</h3>
                    <p className="feature-description">Master foundational English skills with expert guidance</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">2</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Live sessions with experienced trainers - 1 hour</h3>
                    <p className="feature-description">Interactive sessions focused on real communication skills</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">3</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Day to day role play scenario</h3>
                    <p className="feature-description">Practice English in realistic everyday situations</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">4</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Speaking with basic structure using grammar</h3>
                    <p className="feature-description">Learn practical grammar that enhances your speaking ability</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">5</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Building fluency and vocabulary</h3>
                    <p className="feature-description">Expand your English vocabulary in practical contexts</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className={`features-column ${isVisible.features ? 'visible-right' : 'hidden-right'}`}>
              <ol className="features-list" start="6">
                <li className="features-list-item">
                  <span className="feature-number">6</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Daily practice sessions</h3>
                    <p className="feature-description">Consistent practice to build language habits</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">7</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Weekly feedback report</h3>
                    <p className="feature-description">Personalized guidance to help you improve steadily</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">8</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Spoken English workbook and printables</h3>
                    <p className="feature-description">Comprehensive materials to support your learning journey</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">9</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Final certification of completion</h3>
                    <p className="feature-description">Recognition of your achievement and new skills</p>
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
            <p className="promise-subtitle">Changing Lives One Word at a Time</p>
          </div>
          
          <div className={`promise-content ${isVisible.promise ? 'visible' : 'hidden'}`}>
            <div className="promise-card">
              <div className="promise-icon">✓</div>
              <h3 className="promise-card-title">Guaranteed Progress</h3>
              <p>Measurable improvement in your English speaking skills within 30 days</p>
            </div>
            
            <div className="promise-card">
              <div className="promise-icon">✓</div>
              <h3 className="promise-card-title">Personalized Attention</h3>
              <p>Small group sessions ensuring individualized feedback and guidance</p>
            </div>
            
            <div className="promise-card">
              <div className="promise-icon">✓</div>
              <h3 className="promise-card-title">Practical Learning</h3>
              <p>Focus on real-world communication skills you can use immediately</p>
            </div>
            
            <div className="promise-card">
              <div className="promise-icon">✓</div>
              <h3 className="promise-card-title">Ongoing Support</h3>
              <p>Access to resources and community even after program completion</p>
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
              Try our 3-day free trial and experience the Boldly English difference. 
              No commitments, just a taste of what confident English speaking feels like.
            </p>
            <div className="trial-features">
              <div className="trial-feature">
                <span className="feature-check">✓</span>
                <p>Access to 3 live group sessions</p>
              </div>
              <div className="trial-feature">
                <span className="feature-check">✓</span>
                <p>Practice materials and exercises</p>
              </div>
              <div className="trial-feature">
                <span className="feature-check">✓</span>
                <p>Personal feedback session</p>
              </div>
            </div>
            <button className="btn-primary btn-large">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>
      
     
      
     
      
    </div>
  );
}