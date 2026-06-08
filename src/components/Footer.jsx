import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      {/* Feature strip */}
      <div className="footer-features">
        <div className="container">
          <div className="footer-features-grid">
            <div className="footer-feature-item">
              <span className="footer-feature-icon">
                <i className="fas fa-truck" />
              </span>
              <div className="footer-feature-text">
                <h5>Fast &amp; Free Delivery</h5>
                <p>Free delivery on all orders</p>
              </div>
            </div>
            <div className="footer-feature-item">
              <span className="footer-feature-icon">
                <i className="fas fa-shield-alt" />
              </span>
              <div className="footer-feature-text">
                <h5>Secure Payment</h5>
                <p>100% secure transactions</p>
              </div>
            </div>
            <div className="footer-feature-item">
              <span className="footer-feature-icon">
                <i className="fas fa-undo" />
              </span>
              <div className="footer-feature-text">
                <h5>Money Back Guarantee</h5>
                <p>30-day return policy</p>
              </div>
            </div>
            <div className="footer-feature-item">
              <span className="footer-feature-icon">
                <i className="fas fa-headset" />
              </span>
              <div className="footer-feature-text">
                <h5>Online Support</h5>
                <p>Available 7 days a week</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <span className="footer-brand-name">
                Maison <span>Bois</span>
              </span>
              <p>
                Mindfully made, modern designs for everyday comfort and timeless
                style. Crafted with care, built to last.
              </p>
              <div className="footer-social">
                <a href="/#" aria-label="Twitter">
                  <i className="fab fa-twitter" />
                </a>
                <a href="/#" aria-label="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="/#" aria-label="Pinterest">
                  <i className="fab fa-pinterest-p" />
                </a>
                <a href="/#" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Shop */}
            <div className="footer-col">
              <h4>Shop</h4>
              <ul>
                <li><a href="/#">Sofas &amp; Sectionals</a></li>
                <li><a href="/#">Tables &amp; Desks</a></li>
                <li><a href="/#">Chairs</a></li>
                <li><a href="/#">Beds &amp; Bedding</a></li>
              </ul>
            </div>

            {/* Info */}
            <div className="footer-col">
              <h4>Info</h4>
              <ul>
                <li><a href="/#">Privacy Policy</a></li>
                <li><a href="/#">Terms of Service</a></li>
                <li><a href="/#">Style Guide</a></li>
                <li><a href="/#">Partnerships</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Maison Bois. All rights reserved.
            Made with care by{" "}
            <a href="https://github.com/marvlasa" target="_blank" rel="noreferrer">
              Martín Vlasanovich
            </a>{" "}
            &amp; team.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
