import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./Contact.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p className="subtitle">
          Have a project in mind? We'd love to hear from you!
        </p>

        <div className="contact-wrapper">
          {/* Form */}
          <div className="form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Send Message</button>
              {submitted && (
                <p className="success-msg">
                  Thank you! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Our Office</h3>
            <p>
              <strong>Lagos:</strong> 1, Sunday Akinbo Street, Command, Ipaja,
              Lagos
            </p>

            <h3>Contact</h3>
            <p>
              <FaPhoneAlt className="icon" />{" "}
              <a href="tel:+2348165258326">08165258326</a>
            </p>
            <p>
              <FaEnvelope className="icon" />{" "}
              <a href="mailto:aoyedamola@gmail.com">aoyedamola@gmail.com</a>
            </p>
            <p>
              <FaWhatsapp className="icon" />{" "}
              <a
                href="https://wa.me/2348165258326"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat Now
              </a>
            </p>

            {/* Map */}
            <div className="map-container">
              <iframe
                title="office-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.3154!2d3.3623!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c123456789%3A0xabcdef123456!2s1%20Sunday%20Akinbo%20Street%2C%20Ipaja%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1690000000000!5m2!1sen!2sng"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="contact-actions">
          <a href="tel:+2348165258326" className="btn-action">
            <FaPhoneAlt /> Call Us
          </a>
          <a href="mailto:aoyedamola@gmail.com" className="btn-action">
            <FaEnvelope /> Email Us
          </a>
          <a
            href="https://wa.me/2348165258326"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-action"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
