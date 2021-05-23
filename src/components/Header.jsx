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
                <div class="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
