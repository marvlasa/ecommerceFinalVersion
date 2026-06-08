import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const { slug } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const history = useHistory();

  function handleAddToCart() {
    if (user.name) {
      dispatch({ type: "CART_ADD_ITEM", payload: product });
    } else {
      history.push("/login");
    }
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://ecommerce-back-end-fv.vercel.app/product/${slug}`
        );
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const inStock = product.stock > 0;

  return (
    <div>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1>Product Details</h1>
            <nav className="breadcrumb-nav">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <Link to="/products">Products</Link>
              <span className="breadcrumb-sep">/</span>
              <span>{product.name || "Detail"}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="product-detail-section">
        <div className="container">
          <div className="product-detail-grid">
            {/* Image */}
            <div className="product-detail-image">
              {product.image && (
                <img src={product.image} alt={product.name} />
              )}
            </div>

            {/* Info */}
            <div className="product-detail-info">
              {product.category && (
                <span className="product-detail-category">
                  {product.category.name}
                </span>
              )}

              <h1 className="product-detail-name">{product.name}</h1>

              <p className="product-detail-price">${product.price}</p>

              <span
                className={`product-stock-badge ${inStock ? "instock" : "nostock"}`}
              >
                <i className={`fas fa-circle`} style={{ fontSize: "8px" }} />
                {inStock ? "In Stock" : "Out of Stock"}
              </span>

              {product.description && (
                <p className="product-detail-desc">{product.description}</p>
              )}

              <div className="product-detail-actions">
                <button
                  className="btn-primary"
                  onClick={handleAddToCart}
                  disabled={!inStock}
                >
                  <i className="fas fa-shopping-bag" style={{ fontSize: "13px" }} />
                  Add to Cart
                </button>
                <Link to="/products" className="btn-outline">
                  Continue Shopping
                </Link>
              </div>
            </div>
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

export default ProductDetail;
