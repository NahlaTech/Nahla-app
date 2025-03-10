import UserNavbar from './UserNavbar';
import HeroSection from './HeroSection';
import Features from './Features/Features';

export default function LandingPage() {
  return (
    <>
      <div className="container md:px-7">
        <UserNavbar />
        <HeroSection />
        <Features />
      </div>
    </>
  );
}
