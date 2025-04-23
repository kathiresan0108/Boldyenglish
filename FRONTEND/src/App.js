import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer.js';
import About from './Components/About/About.js';
// import Contact from './Components/Contact/Contact.js';
import HomePage from './Components/Pages/Home';
import Beginners from './Components/Allcourse/Beginers/Beginers.js';
import Intermediate from './Components/Allcourse/INTERMEDIATE/INTERMEDIATE.js';
import Advanced from './Components/Allcourse/Advance/Advance.js';
import Contact from './Components/Contact/Contact.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/beginners" element={<Beginners />} />
          <Route path="/intermediate" element={<Intermediate />} />
          <Route path="/advanced" element={<Advanced />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes here if needed */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
