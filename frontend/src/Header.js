import './Header.css';
import { useState } from 'react';

function Header({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  return(
  <>
    <header className="header">
      <div className="header-container">
        <div className="logo-section" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
          <img src="/logo.svg" alt="Brand Logo" className="logo-image" />
          <div className="logo-text">
            <h1>YourBrand</h1>
            <p className="tagline">Innovative Solutions</p>
          </div>
        </div>
        <nav className="nav">
          <ul>
            <li><a onClick={() => handleNavClick('home')} className="nav-link">Home</a></li>
            <li><a onClick={() => handleNavClick('services')} className="nav-link">Services</a></li>
            <li><a onClick={() => handleNavClick('about')} className="nav-link">About</a></li>
            <li><a onClick={() => handleNavClick('contact')} className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </>
  )
}

export default Header;
