import Navbar from "../../components/layout/Navbar.jsx";
import HomeSection from "./sections/HomeSection.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import FeaturesSection from "./sections/FeaturesSection.jsx";
import TestimonialSection from "./sections/TestimonialSection.jsx";
import Footer from "../../components/layout/Footer.jsx";
import HowToUseSection from "../../components/sections/HowToUseSection.jsx";
import ChatBot from "../../components/common/ChatBot.jsx";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <FeaturesSection />
      <HowToUseSection />
      <TestimonialSection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default LandingPage;
