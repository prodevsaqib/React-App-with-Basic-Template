import './App.css';
import { useState } from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
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
    </div>
  );
}

export default App;
