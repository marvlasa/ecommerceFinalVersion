import React from "react";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home({ handleCartItems, searchField }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const URL = "http://localhost:3079/products/highlight";

    const products = async () => {
      try {
        const response = await axios.get(URL);
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    products();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class="full-wrapper">
      <div class="slider-area">
        <div class="slider-active">
          <div
            class="
                single-slider
                hero-overly1
                slider-height
                d-flex
                align-items-center
                slider-bg1
              "
          >
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-8 col-md-8">
                  <div class="hero__caption">
                    <span>70% Sale off </span>
                    <h1 data-animation="fadeInUp" data-delay=".4s">
                      Furniture at Cost
                    </h1>
                    <p data-animation="fadeInUp" data-delay=".6s">
                      Fill your home with furniture that brings you comfort as
                      soon as you walk in the door. From cozy sectionals that
                      work well for big get-togethers to beds that invite you
                      for a good night’s sleep after a long day, when you want
                      to add modern, contemporary flair to your living space,
                      west elm has a wealth of items to enliven your space.
                    </p>
                    <div
                      class="hero__btn"
                      data-animation="fadeInUp"
                      data-delay=".7s"
                    >
                      <Link to="/products" class="btn hero-btn">
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="properties new-arrival fix">
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
                  Are you designing a space from scratch or adding the finishing
                  touches? Start here.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12">
              {/* <div class="properties__button text-center">
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
              </div> */}
            </div>
          </div>
          <div class="row">
            {/* <Products
              handleCartItems={handleCartItems}
              searchField={searchField}
            /> */}
            {/* <div class="tab-content" id="nav-tabContent">
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
                            <a href="/#">
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
                            <a href="/#">
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
                            <a href="/#">
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
                            <a href="/#">
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
                            <a href="/#">
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
                            <a href="/#">
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
                            <a href="/#">
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
                            <a href="/#">
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
                            <a href="/#">
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
                            <a href="/#">
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
                            <a href="/#">
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
                            <a href="/#">
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
                            <a href="/#">
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
                            <a href="/#">
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
                            <a href="/#">
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
                            <a href="/#">
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
                            <a href="/#">
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
                            <a href="/#">
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
            </div> */}
          </div>
        </div>
        <div class="visit-tailor-area fix">
          <div class="tailor-offers"></div>
          <div class="tailor-details">
            <h2>
              Best Furniture
              <br />
              manufacturer
            </h2>
            <p>
              If you want to know more about the coders who made this remarkable
              site. Click below!
            </p>

            <Link to="/about" class="btn">
              Discover More
            </Link>
          </div>
        </div>
        <div class="new-arrival new-arrival2">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-6 col-lg-8 col-md-10">
                <div
                  class="section-tittle mb-60 text-center wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay=".2s"
                >
                  <h2>Products you may like</h2>
                  <p>Select the wide range of products we offer</p>
                </div>
              </div>
            </div>
            <div class="row">
              {products.map((item) => {
                return (
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <div
                      class="single-new-arrival mb-50 text-center wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".1s"
                    >
                      <div class="popular-img">
                        <img
                          src={item.image}
                          className="img-fluid"
                          alt={item.name}
                        />
                      </div>
                      <div class="popular-caption">
                        <h3>
                          <Link to={"/product/" + item.slug}>{item.name}</Link>
                        </h3>
                        <span>${item.price}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div class="row justify-content-center">
              <div class="room-btn">
                <Link to="/products" class="border-btn">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div id="back-top">
        <a title="Go to Top" href="/#">
          {" "}
          <i class="fas fa-level-up-alt"></i>
        </a>
      </div>
    </div>
  );
}

export default Home;
