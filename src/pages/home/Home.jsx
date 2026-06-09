import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";

const FEATURES = [
  { icon: "fa-truck",     title: "Free Delivery",   desc: "On all orders, anywhere" },
  { icon: "fa-shield-alt", title: "Secure Payment", desc: "100% protected checkout" },
  { icon: "fa-undo",      title: "Easy Returns",    desc: "30-day hassle-free policy" },
  { icon: "fa-headset",   title: "Expert Support",  desc: "7 days a week, here for you" },
];

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    axios
      .get("https://ecommerce-back-end-fv.vercel.app/products/highlight")
      .then((res) => setProducts(res.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <span className="hero-label">New Collection — 2024</span>
            <h1 className="hero-title">
              Crafted for the<br /><em>Modern Home</em>
            </h1>
            <p className="hero-desc">
              Fill your space with furniture that brings warmth the moment you walk in.
              From cozy sectionals to statement beds — timeless designs built to last.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn-primary">
                Shop Collection <i className="fas fa-arrow-right" style={{ fontSize: "12px" }} />
              </Link>
              <Link to="/about" className="btn-outline">Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="features-strip">
        <div className="container">
          <div className="features-grid">
            {FEATURES.map(({ icon, title, desc }) => (
              <div className="feature-item" key={title}>
                <div className="feature-icon"><i className={`fas ${icon}`} /></div>
                <div className="feature-text"><h5>{title}</h5><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {products.length > 0 && (
        <section className="products-section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Handpicked for you</span>
              <h2 className="section-title">Popular Products</h2>
              <p className="section-desc">
                Are you designing a space from scratch or adding the finishing touches? Start here.
              </p>
            </div>
            <div className="product-grid">
              {products.map((item) => (
                <article className="product-card" key={item.id || item.slug}>
                  <div className="product-card-image">
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </div>
                  <div className="product-card-body">
                    <h3 className="product-card-name">
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </h3>
                    <p className="product-card-price">${item.price}</p>
                    <div className="product-card-footer">
                      <Link to={`/product/${item.slug}`} className="btn-ghost">View Details</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center">
              <Link to="/products" className="btn-outline">Browse All Products</Link>
            </div>
          </div>
        </section>
      )}

      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner-inner">
            <h2>Best Furniture<br /><em>Manufacturer</em></h2>
            <Link to="/about" className="btn-primary">Discover More</Link>
          </div>
        </div>
      </section>

      <Footer />
      <a href="/#" className="back-top-btn" title="Back to top">
        <i className="fas fa-chevron-up" />
      </a>
    </div>
  );
}

export default Home;
