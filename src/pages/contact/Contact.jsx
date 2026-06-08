import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1>Contact Us</h1>
            <nav className="breadcrumb-nav">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <span>Contact</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div>
              <h2 className="contact-title">Get in Touch</h2>
              <form
                className="contact-form"
                action="contact_process.php"
                method="post"
                id="contactForm"
              >
                <textarea
                  name="message"
                  id="message"
                  rows="7"
                  placeholder="Your message..."
                />
                <div className="contact-form-row">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  style={{ marginBottom: "20px" }}
                />
                <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
                  Send Message
                  <i className="fas fa-paper-plane" style={{ fontSize: "12px" }} />
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="contact-info-block">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="contact-info-text">
                  <h3>Buttonwood, California</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-phone" />
                </div>
                <div className="contact-info-text">
                  <h3>+1 253 565 2365</h3>
                  <p>Mon–Fri, 9am to 6pm</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-envelope" />
                </div>
                <div className="contact-info-text">
                  <h3>hello@maisonbois.com</h3>
                  <p>Send us your query anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
