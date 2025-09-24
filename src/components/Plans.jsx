import "./Plans.scss";

const plans = [
  {
    name: "Starter",
    priceUSD: 50,
    priceNGN: 45000,
    features: [
      "1 Website",
      "Modern Template Design",
      "Email Support",
      "Basic SEO Optimization",
    ],
  },
  {
    name: "Professional",
    priceUSD: 120,
    priceNGN: 108000,
    features: [
      "Up to 3 Websites",
      "Custom Design",
      "Priority Email & Chat Support",
      "SEO & Analytics Integration",
      "CMS Setup",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    priceUSD: 300,
    priceNGN: 270000,
    features: [
      "Unlimited Websites",
      "Fully Custom Design",
      "Dedicated Account Manager",
      "Advanced SEO & Analytics",
      "24/7 Support",
      "E-commerce Integration",
    ],
  },
];

export default function Plans() {
  return (
    <section className="plans" id="plans">
      <div className="plans-container">
        <h2>Choose Your Plan</h2>
        <p className="subtitle">
          Flexible website packages to suit individuals, startups, and enterprises.
        </p>

        <div className="plan-cards">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`plan-card ${plan.featured ? "featured" : ""}`}
            >
              {plan.featured && <div className="ribbon">Popular</div>}
              <h3>{plan.name}</h3>
              <p className="price">
                ${plan.priceUSD.toLocaleString()} / <span>₦{plan.priceNGN.toLocaleString()}</span>
              </p>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
