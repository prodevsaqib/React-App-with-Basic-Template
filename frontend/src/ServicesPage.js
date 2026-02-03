import './ServicesPage.css';

function ServicesPage() {
  const services = [
    {
      id: 1,
      icon: '🚀',
      title: 'Web Development',
      description: 'Custom web applications built with the latest technologies',
      features: ['Responsive Design', 'SEO Optimization', 'Fast Loading', 'Secure']
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      features: ['iOS Development', 'Android Development', 'React Native', 'User Friendly']
    },
    {
      id: 3,
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interface designs',
      features: ['Wireframing', 'Prototyping', 'User Research', 'A/B Testing']
    },
    {
      id: 4,
      icon: '⚙️',
      title: 'Backend Development',
      description: 'Robust server-side solutions and APIs',
      features: ['Database Design', 'API Development', 'Cloud Solutions', 'Scalability']
    },
    {
      id: 5,
      icon: '📊',
      title: 'Analytics & Data',
      description: 'Insights and analytics for data-driven decisions',
      features: ['Data Analytics', 'BI Tools', 'Reporting', 'Dashboards']
    },
    {
      id: 6,
      icon: '🔒',
      title: 'Security Solutions',
      description: 'Enterprise-grade security implementations',
      features: ['Penetration Testing', 'Security Audits', 'Encryption', 'Compliance']
    }
  ];

  const processSteps = [
    { step: 1, title: 'Discovery', description: 'We understand your business goals and requirements' },
    { step: 2, title: 'Planning', description: 'Create detailed project plans and timelines' },
    { step: 3, title: 'Design', description: 'Design mockups and prototypes for your approval' },
    { step: 4, title: 'Development', description: 'Build your solution with cutting-edge technology' },
    { step: 5, title: 'Testing', description: 'Rigorous quality assurance and testing' },
    { step: 6, title: 'Launch', description: 'Deploy and monitor your solution' }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive solutions tailored to your business needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card-detailed">
                <div className="service-icon-large">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="learn-more">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2>Our Process</h2>
          <p className="section-subtitle">A proven methodology for success</p>
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <h2>Pricing Plans</h2>
          <p className="section-subtitle">Choose the perfect plan for your project</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">Starter</div>
              <div className="price">$2,999</div>
              <p className="price-desc">Perfect for small projects</p>
              <ul className="pricing-features">
                <li>✓ 1-2 weeks delivery</li>
                <li>✓ Basic customization</li>
                <li>✓ 1 round of revisions</li>
                <li>✓ Basic support</li>
              </ul>
              <button className="pricing-button">Get Started</button>
            </div>

            <div className="pricing-card featured">
              <div className="plan-name">Professional</div>
              <div className="price">$9,999</div>
              <p className="price-desc">Most popular choice</p>
              <ul className="pricing-features">
                <li>✓ 4-6 weeks delivery</li>
                <li>✓ Full customization</li>
                <li>✓ 3 rounds of revisions</li>
                <li>✓ Priority support</li>
              </ul>
              <button className="pricing-button">Get Started</button>
            </div>

            <div className="pricing-card">
              <div className="plan-name">Enterprise</div>
              <div className="price">Custom</div>
              <p className="price-desc">For large-scale projects</p>
              <ul className="pricing-features">
                <li>✓ Custom timeline</li>
                <li>✓ Complete customization</li>
                <li>✓ Unlimited revisions</li>
                <li>✓ 24/7 dedicated support</li>
              </ul>
              <button className="pricing-button">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container">
          <h2>Technologies We Use</h2>
          <div className="tech-grid">
            {['React', 'Node.js', 'Python', 'Vue.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'Firebase', 'Next.js'].map((tech, idx) => (
              <div key={idx} className="tech-badge">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss how we can help your business grow</p>
          <button className="cta-button">Schedule Consultation</button>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
