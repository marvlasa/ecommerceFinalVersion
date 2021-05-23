import React from "react";
import { Link } from "react-router-dom";

function Header() {
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
                  <a href="/#">
                    <img src="assets/img/logo/logo.png" alt="" />
                  </a>
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
                        <a href="/#">Page</a>
                        <ul class="submenu">
                          <li>
                            <a href="/#">Categories</a>
                          </li>
                          <li>
                            <a href="/#">Checkout</a>
                          </li>
                          <li>
                            <a href="/#">Product Details</a>
                          </li>
                        </ul>
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
                    <li>
                      <form action="#" class="form-box f-right">
                        <input
                          type="text"
                          name="Search"
                          placeholder="Search products"
                        />
                        <div class="search-icon">
                          <i class="ti-search"></i>
                        </div>
                      </form>
                    </li>
                    <li>
                      <Link to="/login" class="account-btn">
                        My Account
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart">
                        <div class="card-stor">
                          <img src="assets/img/icon/card.svg" alt="" />
                          <span>0</span>
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
                      href="#"
                      aria-haspopup="true"
                      role="button"
                      tabindex="0"
                      class="slicknav_btn slicknav_collapsed"
                      style={{ outline: "none" }}
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
                      style={{ display: "none" }}
                    >
                      <li>
                        <a href="index.html" role="menuitem" tabindex="-1">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="product.html" role="menuitem" tabindex="-1">
                          Product
                        </a>
                      </li>
                      <li>
                        <a href="about.html" role="menuitem" tabindex="-1">
                          About
                        </a>
                      </li>
                      <li class="slicknav_collapsed slicknav_parent">
                        <a
                          href="#"
                          role="menuitem"
                          aria-haspopup="true"
                          tabindex="-1"
                          class="slicknav_item slicknav_row"
                          style={{ outline: "none" }}
                        >
                          <a href="#" tabindex="-1">
                            Page
                          </a>
                          <span class="slicknav_arrow">+</span>
                        </a>
                        <ul
                          class="submenu slicknav_hidden"
                          role="menu"
                          aria-hidden="true"
                          style={{ display: "none" }}
                        >
                          <li>
                            <a href="login.html" role="menuitem" tabindex="-1">
                              Login
                            </a>
                          </li>
                          <li>
                            <a href="card.html" role="menuitem" tabindex="-1">
                              Card
                            </a>
                          </li>
                          <li>
                            <a
                              href="categories.html"
                              role="menuitem"
                              tabindex="-1"
                            >
                              Categories
                            </a>
                          </li>
                          <li>
                            <a
                              href="checkout.html"
                              role="menuitem"
                              tabindex="-1"
                            >
                              Checkout
                            </a>
                          </li>
                          <li>
                            <a
                              href="product_details.html"
                              role="menuitem"
                              tabindex="-1"
                            >
                              Product Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="slicknav_collapsed slicknav_parent">
                        <a
                          href="#"
                          role="menuitem"
                          aria-haspopup="true"
                          tabindex="-1"
                          class="slicknav_item slicknav_row"
                          style={{ outline: "none" }}
                        >
                          <a href="blog.html" tabindex="-1">
                            Blog
                          </a>
                          <span class="slicknav_arrow">+</span>
                        </a>
                        <ul
                          class="submenu slicknav_hidden"
                          role="menu"
                          aria-hidden="true"
                          style={{ display: "none" }}
                        >
                          <li>
                            <a href="blog.html" role="menuitem" tabindex="-1">
                              Blog
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog_details.html"
                              role="menuitem"
                              tabindex="-1"
                            >
                              Blog Details
                            </a>
                          </li>
                          <li>
                            <a
                              href="elements.html"
                              role="menuitem"
                              tabindex="-1"
                            >
                              Elements
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html" role="menuitem" tabindex="-1">
                          Contact
                        </a>
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
