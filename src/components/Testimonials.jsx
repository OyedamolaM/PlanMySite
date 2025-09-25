import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.scss";

// Testimonial data with ratings, role, and avatar
const testimonialsData = [
  {
    text: "PlanMySite made it so easy to launch my portfolio site. I had a beautiful design ready in days!",
    name: "Sarah L.",
    role: "Freelancer",
    rating: 5,
    image: "/images/testimonials/sarah.jpg",
  },
  {
    text: "The Pro plan gave our startup a real online presence. Amazing support team and very reliable.",
    name: "David K.",
    role: "Startup Founder",
    rating: 4,
    image: "/images/testimonials/david.jpg",
  },
  {
    text: "I love the flexibility. We scaled from a single website to multiple sites without hassle.",
    name: "Maria P.",
    role: "Business Owner",
    rating: 5,
    image: "/images/testimonials/maria.jpg",
  },
  {
    text: "Excellent design and support! Our e-commerce store is performing way beyond expectations.",
    name: "James T.",
    role: "Retail Entrepreneur",
    rating: 5,
    image: "/images/testimonials/james.jpg",
  },
  {
    text: "I highly recommend PlanMySite. Our school platform went live smoothly and looks amazing.",
    name: "Linda A.",
    role: "Education Manager",
    rating: 4,
    image: "/images/testimonials/linda.jpg",
  },
  {
    text: "The premium plan was worth every penny. Our brand’s online identity is exactly what we envisioned.",
    name: "Michael R.",
    role: "Tech Founder",
    rating: 5,
    image: "/images/testimonials/michael.jpg",
  },
];

const renderStars = (count) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={`star ${i < count ? "filled" : ""}`}>★</span>
  ));
};

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <h2>What Our Clients Say</h2>
        <p className="subtitle">Trusted by individuals and businesses worldwide</p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonialsData.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="avatar">
                  <img src={t.image} alt={t.name} />
                </div>
                <div className="testimonial-content">
                  <div className="rating">{renderStars(t.rating)}</div>
                  <p>“{t.text}”</p>
                  <h4>{t.name}</h4>
                  <span className="role">{t.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
