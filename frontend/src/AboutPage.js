import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Our Company</h1>
          <p>Delivering Excellence Through Innovation and Dedication</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2014, YourBrand started with a simple mission: to revolutionize the way businesses 
                approach digital transformation. What began as a small team of passionate developers has grown 
                into a full-service agency serving over 500 clients worldwide.
              </p>
              <p>
                Our journey has been marked by constant innovation, unwavering commitment to quality, and 
                an absolute dedication to our clients' success. Every project we undertake is an opportunity 
                to push boundaries and set new industry standards.
              </p>
              <p>
                Today, we're proud to be recognized as thought leaders in our field, trusted by startups 
                and Fortune 500 companies alike.
              </p>
            </div>
            <div className="story-image">
              <div className="placeholder">
                <span>Company Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <h2>Mission & Vision</h2>
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with cutting-edge technology solutions that drive growth, 
                enhance efficiency, and create lasting value in an increasingly digital world.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">🚀</div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted technology partner for businesses seeking to innovate, 
                transform, and thrive in the digital age.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">⭐</div>
              <h3>Our Values</h3>
              <p>
                Integrity, Excellence, Innovation, Customer Focus, and Teamwork form the foundation 
                of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="section-subtitle">Talented professionals dedicated to your success</p>
          <div className="team-grid">
            {[
              { name: 'Sarah Johnson', role: 'CEO & Founder', avatar: '👩‍💼' },
              { name: 'Michael Chen', role: 'CTO', avatar: '👨‍💻' },
              { name: 'Emily Rodriguez', role: 'Lead Designer', avatar: '👩‍🎨' },
              { name: 'David Thompson', role: 'Head of Marketing', avatar: '👨‍📊' },
              { name: 'Jessica Williams', role: 'Product Manager', avatar: '👩‍💼' },
              { name: 'James Wilson', role: 'Lead Developer', avatar: '👨‍💻' }
            ].map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-avatar">{member.avatar}</div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">2014</div>
              <div className="timeline-content">
                <h3>Company Founded</h3>
                <p>Started with a vision to transform digital solutions</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2016</div>
              <div className="timeline-content">
                <h3>Reached 100 Clients</h3>
                <p>Expanded team to 25 professionals</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2018</div>
              <div className="timeline-content">
                <h3>Global Expansion</h3>
                <p>Opened offices in 3 new countries</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2020</div>
              <div className="timeline-content">
                <h3>Industry Recognition</h3>
                <p>Won 5 major industry awards</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2023</div>
              <div className="timeline-content">
                <h3>Reached 500 Clients</h3>
                <p>Celebrated $10M in revenue</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2026</div>
              <div className="timeline-content">
                <h3>Continued Growth</h3>
                <p>Leading innovation in digital transformation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2>By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Team Members</p>
            </div>
            <div className="stat-card">
              <h3>1000+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>12+</h3>
              <p>Years in Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Work With Us?</h2>
          <p>Let's create something amazing together</p>
          <button className="cta-button">Get In Touch</button>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
