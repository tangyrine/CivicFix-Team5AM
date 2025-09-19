import React, { useState } from "react";
import "./TestimonialSection.css";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "CivicFix has transformed how I interact with my local government. I reported a broken streetlight that had been ignored for months, and it was fixed within a week after using this platform!",
      author: "Sarah Johnson",
      role: "Community Member",
    },
    {
      id: 2,
      quote:
        "As a city maintenance worker, CivicFix has made my job so much more efficient. The detailed reports with photos and exact locations help us resolve issues faster.",
      author: "Michael Rivera",
      role: "City Services",
    },
    {
      id: 3,
      quote:
        "I love how easy it is to report issues with CivicFix. The app is intuitive, and I can track the status of my reports in real-time. This is exactly what our community needed!",
      author: "Emma Patel",
      role: "Local Resident",
    },
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="testimonial-section">
      <div className="container">
        <h2 className="testimonial-title">What Our Users Say</h2>

        <div className="testimonial-carousel">
          <div className="testimonial-card">
            <div className="testimonial-text">
              <p className="testimonial-quote">
                {testimonials[currentIndex].quote}
              </p>
              <p className="testimonial-author">
                - {testimonials[currentIndex].author},{" "}
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          <div className="carousel-navigation">
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
            >
              &#10094;
            </button>

            <div className="carousel-dots">
              {testimonials.map((_, slideIndex) => (
                <button
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={`carousel-dot ${
                    currentIndex === slideIndex ? "active" : ""
                  }`}
                  aria-label={`Go to testimonial ${slideIndex + 1}`}
                >
                  <span></span>
                </button>
              ))}
            </div>

            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
