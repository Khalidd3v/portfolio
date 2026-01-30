import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import './index.css';

function App() {
  const [view, setView] = useState('home'); // 'home' or 'privacy'

  useEffect(() => {
    if (view === 'home') {
      document.title = 'Khalid Ali Khan | Creative Developer | SaaS & AI Solutions';
    } else if (view === 'privacy') {
      document.title = 'Privacy Policy | Khalid Ali Khan';
    }
  }, [view]);

  const navigateToPrivacy = (e) => {
    e?.preventDefault();
    setView('privacy');
    window.scrollTo(0, 0);
  };

  const navigateHome = (e) => {
    e?.preventDefault();
    setView('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="portfolio-app">
      <Navbar onNavigateHome={navigateHome} />

      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </>
        ) : (
          <Privacy onBack={navigateHome} />
        )}
      </main>

      <Footer onShowPrivacy={navigateToPrivacy} />
    </div>
  );
}

export default App;
