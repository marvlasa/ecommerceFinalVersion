import React from "react";

function Login() {
  return (
    <div>
      <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
          <div class="preloader-inner position-relative">
            <div class="preloader-circle"></div>
            <div class="preloader-img pere-text">
              <img src="assets/img/logo/loder.png" alt="" />
            </div>
          </div>
        </div>
      </div>
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
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt="" />
                    </a>
                  </div>
                  <div class="logo2">
                    <a href="index.html">
                      <img src="assets/img/logo/logo2.png" alt="" />
                    </a>
                  </div>
                  <div class="main-menu d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="product.html">Product</a>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="#">Page</a>
                          <ul class="submenu">
                            <li>
                              <a href="login.html">Login</a>
                            </li>
                            <li>
                              <a href="card.html">Card</a>
                            </li>
                            <li>
                              <a href="categories.html">Categories</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="product_details.html">Product Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog.html">Blog</a>
                          <ul class="submenu">
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="blog_details.html">Blog Details</a>
                            </li>
                            <li>
                              <a href="elements.html">Elements</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
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
                        <a
                          href="login.html"
                          class="account-btn"
                          target="_blank"
                        >
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
      <main>
        <div class="slider-area">
          <div class="slider-active">
            <div
              class="
              single-slider
              hero-overly2
              slider-height2
              d-flex
              align-items-center
              slider-bg2
            "
            >
              <div class="container">
                <div class="row">
                  <div class="col-xl-6 col-lg-8 col-md-8">
                    <div class="hero__caption hero__caption2">
                      <h1 data-animation="fadeInUp" data-delay=".4s">
                        Products
                      </h1>
                      <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                          <li class="breadcrumb-item">
                            <a href="index.html">Home</a>
                          </li>
                          <li class="breadcrumb-item">
                            <a href="#">Products</a>
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="properties new-arrival fix">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-7 col-lg-8 col-md-10">
                <div
                  class="section-tittle mb-60 text-center wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                >
                  <h2>Popular products</h2>
                  <p>
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-12">
                <div class="properties__button text-center">
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        class="nav-item nav-link active"
                        id="nav-Sofa-tab"
                        data-toggle="tab"
                        href="#nav-Sofa"
                        role="tab"
                        aria-controls="nav-Sofa"
                        aria-selected="true"
                      >
                        Sofa
                      </a>
                      <a
                        class="nav-item nav-link"
                        id="nav-Table-tab"
                        data-toggle="tab"
                        href="#nav-Table"
                        role="tab"
                        aria-controls="nav-Table"
                        aria-selected="false"
                      >
                        Table
                      </a>
                      <a
                        class="nav-item nav-link"
                        id="nav-Chair-tab"
                        data-toggle="tab"
                        href="#nav-Chair"
                        role="tab"
                        aria-controls="nav-Chair"
                        aria-selected="false"
                      >
                        Chair
                      </a>

                      <a
                        class="nav-item nav-link"
                        id="nav-Bed-tab"
                        data-toggle="tab"
                        href="#nav-Bed"
                        role="tab"
                        aria-controls="nav-Bed"
                        aria-selected="false"
                      >
                        Bed
                      </a>
                      <a
                        class="nav-item nav-link"
                        id="nav-Lightning-tab"
                        data-toggle="tab"
                        href="#nav-Lightning"
                        role="tab"
                        aria-controls="nav-Lightning"
                        aria-selected="false"
                      >
                        Lightning
                      </a>
                      <a
                        class="nav-item nav-link"
                        id="nav-Decore-tab"
                        data-toggle="tab"
                        href="#nav-Decore"
                        role="tab"
                        aria-controls="nav-Decore"
                        aria-selected="false"
                      >
                        Decore
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-Sofa"
                  role="tabpanel"
                  aria-labelledby="nav-Sofa-tab"
                >
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular1.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular2.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular3.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular4.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular5.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular6.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular7.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular8.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular9.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-Table"
                  role="tabpanel"
                  aria-labelledby="nav-Table-tab"
                >
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular1.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular2.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular3.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular4.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular5.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular6.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular7.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular8.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular9.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-Chair"
                  role="tabpanel"
                  aria-labelledby="nav-Chair-tab"
                >
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular1.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular2.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular3.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular4.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular5.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular6.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular7.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular8.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular9.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-Bed"
                  role="tabpanel"
                  aria-labelledby="nav-Bed-tab"
                >
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular1.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular2.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular3.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular4.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular5.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular6.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular7.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular8.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular9.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-Lightning"
                  role="tabpanel"
                  aria-labelledby="nav-Lightning-tab"
                >
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular1.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular2.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular3.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular4.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular5.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular6.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular7.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular8.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular9.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-Decore"
                  role="tabpanel"
                  aria-labelledby="nav-Decore-tab"
                >
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular1.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular2.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular3.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular4.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular5.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular6.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular7.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular8.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                          <img src="assets/img/gallery/popular9.png" alt="" />
                        </div>
                        <div class="popular-caption">
                          <h3>
                            <a href="product_details.html">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </a>
                          </h3>
                          <span>$367</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="room-btn">
                <a href="product.html" class="border-btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </section>
        <div class="categories-area section-padding40 gray-bg">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div
                  class="single-cat mb-50 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                >
                  <div class="cat-icon">
                    <img src="assets/img/icon/services1.svg" alt="" />
                  </div>
                  <div class="cat-cap">
                    <h5>Fast & Free Delivery</h5>
                    <p>Free delivery on all orders</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div
                  class="single-cat mb-50 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                >
                  <div class="cat-icon">
                    <img src="assets/img/icon/services2.svg" alt="" />
                  </div>
                  <div class="cat-cap">
                    <h5>Secure Payment</h5>
                    <p>Free delivery on all orders</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div
                  class="single-cat mb-50 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".4s"
                >
                  <div class="cat-icon">
                    <img src="assets/img/icon/services3.svg" alt="" />
                  </div>
                  <div class="cat-cap">
                    <h5>Money Back Guarantee</h5>
                    <p>Free delivery on all orders</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div
                  class="single-cat mb-50 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".5s"
                >
                  <div class="cat-icon">
                    <img src="assets/img/icon/services4.svg" alt="" />
                  </div>
                  <div class="cat-cap">
                    <h5>Online Support</h5>
                    <p>Free delivery on all orders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div class="footer-wrapper">
          <div class="footer-area footer-padding">
            <div class="container">
              <div class="row justify-content-between">
                <div class="col-xl-4 col-lg-3 col-md-8 col-sm-8">
                  <div class="single-footer-caption mb-50">
                    <div class="single-footer-caption mb-30">
                      <div class="footer-logo mb-35">
                        <a href="index.html">
                          <img src="assets/img/logo/logo2_footer.png" alt="" />
                        </a>
                      </div>
                      <div class="footer-tittle">
                        <div class="footer-pera">
                          <p>
                            Suspendisse varius enim in eros elementum tristique.
                            Duis cursus, mi quis viverra ornare, eros dolor
                            interdum nulla.
                          </p>
                        </div>
                      </div>
                      <div class="footer-social">
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://bit.ly/sai4ull">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-pinterest-p"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                  <div class="single-footer-caption mb-50">
                    <div class="footer-tittle">
                      <h4>Quick links</h4>
                      <ul>
                        <li>
                          <a href="#">Image Licensin</a>
                        </li>
                        <li>
                          <a href="#">Style Guide</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                  <div class="single-footer-caption mb-50">
                    <div class="footer-tittle">
                      <h4>Shop Category</h4>
                      <ul>
                        <li>
                          <a href="#">Image Licensin</a>
                        </li>
                        <li>
                          <a href="#">Style Guide</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                  <div class="single-footer-caption mb-50">
                    <div class="footer-tittle">
                      <h4>Pertners</h4>
                      <ul>
                        <li>
                          <a href="#">Image Licensin</a>
                        </li>
                        <li>
                          <a href="#">Style Guide</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom-area">
            <div class="container">
              <div class="footer-border">
                <div class="row d-flex align-items-center">
                  <div class="col-xl-12">
                    <div class="footer-copy-right text-center">
                      <p>
                        Copyright &copy;
                        <script>
                          document.write(new Date().getFullYear());
                        </script>
                        All rights reserved | This template is made with
                        <i class="fa fa-heart" aria-hidden="true"></i> by
                        <a href="https://colorlib.com" target="_blank">
                          Colorlib
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="back-top">
        <a title="Go to Top" href="#">
          {" "}
          <i class="fas fa-level-up-alt"></i>
        </a>
      </div>
    </div>
  );
}

export default Login;
