import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, Trophy } from 'lucide-react';
import "./Comingsoon.css";
import friend from "../Assets/friend1.webp";
import friend2 from "../Assets/friend2.webp";
import bgImage from "../Assets/pexels-minan1398-1406866.jpg"; // Import your 3D background image
import logo from "../Assets/Logo.png"
function Comingsoon() {
  const [currentDialogue, setCurrentDialogue] = useState(0);
  const dialogues = [
    { speaker: 'friend1', text: "Hey... I want to improve my English but I'm not confident...", emotion: "nervous" },
    { speaker: 'friend2', text: "Don't worry! I know exactly what can help you!", emotion: "excited" },
    { speaker: 'friend1', text: "Really? But I'm so nervous when speaking...", emotion: "worried" },
    { speaker: 'friend2', text: "Join Boldly English! It's amazing - you'll improve in just 30 days!", emotion: "happy" },
    { speaker: 'friend1', text: "30 days? That sounds great! How does it work?", emotion: "curious" },
    { speaker: 'friend2', text: "They use a unique method combining body language and speaking. It's fun!", emotion: "explaining" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDialogue((prev) => (prev + 1) % dialogues.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-overlay"></div>
      <div className="container">
      <div className="logo-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '-3rem' , marginTop: '-7rem' }}>
    <img src={logo} alt='logo' className='logoimg'/>
  </div>
        <div className="hero-content">
           
          <h1 className="hero-title">Master Communication in 30 Days</h1>
          <p className="hero-subtitle">BREAK . BUILD . EMPOWER</p>
        </div>

        <div className="conversation">
          <div className="conversation-inner">
            {dialogues[currentDialogue].speaker === 'friend1' ? (
              <>
                <div className="character">
                  <img
                    src={friend}
                    alt="Student"
                    className="character-image"
                  />
                  <div className="character-shadow"></div>
                </div>
                <div className="message">
                  <div className="message-bubble">
                    <p className="message-text">{dialogues[currentDialogue].text}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="message">
                  <div className="message-bubble friend2">
                    <p className="message-text">{dialogues[currentDialogue].text}</p>
                  </div>
                </div>
                <div className="character">
                  <img
                    src={friend2}
                    alt="Teacher"
                    className="character-image"
                  />
                  <div className="character-shadow"></div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="features">
          <div className="feature-card">
            <MessageCircle className="feature-icon blue" />
            <h3 className="feature-title">Interactive Learning</h3>
            <p className="feature-text">Practice speaking with confidence through guided conversations</p>
          </div>
          <div className="feature-card">
            <Calendar className="feature-icon purple" />
            <h3 className="feature-title">30-Day Program</h3>
            <p className="feature-text">Structured daily lessons to ensure rapid improvement</p>
          </div>
          <div className="feature-card">
            <Trophy className="feature-icon yellow" />
            <h3 className="feature-title">Guaranteed Results</h3>
            <p className="feature-text">See remarkable progress in just one month</p>
          </div>
        </div>

        {/* <div className="cta-container">
          <button className="cta-button">Start Your Journey Today</button>
        </div> */}
      </div>
    </div>
  );
}

export default Comingsoon;