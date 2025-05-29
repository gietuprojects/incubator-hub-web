
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Startups from '../components/Startups';
import Labs from '../components/Labs';
import Coworking from '../components/Coworking';
import Amenities from '../components/Amenities';
import Courses from '../components/Courses';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Startups />
      <Labs />
      <Coworking />
      <Amenities />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
