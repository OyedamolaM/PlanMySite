import { useEffect, useState, useRef } from "react";
import "./About.scss";

const statsData = [
  { label: "Years in Business", value: 2, suffix: "+" },
  { label: "Projects Delivered", value: 40, suffix: "+" },
  { label: "Satisfied Clients", value: 30, suffix: "+" },
  { label: "Client-Focused", value: 100, suffix: "%" },
];

export default function About() {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          setAnimated(true);

          statsData.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const stepTime = Math.abs(Math.floor(duration / end));

            const timer = setInterval(() => {
              start += 1;
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = start;
                return newCounts;
              });
              if (start === end) clearInterval(timer);
            }, stepTime);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [animated]);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-container">
        {/* Left side: Text */}
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            For the past <strong>2 years</strong>, we’ve been helping individuals and businesses
            bring their ideas to life online. Our focus is on creating clean, modern, and
            effective websites that deliver results.
          </p>
          <p>
            Whether it’s a simple portfolio site or a full-scale business platform, we put in the
            work to make sure your website is tailored to your goals and audience.
          </p>

          {/* Stats */}
          <div className="about-stats">
            {statsData.map((stat, index) => (
              <div key={index} className="stat">
                <h3>
                  {counts[index]}
                  {stat.suffix}
                </h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Learn More CTA */}
          <a href="#plans" className="btn-primary about-btn">
            See Our Plans
          </a>
        </div>

        {/* Right side: Image */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Team working on a website project"
          />
        </div>
      </div>
    </section>
  );
}
