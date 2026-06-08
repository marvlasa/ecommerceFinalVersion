import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function OrderDetail() {
  return (
    <div>
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1>Order Detail</h1>
            <nav className="breadcrumb-nav">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <Link to="/account">Account</Link>
              <span className="breadcrumb-sep">/</span>
              <span>Order</span>
            </nav>
          </div>
        </div>
      </div>

      <section className="cart-section">
        <div className="container">
          <div style={{ marginBottom: "24px" }}>
            <Link to="/account" className="btn-outline">
              &larr; Back to Account
            </Link>
          </div>
          <div className="cart-empty">
            <h2>No detail available</h2>
            <p>Please view order details from your account page.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default OrderDetail;
