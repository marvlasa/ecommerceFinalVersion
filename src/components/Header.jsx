import React from "react";

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
                        <a href="/#">Home</a>
                      </li>
                      <li>
                        <a href="/#">Product</a>
                      </li>
                      <li>
                        <a href="/#">About</a>
                      </li>
                      <li>
                        <a href="/#">Page</a>
                        <ul class="submenu">
                          <li>
                            <a href="/#">Login</a>
                          </li>
                          <li>
                            <a href="/#">Card</a>
                          </li>
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
                        <a href="/#">Blog</a>
                        <ul class="submenu">
                          <li>
                            <a href="/#">Blog</a>
                          </li>
                          <li>
                            <a href="/#">Blog Details</a>
                          </li>
                          <li>
                            <a href="/#">Elements</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/#">Contact</a>
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
                      <a href="/#" class="account-btn" target="_blank">
                        My Account
                      </a>
                    </li>
                    <li>
                      <div class="card-stor">
                        <img src="assets/img/icon/card.svg" alt="" />
                        <span>0</span>
                      </div>
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
