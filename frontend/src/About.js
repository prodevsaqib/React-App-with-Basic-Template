import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              We are a team of passionate professionals dedicated to delivering 
              exceptional solutions for businesses of all sizes. With over 10 years 
              of experience in the industry, we understand what it takes to succeed.
            </p>
            <p>
              Our mission is to help you achieve your business goals through innovative 
              technology and exceptional service. We believe in building long-term 
              partnerships with our clients.
            </p>
            <ul className="about-list">
              <li>✓ Industry-leading expertise</li>
              <li>✓ Proven track record</li>
              <li>✓ Customer-focused approach</li>
              <li>✓ Continuous innovation</li>
            </ul>
          </div>
          <div className="about-image">
            <div className="placeholder-image">
              <p>Your Image Here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
