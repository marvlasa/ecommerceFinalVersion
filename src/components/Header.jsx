import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Header({ setSearchField }) {
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [mobileOpen, setMobileOpen] = useState(false);

  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  function handleSearchChange(e) {
    setSearchField(e.target.value);
  }

  function handleLogOut() {
    localStorage.clear();
    window.location.reload();
  }

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <Link to="/" className="site-logo">
            Maison <span>Bois</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="main-nav">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={location.pathname === to ? "active" : ""}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="header-actions">
            {/* Search — only on products page */}
            {location.pathname === "/products" && (
              <div className="header-search">
                <i className="fas fa-search header-search-icon" />
                <input
                  type="text"
                  placeholder="Search products"
                  onChange={handleSearchChange}
                />
              </div>
            )}

            {/* Account */}
            {user.name ? (
              <Link to="/account" className="btn-account">
                {user.name}
              </Link>
            ) : (
              <Link to="/login" className="btn-account">
                Login
              </Link>
            )}

            {user.name && (
              <button className="btn-account" onClick={handleLogOut}>
                Logout
              </button>
            )}

            {/* Cart */}
            <Link to="/cart" className="cart-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span className="cart-count">{cartQuantity}</span>
            </Link>

            {/* Mobile toggle */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        {navLinks.map(({ to, label }) => (
          <Link key={to} to={to} onClick={() => setMobileOpen(false)}>
            {label}
          </Link>
        ))}
        {user.name ? (
          <>
            <Link to="/account" onClick={() => setMobileOpen(false)}>
              My Account
            </Link>
            <button
              className="btn-account"
              style={{ textAlign: "left", padding: "10px 24px", display: "block", width: "100%", fontSize: "14px", color: "var(--muted-2)", background: "none", border: "none", cursor: "pointer" }}
              onClick={handleLogOut}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" onClick={() => setMobileOpen(false)}>
            Login
          </Link>
        )}
        <Link to="/cart" onClick={() => setMobileOpen(false)}>
          Cart ({cartQuantity})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
