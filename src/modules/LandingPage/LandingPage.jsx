import UserNavbar from './UserNavbar';
import HeroSection from './HeroSection';

export default function LandingPage() {
  return (
    <>
      <div className="container px-7">
        <UserNavbar />
        <HeroSection />
      </div>
    </>
  );
}
