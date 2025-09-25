import { useState } from "react";
import "./Plans.scss";

const nairaPerDollar = 1505;
const nairaPerPound = 1850; // example conversion rate

const personalPlans = [
  {
    title: "Simple Website",
    basePrice: 50000,
    domainPrice: 110000,
    features: [
      "1–2 Pages (can include blog)",
      "Responsive Design",
      "Basic SEO",
      "1 Year Hosting",
    ],
  },
  {
    title: "Portfolio Website",
    basePrice: 75000,
    domainPrice: 150000,
    features: [
      "Single-page portfolio",
      "Responsive Design",
      "Basic SEO",
      "1 Year Hosting",
    ],
  },
];

const businessPlans = [
  {
    title: "Starter",
    price: 250000,
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "SEO Optimized",
      "1 Year Hosting",
      "Basic Support",
      "Custom Domain",
    ],
  },
  {
    title: "Business",
    price: 500000,
    features: [
      "Up to 10 Pages",
      "Custom Design",
      "SEO & Analytics Integration",
      "CMS Setup",
      "1 Year Hosting",
      "Custom Domain",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise",
    price: 1000000,
    features: [
      "Unlimited Pages",
      "Fully Custom Design",
      "Advanced SEO & Analytics",
      "E-commerce Integration",
      "Dedicated Account Manager",
      "24/7 Support",
      "Custom Domain",
    ],
  },
  {
    title: "Premium",
    price: 2000000,
    features: [
      "Unlimited Pages & Websites",
      "Fully Custom Advanced Design",
      "Dedicated Account Manager",
      "Priority 24/7 Support",
      "Advanced SEO, Analytics, Marketing Integrations",
      "E-commerce & Custom Features",
      "Custom Domain",
    ],
    highlight: true,
  },
];

export default function Plans() {
  const [currencyPersonal, setCurrencyPersonal] = useState("NGN");
  const [currencyBusiness, setCurrencyBusiness] = useState("NGN");
  const [domainSelected, setDomainSelected] = useState({});

  const cycleCurrency = (current) => {
    if (current === "NGN") return "USD";
    if (current === "USD") return "GBP";
    return "NGN";
  };

  const toggleCurrencyPersonal = () =>
    setCurrencyPersonal(cycleCurrency(currencyPersonal));
  const toggleCurrencyBusiness = () =>
    setCurrencyBusiness(cycleCurrency(currencyBusiness));
  const toggleDomain = (index) =>
    setDomainSelected({ ...domainSelected, [index]: !domainSelected[index] });

  const formatPrice = (price, currency) => {
    if (currency === "NGN") return `₦${price.toLocaleString()}`;
    if (currency === "USD") return `$${Math.round(price / nairaPerDollar).toLocaleString()}`;
    if (currency === "GBP") return `£${Math.round(price / nairaPerPound).toLocaleString()}`;
  };

  const renderPersonalPlanCard = (plan, index) => {
    const price = domainSelected[index] ? plan.domainPrice : plan.basePrice;
    return (
      <div key={index} className="plan-card">
        {plan.highlight && <div className="ribbon">Premium</div>}
        <h4>{plan.title}</h4>
        <p className="price">{formatPrice(price, currencyPersonal)}</p>
        <ul>
          {plan.features.map((f, j) => (
            <li key={j}>{f}</li>
          ))}
        </ul>

        <div className="plan-toggle">
          <span>Add Domain</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={domainSelected[index] || false}
              onChange={() => toggleDomain(index)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <button className="btn">Get Started</button>
      </div>
    );
  };

  const renderBusinessPlanCard = (plan, index) => {
    return (
      <div key={index} className={`plan-card ${plan.highlight ? "highlight" : ""}`}>
        {plan.highlight && <div className="ribbon">Premium</div>}
        <h4>{plan.title}</h4>
        <p className="price">{formatPrice(plan.price, currencyBusiness)}</p>
        <ul>
          {plan.features.map((f, j) => (
            <li key={j}>{f}</li>
          ))}
        </ul>

        <button className="btn">Get Started</button>
      </div>
    );
  };

  return (
    <section className="plans-section" id="plans">
      <h2>Our Pricing Plans</h2>
      <p className="subtitle">
        Choose the plan that best fits your personal or business needs.
      </p>

      <div className="plan-cards">
        {/* Personal Plans */}
        <div className="plan-category">
          <h3>Personal / Single Websites</h3>
          <div className="plan-toggle">
            <span>Currency</span>
            <label className="switch">
              <input type="checkbox" onChange={toggleCurrencyPersonal} />
              <span className="slider"></span>
            </label>
            <span>{currencyPersonal}</span>
          </div>
          <div className="plans">
            {personalPlans.map((plan, i) => renderPersonalPlanCard(plan, i))}
          </div>
        </div>

        {/* Business Plans */}
        <div className="plan-category">
          <h3>Business / Professional Plans</h3>
          <div className="plan-toggle">
            <span>Currency</span>
            <label className="switch">
              <input type="checkbox" onChange={toggleCurrencyBusiness} />
              <span className="slider"></span>
            </label>
            <span>{currencyBusiness}</span>
          </div>
          <div className="plans">
            {businessPlans.map((plan, i) => renderBusinessPlanCard(plan, i))}
          </div>
        </div>
      </div>
    </section>
  );
}
