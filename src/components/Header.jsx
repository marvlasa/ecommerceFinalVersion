import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function Header({ setSearchField }) {
  function handleChange(event) {
    setSearchField(event.target.value);
  }

  let location = useLocation();
  const user = useSelector((state) => state.user);
  // console.log("----------------------");
  // console.log("helloo", location.pathname);
  // console.log("----------------------");

  const cart = useSelector((state) => state.cart);
  let cartQuantity = 0;
  cart.forEach((item, index) => {
    cartQuantity = cartQuantity + item.quantity;
    //total += item.price;
  });
  const [headerMenu, setHeaderMenu] = useState("none");
  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  const handleClick = () => {
    if (headerMenu === "none") {
      setHeaderMenu("block");
    } else {
      setHeaderMenu("none");
    }
  };
  return (
    <header>
      <div class="header-area">
        <div class="main-header header-sticky">
          <div class="container-fluid">
            <div
              class="
                  row
                  menu-wrapper
                  align-items-center
                  justify-content-between
                "
            >
              <div class="header-left d-flex align-items-center">
                <div class="logo">
                  <img
                    src="assets/img/logo/logo.png"
                    alt=""
                    style={{ width: "140px" }}
                  />
                </div>
                <div class="logo2">
                  <a href="/#">
                    <img src="assets/img/logo/logo2.png" alt="" />
                  </a>
                </div>
                <div class="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/products">Products</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="header-right1 d-flex align-items-center">
                <div class="search">
                  <ul class="d-flex align-items-center">
                    {location.pathname === "/products" ? (
                      <li>
                        <form action="#" class="form-box f-right">
                          <input
                            type="text"
                            name="Search"
                            placeholder="Search products"
                            onChange={handleChange}
                          />
                          <div class="search-icon">
                            <i class="ti-search"></i>
                          </div>
                        </form>
                      </li>
                    ) : null}
                    <li>
                      {user.name ? (
                        <Link to="/account" class="account-btn">
                          {user.name}
                        </Link>
                      ) : (
                        <Link to="/login" class="account-btn">
                          Login
                        </Link>
                      )}
                    </li>
                    <li>
                      <Link
                        to="/"
                        onClick={handleLogOut}
                        className="account-btn margin-left-40"
                      >
                        Logout
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart">
                        <div class="card-stor">
                          <img src="assets/img/icon/card.svg" alt="" />
                          <span>{cartQuantity}</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-12">
                <div class="mobile_menu d-block d-lg-none">
                  <div class="slicknav_menu">
                    <a
                      href="/#"
                      aria-haspopup="true"
                      role="button"
                      tabindex="0"
                      class="slicknav_btn slicknav_collapsed"
                      style={{ outline: "none" }}
                      onClick={handleClick}
                    >
                      <span class="slicknav_menutxt">MENU</span>
                      <span class="slicknav_icon">
                        <span class="slicknav_icon-bar"></span>
                        <span class="slicknav_icon-bar"></span>
                        <span class="slicknav_icon-bar"></span>
                      </span>
                    </a>
                    <ul
                      class="slicknav_nav slicknav_hidden"
                      aria-hidden="true"
                      role="menu"
                      style={{ display: headerMenu }}
                    >
                      <li>
                        <Link to="/" role="menuitem" tabIndex="-1">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/products" role="menuitem" tabIndex="-1">
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" role="menuitem" tabIndex="-1">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" role="menuitem" tabIndex="-1">
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link to="/login" role="menuitem" tabIndex="-1">
                          My Account
                        </Link>
                      </li>
                      <li>
                        <Link to="/cart" role="menuitem" tabIndex="-1">
                          Cart
                        </Link>
                      </li>
                      <li>
                        <Link to="/logout" role="menuitem" tabIndex="-1">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
