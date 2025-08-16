import { Link } from "react-router-dom";
import "../../../styles/home.css";

const HomeSection = () => {
  return (
    <section className="hero-section">
      {/* Curved bottom shape */}
      <div className="wave-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#EBF2FF"
            fillOpacity="1"
            d="M0,128L120,144C240,160,480,192,720,192C960,192,1200,160,1320,144L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Left column - Text content */}
          <div className="hero-text">
            <h1 className="hero-heading">
              Empowering Citizens,
              <br />
              One Fix at a Time
            </h1>
            <p className="hero-description">
              CivicFix connects communities and local authorities to identify,
              report, and resolve civic issues efficiently.
            </p>
            <Link to="/auth/signup" className="button button-primary">
              Lets Get Started
            </Link>
          </div>

          {/* Right column - Image */}
          <div className="hero-image">
            <img src="/images/hero-image.png" alt="CivicFix illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
