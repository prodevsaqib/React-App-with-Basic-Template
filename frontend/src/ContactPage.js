import './ContactPage.css';
import { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setSubmitStatus(''), 3000);
  };

  const contactMethods = [
    {
      icon: '📞',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      desc: 'Call us during business hours'
    },
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@yourbrand.com',
      desc: 'We reply within 24 hours'
    },
    {
      icon: '📍',
      title: 'Address',
      value: '123 Business Street',
      desc: 'New York, NY 10001'
    },
    {
      icon: '🕐',
      title: 'Hours',
      value: 'Mon - Fri: 9AM - 6PM',
      desc: 'EST (Closed on weekends)'
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a complex application could take 2-3 months.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow a comprehensive 6-step process: Discovery, Planning, Design, Development, Testing, and Launch. We keep you updated at each stage.'
    },
    {
      question: 'Do you provide support after launch?',
      answer: 'Yes! We offer various support packages including maintenance, updates, and technical support based on your needs.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with modern technologies including React, Node.js, Python, AWS, MongoDB, PostgreSQL, and many others.'
    },
    {
      question: 'Can you help with existing projects?',
      answer: 'Absolutely! We can audit, maintain, update, or enhance existing applications built with various technologies.'
    },
    {
      question: 'How do you handle project changes?',
      answer: 'We use an agile approach that allows for flexibility. Changes can be incorporated with scope and timeline adjustments.'
    }
  ];

  const [expandedFAQ, setExpandedFAQ] = useState(null);

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>We're here to help and answer any question you might have</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods-section">
        <div className="container">
          <h2>Contact Information</h2>
          <div className="contact-methods-grid">
            {contactMethods.map((method, idx) => (
              <div key={idx} className="contact-method-card">
                <div className="method-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <p className="method-value">{method.value}</p>
                <p className="method-desc">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-content">
              <h2>Send us a Message</h2>
              <p>Have a question or ready to discuss your project? Fill out the form and we'll get back to you as soon as possible.</p>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  ✓ Thank you! We've received your message and will contact you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>

            <div className="form-image">
              <div className="placeholder-box">
                <span>Contact Illustration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="social-section">
        <div className="container">
          <h2>Follow Us</h2>
          <p>Connect with us on social media for updates and insights</p>
          <div className="social-links-grid">
            <a href="#facebook" className="social-link">Facebook</a>
            <a href="#twitter" className="social-link">Twitter</a>
            <a href="#linkedin" className="social-link">LinkedIn</a>
            <a href="#instagram" className="social-link">Instagram</a>
            <a href="#github" className="social-link">GitHub</a>
            <a href="#youtube" className="social-link">YouTube</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <p className="section-subtitle">Find answers to common questions</p>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{expandedFAQ === idx ? '−' : '+'}</span>
                </button>
                {expandedFAQ === idx && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Visit Our Office</h2>
          <div className="map-placeholder">
            <p>📍 Map Integration Coming Soon</p>
            <p>123 Business Street, New York, NY 10001</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
