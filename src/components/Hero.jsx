import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Build Your Dream Website</h1>
          <p>
            We design sleek, modern websites tailored to your business needs —
            fast, affordable, and professional.
          </p>

          <div className="hero-buttons">
            <a href="#plans" className="btn-primary">
              Get Started
            </a>
            <a href="#portfolio" className="btn-outline">
              View Portfolio
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h2>10+</h2>
              <p>Years Experience</p>
            </div>
            <div>
              <h2>200+</h2>
              <p>Projects Delivered</p>
            </div>
            <div>
              <h2>50+</h2>
              <p>Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
