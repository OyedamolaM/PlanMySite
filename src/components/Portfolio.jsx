import { useState, useRef } from "react";
import "./Portfolio.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Portfolio() {
  const projects = [
    { title: "Portfolio Website", image: "/images/portfolio-project.png", link: "#" },
    { title: "Pharmacy E-Commerce Store", image: "/images/savans-ecommerce.png", link: "#" },
    { title: "Tech Startup Landing Page", image: "/images/startup-landing.jpg", link: "#" },
    { title: "Real Estate Agency Platform", image: "/images/real-estate.jpg", link: "#" },
    { title: "Educational Platform", image: "/images/french-school.png", link: "#" },
  ];

  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <h2>A Look at Our Portfolio</h2>
        <p className="subtitle">
          We’ve helped businesses across different industries build sleek, modern websites.
        </p>

        <div className="portfolio-swiper-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={false} // no infinite loop
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;

              // Bind navigation after DOM is ready
              setTimeout(() => {
                if (prevRef.current && nextRef.current) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              });
            }}
            className="portfolio-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="portfolio-card">
                  <img src={project.image} alt={project.title} />
                  <div className="card-content">
                    <h3>{project.title}</h3>
                    <a href={project.link} className="view-btn">
                      View Project
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom arrows */}
          <div
            ref={prevRef}
            className={`swiper-button-prev-custom ${isBeginning ? "swiper-button-disabled" : ""}`}
          ></div>
          <div
            ref={nextRef}
            className={`swiper-button-next-custom ${isEnd ? "swiper-button-disabled" : ""}`}
          ></div>
        </div>
      </div>
    </section>
  );
}
