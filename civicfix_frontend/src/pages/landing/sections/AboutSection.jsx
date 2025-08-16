import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="about-title">About</h2>
        <div className="about-content">
          <p className="about-text">
            This is a citizen-driven public complaint reporting platform that
            empowers people to report and track civic issues like potholes,
            broken streetlights, or garbage dumps; making it easier for
            authorities to respond and take action.
          </p>
          <p className="about-text">
            It bridges the gap between citizens and local authorities to build
            cleaner, safer, and more responsive communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
