import HeroSection from './HeroSection/HeroSection';
import Pricing from './Pricing/Pricing';
import { useRef } from 'react';
import UserNavbar from './UserNavbar/UserNavbar';
import Features from './Features/Features';

export default function LandingPage() {
  // Create refs for each section
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  return (
    <>
      <div className="container md:px-7">
        {/* Pass refs to Navbar */}
        <UserNavbar
          heroRef={heroRef}
          featuresRef={featuresRef}
          pricingRef={pricingRef}
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
        {/* <UserNavbar />
        <HeroSection />
        <Features />
        <Pricing /> */}
      </div>
    </>
  );
}
