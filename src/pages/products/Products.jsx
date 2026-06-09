import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

const ALL_ID = 0;

function Products({ searchField }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(ALL_ID);

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes((searchField || "").toLowerCase())
  );

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://ecommerce-back-end-fv.vercel.app/category"
        );
        setCategories(res.data.categories || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://ecommerce-back-end-fv.vercel.app/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  async function handleCategorySelect(id) {
    setActiveCategory(id);
    const url =
      id === ALL_ID
        ? "https://ecommerce-back-end-fv.vercel.app/products"
        : `https://ecommerce-back-end-fv.vercel.app/products/category/${id}`;
    try {
      const res = await axios.get(url);
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <PageBanner title="Our Collection" crumb="Products" />

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Explore the range</span>
            <h2 className="section-title">Make Over Your Room</h2>
            <p className="section-desc">
              Warm woods and a refined foundation conjure a timeless state of
              mind wherever you are.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="category-tabs">
            <button
              className={`category-tab ${activeCategory === ALL_ID ? "active" : ""}`}
              onClick={() => handleCategorySelect(ALL_ID)}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-tab ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => handleCategorySelect(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="product-grid">
            {filteredProducts.map((item) => (
              <article className="product-card" key={item.id || item.slug}>
                <div className="product-card-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />
                </div>
                <div className="product-card-body">
                  <h3 className="product-card-name">
                    <Link to={"/product/" + item.slug}>{item.name}</Link>
                  </h3>
                  <p className="product-card-price">${item.price}</p>
                  <div className="product-card-footer">
                    <Link to={"/product/" + item.slug} className="btn-ghost">
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="cart-empty">
              <h2>No products found</h2>
              <p>Try a different category or search term.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <a href="/products#" className="back-top-btn" title="Back to top">
        <i className="fas fa-chevron-up" />
      </a>
    </div>
  );
}

export default Products;
