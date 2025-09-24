import './Hero.scss';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Plan Your Website, Build Your Future</h1>
          <p>
            We create sleek, modern websites for businesses in Nigeria and beyond —
            professional, fast, and affordable.
          </p>

          {/* Main CTA Buttons */}
          <div className="hero-buttons">
            <a href="#plans" className="btn-primary">Get Started</a>
            <a href="#portfolio" className="btn-outline">View Portfolio</a>
          </div>

          {/* WhatsApp & Email Contact Buttons */}
          <div className="hero-contacts">
            <a href="https://wa.me/2348165258326" target="_blank" className="btn-whatsapp">
              WhatsApp Us
            </a>
            <a href="mailto:info@planmysite.com" className="btn-email">
              Email Us
            </a>
          </div>

          {/* Hero Stats */}
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
