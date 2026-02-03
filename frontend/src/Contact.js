import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">Ready to start your project? Contact us today!</p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>📧 Email</h3>
              <p>hello@yourbrand.com</p>
            </div>
            <div className="info-card">
              <h3>📱 Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="info-card">
              <h3>📍 Location</h3>
              <p>123 Business Street, City, State 12345</p>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
