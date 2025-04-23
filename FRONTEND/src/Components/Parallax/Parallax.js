import React from 'react';
import './Parallax.css'; // Make sure to create this CSS file or use Tailwind
// Add this in your script file or inside useEffect (if using React)
const sections = document.querySelectorAll('.parallax-section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach(section => observer.observe(section));

const Parallax = () => {
  return (
    <div className='parallax-body'>
      {[1, 2, 3].map((_, index) => (
        <section className='parallax-section' key={index}>
          <div className={`parallax-container image-${index + 1}`}></div>
        </section>
      ))}
    </div>

  );
};

export default Parallax;
