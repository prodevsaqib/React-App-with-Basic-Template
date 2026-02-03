import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: '🚀',
      title: 'Fast & Reliable',
      description: 'Lightning-fast performance with 99.9% uptime'
    },
    {
      id: 2,
      icon: '🛡️',
      title: 'Secure & Safe',
      description: 'Enterprise-grade security for your data'
    },
    {
      id: 3,
      icon: '💡',
      title: 'Innovative',
      description: 'Cutting-edge technology and solutions'
    },
    {
      id: 4,
      icon: '📞',
      title: '24/7 Support',
      description: 'Round-the-clock customer support'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
