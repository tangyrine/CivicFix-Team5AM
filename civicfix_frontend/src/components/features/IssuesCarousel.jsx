import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./IssuesCarousel.css";

const issues = [
  {
    id: 1,
    title: "Potholes",
    image: "/images/potholes.png",
  },
  {
    id: 2,
    title: "Power Cuts",
    image: "/images/powercuts.png",
  },
  {
    id: 3,
    title: "Garbage",
    image: "/images/garbage.png",
  },
  {
    id: 4,
    title: "Street Light",
    image: "/images/streetlight.png",
  },
];

const IssuesCarousel = () => {
  return (
    <section className="issues-section">
      <div className="container">
        <h2 className="issues-title">Issues you can Report</h2>

        <div className="issues-carousel">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
              },
              // when window width is >= 1280px
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            {issues.map((issue) => (
              <SwiperSlide key={issue.id}>
                <div className="issue-card">
                  <div className="issue-image-container">
                    <img
                      src={issue.image}
                      alt={issue.title}
                      className="issue-image"
                    />
                  </div>
                  <h3 className="issue-title">{issue.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default IssuesCarousel;
