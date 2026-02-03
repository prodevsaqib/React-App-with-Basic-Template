import './HomePage.css';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function HomePage({ onNavigate }) {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default HomePage;
