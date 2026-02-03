import './Footer.css';

function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About</h3>
          <p>Your Brand is dedicated to providing exceptional service and innovative solutions.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>Home</a></li>
            <li><a onClick={() => handleNavClick('services')} style={{ cursor: 'pointer' }}>Services</a></li>
            <li><a onClick={() => handleNavClick('about')} style={{ cursor: 'pointer' }}>About</a></li>
            <li><a onClick={() => handleNavClick('contact')} style={{ cursor: 'pointer' }}>Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Your Brand. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
