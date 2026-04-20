import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import PortfolioCarousel from '../components/PortfolioCarousel';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <PortfolioCarousel />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;