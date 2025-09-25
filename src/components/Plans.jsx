import { useState } from 'react';
import './Plans.scss';

const nairaPerDollar = 1505;

// Personal / Micro Plans
const personalPlans = [
  {
    name: "Simple Website",
    basePriceNGN: 50000,
    domainPriceNGN: 110000,
    features: [
      "1–2 Pages (can include blog)",
      "Responsive Design",
      "Basic SEO",
      "1 Year Hosting",
    ],
  },
  {
    name: "Portfolio Website",
    basePriceNGN: 75000,
    domainPriceNGN: 150000,
    features: [
      "Single-page portfolio",
      "Responsive Design",
      "Basic SEO",
      "1 Year Hosting",
    ],
  },
];

// Business / Professional Plans
const businessPlans = [
  {
    name: "Starter",
    priceNGN: 250000,
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
    name: "Business",
    priceNGN: 500000,
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
    name: "Enterprise",
    priceNGN: 1000000,
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
    name: "Premium",
    priceNGN: 2000000,
    features: [
      "Unlimited Pages & Websites",
      "Fully Custom Advanced Design",
      "Dedicated Account Manager",
      "Priority 24/7 Support",
      "Advanced SEO, Analytics, Marketing Integrations",
      "E-commerce & Custom Features",
      "Custom Domain",
    ],
    premium: true,
  },
];

export default function Plans() {
  const [currencyPersonal, setCurrencyPersonal] = useState('NGN');
  const [currencyBusiness, setCurrencyBusiness] = useState('NGN');
  const [domainSelected, setDomainSelected] = useState({}); // personal domain toggles

  const toggleCurrencyPersonal = () =>
    setCurrencyPersonal(currencyPersonal === 'NGN' ? 'USD' : 'NGN');

  const toggleCurrencyBusiness = () =>
    setCurrencyBusiness(currencyBusiness === 'NGN' ? 'USD' : 'NGN');

  const toggleDomain = (index) => {
    setDomainSelected({
      ...domainSelected,
      [index]: !domainSelected[index],
    });
  };

  const renderPersonalPlanCard = (plan, index) => {
    const priceNGN = domainSelected[index] ? plan.domainPriceNGN : plan.basePriceNGN;
    const priceUSD = Math.round(priceNGN / nairaPerDollar);

    return (
      <div key={index} className="plan-card">
        <h3>{plan.name}</h3>
        <p className="price">
          {currencyPersonal === 'NGN'
            ? `₦${priceNGN.toLocaleString()}`
            : `$${priceUSD.toLocaleString()}`}
        </p>

        <ul>
          {plan.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        {/* Domain toggle as switch */}
        {plan.domainPriceNGN !== plan.basePriceNGN && (
          <div className="domain-toggle">
            <span>Add Custom Domain</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={domainSelected[index] || false}
                onChange={() => toggleDomain(index)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        )}

        <a href="#contact" className="btn-primary">Get Started</a>
      </div>
    );
  };

  const renderBusinessPlanCard = (plan, index) => {
    const priceUSD = Math.round(plan.priceNGN / nairaPerDollar);
    return (
      <div key={index} className={`plan-card ${plan.premium ? 'premium' : ''}`}>
        {plan.premium && <div className="ribbon">Premium</div>}
        <h3>{plan.name}</h3>
        <p className="price">
          {currencyBusiness === 'NGN'
            ? `₦${plan.priceNGN.toLocaleString()}`
            : `$${priceUSD.toLocaleString()}`}
        </p>
        <ul>
          {plan.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <a href="#contact" className="btn-primary">Get Started</a>
      </div>
    );
  };

  return (
    <section className="plans" id="plans">
      <div className="plans-header">
        <h2>Our Pricing Plans</h2>
        <p>Choose the plan that best fits your personal or business needs.</p>
      </div>

      {/* Personal Plans */}
      <div className="plans-section">
        <h3 className="plans-row-title">Personal / Single Websites</h3>
        <div className="currency-switch personal-switch">
          <label className="switch">
            <input type="checkbox" onChange={toggleCurrencyPersonal} />
            <span className="slider round"></span>
          </label>
          <span>{currencyPersonal}</span>
        </div>
        <div className="plans-cards personal">
          {personalPlans.map((plan, i) => renderPersonalPlanCard(plan, i))}
        </div>
      </div>

      {/* Business Plans */}
      <div className="plans-section">
        <h3 className="plans-row-title">Business / Professional Plans</h3>
        <div className="currency-switch business-switch">
          <label className="switch">
            <input type="checkbox" onChange={toggleCurrencyBusiness} />
            <span className="slider round"></span>
          </label>
          <span>{currencyBusiness}</span>
        </div>
        <div className="plans-cards business">
          {businessPlans.map((plan, i) => renderBusinessPlanCard(plan, i))}
        </div>
      </div>
    </section>
  );
}
