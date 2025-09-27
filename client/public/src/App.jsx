import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ParallaxManager from './components/ParallaxManager';
import IntersectionObserverManager from './components/IntersectionObserverManager';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="font-sans min-h-screen overflow-hidden" style={{ background: 'linear-gradient(120deg, #18122B 0%, #23235B 100%)', color: '#F8F8FF' }}>
  <CustomCursor />
  <ParallaxManager />
  <IntersectionObserverManager />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;