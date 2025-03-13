import HeroSection from './HeroSection/HeroSection';
import Pricing from './Pricing/Pricing';
import { useRef } from 'react';
import UserNavbar from './UserNavbar/UserNavbar';
import Features from './Features/Features';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import About from './About/About';

export default function LandingPage() {
  // Create refs for each section
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  return (
    <>
      {/* Pass refs to Navbar */}
      <UserNavbar
        heroRef={heroRef}
        featuresRef={featuresRef}
        pricingRef={pricingRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
      />

      {/* Assign refs to the corresponding sections */}
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={featuresRef}>
        <Features />
      </div>
      <div ref={pricingRef}>
        <Pricing />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </>
  );
}
