import { useState } from "react";
import "./FAQ.scss";

const faqs = [
  {
    q: "How long does it take to develop a website?",
    a: `It depends on complexity and features. A simple site (few pages) typically takes 1 week.
For more advanced sites (e.g. e-commerce or custom integrations) allow 4 weeks for design, development, testing and optimisation.`,
  },
  {
    q: "What is the pricing for your web development services?",
    a: `Pricing is project-based and depends on site complexity, number of pages and features. We offer fixed packages and custom quotes — see our Pricing section or contact us for a tailored proposal.`,
  },
  {
    q: "What types of websites do you create?",
    a: `We build corporate sites, e-commerce, fintech, real estate, blogs, educational sites, and more — any site tailored to your business needs.`,
  },
  {
    q: "Do you provide post-launch maintenance?",
    a: `Yes — we offer 1 month of free maintenance after launch and optional ongoing maintenance plans to keep your site secure and updated.`,
  },
  {
    q: "What do you need from me to get started?",
    a: `We need basic business details, content (text/images), branding preferences, and any reference sites. If you already have domain/hosting we can work with that, otherwise we can assist in purchasing and setup.`,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Answers to common questions from clients — if you don't see yours, get in touch.</p>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{item.q}</span>
                  <span className="icon" aria-hidden>{isOpen ? "−" : "+"}</span>
                </button>

                <div
                  id={`faq-answer-${i}`}
                  className="faq-answer"
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
