import Navbar from "@/components/layout/Navbar.jsx";
import Footer from "@/components/layout/Footer.jsx";
import HomeSection from "@/pages/landing/sections/HomeSection.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import FeaturesSection from "./sections/FeaturesSection.jsx";
import HowToUseSection from "@/components/sections/HowToUseSection.jsx";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <FeaturesSection />
      <HowToUseSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
