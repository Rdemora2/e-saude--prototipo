import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Differentials from './components/Differentials';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Plans from './components/Plans';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "eSaude Assist - Cuidados médicos online";
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Differentials />
      <Partners />
      <Testimonials />
      <Plans />
      <Footer />
    </div>
  );
}

export default App;