import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from "../Assets/Logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  const handleDropdownToggle = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setDropdownOpen(false);
    document.body.style.overflow = 'auto';
  };

  const isActive = (path) => location.pathname === path;
  const isInCoursesSection = ['/beginners', '/intermediate', '/advanced'].some(
    path => location.pathname.includes(path)
  );

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/" onClick={closeAllMenus}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <button 
          className="mobile-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`navigation ${isMobileMenuOpen ? 'show-mobile-menu' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeAllMenus}
              >
                Home
              </Link>
            </li>
            
            <li className="nav-item has-dropdown">
              <div 
                className={`nav-link dropdown-trigger ${isInCoursesSection ? 'active' : ''}`}
                onClick={handleDropdownToggle}
              >
                Courses
                <span className="dropdown-icon">
                  {dropdownOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </span>
              </div>
              
              <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                <li>
                  <Link 
                    to="/beginners" 
                    className={`dropdown-link ${isActive('/beginners') ? 'active' : ''}`}
                    onClick={closeAllMenus}
                  >
                    Beginners
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/intermediate" 
                    className={`dropdown-link ${isActive('/intermediate') ? 'active' : ''}`}
                    onClick={closeAllMenus}
                  >
                    Intermediate
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/advanced" 
                    className={`dropdown-link ${isActive('/advanced') ? 'active' : ''}`}
                    onClick={closeAllMenus}
                  >
                    Advanced
                  </Link>
                </li>
              </ul>
            </li>
            
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeAllMenus}
              >
                About Us
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeAllMenus}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          
          <div className="contact-button">
            <a 
              href="https://wa.me/919360458870?text=Hello%20Mam" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeAllMenus}
            >
              <svg className="whatsapp-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Connect With Us</span>
            </a>
          </div>
        </nav>
      </div>
      
      {isMobileMenuOpen && <div className="menu-backdrop" onClick={toggleMobileMenu}></div>}
    </header>
  );
};

export default Navbar;