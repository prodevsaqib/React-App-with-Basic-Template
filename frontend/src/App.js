import './App.css';
import { useState } from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <Header onNavigate={navigateTo} />
      {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
      {currentPage === 'about' && (
        <>
          <AboutPage />
          <Footer onNavigate={navigateTo} />
        </>
      )}
      {currentPage === 'services' && (
        <>
          <ServicesPage />
          <Footer onNavigate={navigateTo} />
        </>
      )}
      {currentPage === 'contact' && (
        <>
          <ContactPage />
          <Footer onNavigate={navigateTo} />
        </>
      )}
    </div>
  );
}

export default App;
