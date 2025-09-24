import "./WhyChoose.scss";

export default function WhyChoose() {
  const features = [
    {
      title: "Affordable Pricing",
      description: "Get professional websites without breaking the bank.",
      icon: "💰",
    },
    {
      title: "Fast Delivery",
      description: "We build and launch your website in record time.",
      icon: "⚡",
    },
    {
      title: "Fully Responsive",
      description: "Your website will look amazing on all devices.",
      icon: "📱",
    },
    {
      title: "24/7 Support",
      description: "We’re here to help you anytime, anywhere.",
      icon: "🤝",
    },
  ];

  return (
    <section className="why-choose" id="why-choose">
      <div className="why-choose-container">
        <h2>Why Choose Us?</h2>
        <p className="subtitle">
          We make it simple, fast, and affordable to launch your online presence.
        </p>

        <div className="features">
          {features.map((item, index) => (
            <div key={index} className="feature-card">
              <span className="icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
