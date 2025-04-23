import { useState, useEffect, useRef } from 'react';
import '../Beginers/Beginers.css'; // Import the CSS file
import girl1 from "../../Assets/testimonialgirl1.jpg"
import girl2 from "../../Assets/testimonialgirl2.jpg"
import boy from "../../Assets/testimonialboy1.jpeg"

export default function Intermediate() {
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
          <h1 className="hero-title">CONFIDENCE BUILDER</h1>
          <h2 className="hero-subtitle">Intermediate Level</h2>
          <p className="hero-description">
            In <span className="hero-emphasis">30 days</span>, you will be able to express opinions, 
            handle real-life conversations, describe events and situations, 
            and use tenses and vocabulary more fluently.
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
            <h2 className="section-title">WHY CHOOSE INTERMEDIATE LEVEL?</h2>
            <h3 className="section-subtitle">
              Elevate Your Communication. <span className="red-text">Amplify Your Impact.</span>
            </h3>
            <p className="section-description">
              Building on foundational skills, our Intermediate program helps professionals and students 
              tackle complex conversations, participate in discussions, and express ideas clearly.
              Perfect for those looking to <strong>ADVANCE their career opportunities.</strong>
            </p>
          </div>

          <div className={`about-grid ${isVisible.about ? 'visible' : 'hidden'}`}>
            <div className="about-card">
              <h3 className="card-title">Express</h3>
              <p>Articulate opinions and ideas with clarity and confidence</p>
            </div>
            <div className="about-card">
              <h3 className="card-title">Engage</h3>
              <p>Participate actively in group discussions and workplace conversations</p>
            </div>
            <div className="about-card">
              <h3 className="card-title">Excel</h3>
              <p>Master professional communication techniques for career growth</p>
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
                    <h3 className="feature-title">Kick Starting Fluency and Refreshing Grammar</h3>
                    <p className="feature-description">Strengthen your grammar foundation and build natural fluency</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">2</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Expressing Opinions, Making Suggestions</h3>
                    <p className="feature-description">Learn structures for confidently sharing ideas and recommendations</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">3</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Group discussion on daily life topics</h3>
                    <p className="feature-description">Practice real conversation scenarios in supportive group settings</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">4</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Speaking in the workplace with impact</h3>
                    <p className="feature-description">Master professional communication techniques for career growth</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className={`features-column ${isVisible.features ? 'visible-right' : 'hidden-right'}`}>
              <ol className="features-list" start="5">
                <li className="features-list-item">
                  <span className="feature-number">5</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Peer feedback sessions</h3>
                    <p className="feature-description">Constructive critique and insights from peers to accelerate growth</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">6</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Audio video submission tasks</h3>
                    <p className="feature-description">Build confidence through recorded practice and detailed feedback</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">7</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Mock interview or presentation</h3>
                    <p className="feature-description">Prepare for real-world speaking challenges with expert coaching</p>
                  </div>
                </li>
                <li className="features-list-item">
                  <span className="feature-number">8</span>
                  <div className="feature-content">
                    <h3 className="feature-title">Advanced vocabulary building</h3>
                    <p className="feature-description">Expand your vocabulary for more precise and nuanced expression</p>
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
            <p className="promise-subtitle">Taking Your English From Adequate to Exceptional</p>
          </div>
          
          <div className={`promise-content ${isVisible.promise ? 'visible' : 'hidden'}`}>
            <div className="promise-card">
              <div className="promise-icon">✓</div>
              <h3 className="promise-card-title">Significant Improvement</h3>
              <p>Noticeable advancement in fluency and confidence within 30 days</p>
            </div>
            
            <div className="promise-card">
              <div className="promise-icon">✓</div>
              <h3 className="promise-card-title">Professional Focus</h3>
              <p>Targeted practice for workplace conversations and professional scenarios</p>
            </div>
            
            <div className="promise-card">
              <div className="promise-icon">✓</div>
              <h3 className="promise-card-title">Practical Application</h3>
              <p>Skills that directly transfer to real-world communication challenges</p>
            </div>
            
            <div className="promise-card">
              <div className="promise-icon">✓</div>
              <h3 className="promise-card-title">Advanced Support</h3>
              <p>Personalized coaching and detailed feedback throughout your journey</p>
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
            <h2 className="trial-title">TAKE YOUR ENGLISH TO THE NEXT LEVEL</h2>
            <p className="trial-description">
              Experience our 3-day free trial and see how our Intermediate program can transform your communication skills.
              Discover the difference confident, fluent English can make in your professional life.
            </p>
            <div className="trial-features">
              <div className="trial-feature">
                <span className="feature-check">✓</span>
                <p>Participate in professional discussion groups</p>
              </div>
              <div className="trial-feature">
                <span className="feature-check">✓</span>
                <p>Access to intermediate practice materials</p>
              </div>
              <div className="trial-feature">
                <span className="feature-check">✓</span>
                <p>Personalized skill assessment and recommendations</p>
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