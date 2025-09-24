import "./Testimonials.scss";

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <h2>What Our Clients Say</h2>
        <p className="subtitle">Trusted by individuals and businesses worldwide</p>

        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              “PlanMySite made it so easy to launch my portfolio site. I had a
              beautiful design ready in days!”
            </p>
            <h4>— Sarah L., Freelancer</h4>
          </div>

          <div className="testimonial-card">
            <p>
              “The Pro plan gave our startup a real online presence. Amazing
              support team and very reliable.”
            </p>
            <h4>— David K., Startup Founder</h4>
          </div>

          <div className="testimonial-card">
            <p>
              “I love the flexibility. We scaled from a single website to
              multiple sites without hassle.”
            </p>
            <h4>— Maria P., Business Owner</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
