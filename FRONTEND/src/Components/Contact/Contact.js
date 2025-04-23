import React, { useState } from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Linkedin, HelpCircle, ChevronDown, ChevronUp, Calendar, Users, MessageSquare } from 'lucide-react';
import "./Contact.css";
import whatsapp from "../Assets/whatsapp.png";
import tuty from "../Assets/tuticorin.JPG";
import chennai from "../Assets/chennai.jpeg";
import coimbatore from "../Assets/cbe.jpeg";

const ContactPage = () => {
  // State for FAQ toggles
  const [openFaq, setOpenFaq] = useState(null);
  const [activeLocation, setActiveLocation] = useState(0);

  // FAQ toggle handler
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // FAQ content
  const faqItems = [
    {
      question: "How does the Free Trial work?",
      answer: "Experience a complimentary session to understand our teaching methodology. Register through our QR code to book your free trial class at any of our locations."
    },
    {
      question: "What levels do you offer?",
      answer: "We offer three levels: Beginner, Intermediate, and Advanced. Each level is designed to build your English communication skills progressively."
    },
    {
      question: "How do you track progress?",
      answer: "We conduct Before and After Evaluations to measure improvement in your communication skills, providing tangible evidence of your progress."
    },
    {
      question: "Who are your instructors?",
      answer: "Our courses are delivered by expert trainers with extensive experience in IELTS and TOEFL coaching, ensuring high-quality guidance."
    },
    {
      question: "What makes Boldly English different?",
      answer: "Our Practical Learning Approach provides specially curated toolkits with foundational building blocks for effective English communication, complemented by interactive sessions, real-life role plays, and feedback-based learning."
    }
  ];

  // Location data with map coordinates and images
  const locations = [
    // {
    //   city: "Coimbatore",
    //   address: "123 Main Street, Coimbatore, Tamil Nadu",
    //   phone: "+91 9360458870",
    //   email: "coimbatore@boldlyenglish.com",
    //   img: coimbatore,
    //   mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.59538965328!2d76.92946342350304!3d11.016844325069939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1650458825000!5m2!1sen!2sin"
    // },
    {
      city: "Chennai",
      address: "2nd Floor, Maruthi Complex, 152, 100 Feet Rd, Kamala Nagar, Vinayakapuram, Arumbakkam, Chennai, Tamil Nadu 600106",
      phone: "+91 9360458870",
      email: "talktous@boldlyenglish.com",
      img: chennai,
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7772.927862705258!2d80.20290899485836!3d13.069757599957374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52672844fe8555%3A0x935f94ca82ef4934!2sNimalaan%20Energies%20LLP!5e0!3m2!1sen!2sin!4v1745149915335!5m2!1sen!2sin"
    },
    {
      city: "Tuticorin",
      address: "21 Mani Nagar 3rd Street, Thoothukudi, Tamil Nadu",
      phone: "+91 9360458870",
      email: "talktous@boldlyenglish.com",
      img: tuty,
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d828.8774315897708!2d78.13540535467348!3d8.802247344326448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ef9561f123cf%3A0xe9efeec8024d6bbf!2s21%2C%20Mani%20Nagar%2C%20Toovipuram%2C%20Thoothukudi%2C%20Tamil%20Nadu%20628003!5e0!3m2!1sen!2sin!4v1745149697446!5m2!1sen!2sin"
    }
  ];
  // Toggle between map and image view
  const [showMap, setShowMap] = useState(true);

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Boldly English</h1>
        <p>Connect with us to start your journey towards confident English communication</p>
      </header>

      <section className="locations-section">
        <h2>Our Locations</h2>
        
        {/* Location tabs */}
        <div className="location-tabs">
          {locations.map((location, index) => (
            <button 
              key={index}
              className={`location-tab ${activeLocation === index ? 'active' : ''}`}
              onClick={() => setActiveLocation(index)}
            >
              {location.city}
            </button>
          ))}
        </div>
        
        {/* Active location details */}
        <div className="location-details">
          <div className="location-info">
            <p><MapPin size={18} /> {locations[activeLocation].address}</p>
            <p><Phone size={18} /> {locations[activeLocation].phone}</p>
            <p><Mail size={18} /> {locations[activeLocation].email}</p>
            <div className="view-toggle">
              <button 
                className={`view-toggle-btn ${showMap ? 'active' : ''}`}
                onClick={() => setShowMap(true)}
              >
                Show Map
              </button>
              <button 
                className={`view-toggle-btn ${!showMap ? 'active' : ''}`}
                onClick={() => setShowMap(false)}
              >
                Show Image
              </button>
            </div>
          </div>
          <div className="location-map">
            {showMap ? (
              <iframe 
                src={locations[activeLocation].mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '8px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${locations[activeLocation].city} Location`}
              ></iframe>
            ) : (
              <div className="location-image">
                <img 
                  src={locations[activeLocation].img} 
                  alt={`${locations[activeLocation].city} Location`} 
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="qr-sectionss">
        <div className="qr-containerss">
          <div className="qr-infoss">
            <h2>Join Our Class</h2>
            <p>Scan the QR code to register for a free trial class and start your English learning journey!</p>
            <div className="benefitsss">
              <div className="benefit-itemss">
                <span>✓</span> BREAK shyness in expressing thoughts in English
              </div>
              <div className="benefit-itemss">
                <span>✓</span> BUILD confidence during interviews and professional interactions
              </div>
              <div className="benefit-itemss">
                <span>✓</span> EMPOWER your thoughts into effective communication
              </div>
            </div>
          </div>
          <div className="qr-codess">
            <img src={whatsapp} alt="QR Code for class registration" />
            <p>Scan to Register</p>
          </div>
        </div>
      </section>

      <section className="upcoming-events-section">
        <h2>Upcoming Events</h2>
        <div className="events-container">
          <div className="event-card">
            <div className="event-icon">
              <Calendar size={24} />
            </div>
            <div className="event-details">
              <h3>Free Workshop: Public Speaking</h3>
              <p className="event-date">May 15, 2025 | 6:00 PM</p>
              <p className="event-location">Coimbatore Center</p>
              <button className="register-btn">Register Now</button>
            </div>
          </div>
          
          <div className="event-card">
            <div className="event-icon">
              <Users size={24} />
            </div>
            <div className="event-details">
              <h3>Business English Masterclass</h3>
              <p className="event-date">May 22, 2025 | 10:00 AM</p>
              <p className="event-location">Chennai Center</p>
              <button className="register-btn">Register Now</button>
            </div>
          </div>
          
          <div className="event-card">
            <div className="event-icon">
              <MessageSquare size={24} />
            </div>
            <div className="event-details">
              <h3>IELTS Preparation Session</h3>
              <p className="event-date">June 5, 2025 | 3:00 PM</p>
              <p className="event-location">Tuticorin Center</p>
              <button className="register-btn">Register Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div className="faq-item" key={index}>
              <div 
                className={`faq-question ${openFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <span><HelpCircle size={18} /></span>
                <h3>{item.question}</h3>
                {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default ContactPage;