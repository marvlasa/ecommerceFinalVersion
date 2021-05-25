import React from "react";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Products({ handleCartItems }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const URL = "http://localhost:3079/products";

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
    <div>
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
                            <a href="/#">Home</a>
                          </li>
                          <li class="breadcrumb-item">
                            <a href="/#">Products</a>
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
                  class="section-tittle mb-60 text-center wow"
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
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            {products.map((item) => {
              return (
                <div class="row">
                  <img src={item.image} />
                  <div className="heightCard">
                    <h5>{item.name}</h5>
                    {/* <p>{item.description.substring(0, 50)}</p> */}
                  </div>

                  <p>{item.price}</p>
                  <div class="row justify-content-center">
                    <div class="room-btn">
                      <Link to={"/product/" + item.slug}>
                        <button className="border-btn">Discover More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div class="tab-content" id="nav-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="nav-Sofa"
                        role="tabpanel"
                        aria-labelledby="nav-Sofa-tab"
                      ></div>

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
                                <img
                                  src="assets/img/gallery/popular1.png"
                                  alt=""
                                />
                              </div>
                              <div class="popular-caption">
                                <h3>
                                  <a href="/#">
                                    Bly Microfiber / Microsuede 56" Armless
                                    Loveseat
                                  </a>
                                </h3>
                                <span>$367</span>
                              </div>
                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-new-arrival mb-50 text-center">
                              <div class="popular-img">
                                <img
                                  src="assets/img/gallery/popular8.png"
                                  alt=""
                                />
                              </div>
                              <div class="popular-caption">
                                <h3>
                                  <a href="/#">
                                    Bly Microfiber / Microsuede 56" Armless
                                    Loveseat
                                  </a>
                                </h3>
                                <span>$367</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-new-arrival mb-50 text-center">
                              <div class="popular-img">
                                <img
                                  src="assets/img/gallery/popular9.png"
                                  alt=""
                                />
                              </div>
                              <div class="popular-caption">
                                <h3>
                                  <a href="/#">
                                    Bly Microfiber / Microsuede 56" Armless
                                    Loveseat
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
                                <img
                                  src="assets/img/gallery/popular7.png"
                                  alt=""
                                />
                              </div>
                              <div class="popular-caption">
                                <h3>
                                  <a href="/#">
                                    Bly Microfiber / Microsuede 56" Armless
                                    Loveseat
                                  </a>
                                </h3>
                                <span>$367</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-new-arrival mb-50 text-center">
                              <div class="popular-img">
                                <img
                                  src="assets/img/gallery/popular8.png"
                                  alt=""
                                />
                              </div>
                              <div class="popular-caption">
                                <h3>
                                  <a href="/#">
                                    Bly Microfiber / Microsuede 56" Armless
                                    Loveseat
                                  </a>
                                </h3>
                                <span>$367</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-new-arrival mb-50 text-center">
                              <div class="popular-img">
                                <img
                                  src="assets/img/gallery/popular9.png"
                                  alt=""
                                />
                              </div>
                              <div class="popular-caption">
                                <h3>
                                  <a href="/#">
                                    Bly Microfiber / Microsuede 56" Armless
                                    Loveseat
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
                                <img
                                  src="assets/img/gallery/popular3.png"
                                  alt=""
                                />
                              </div>
                              <div class="popular-caption">
                                <h3>
                                  <a href="/#">
                                    Bly Microfiber / Microsuede 56" Armless
                                    Loveseat
                                  </a>
                                </h3>
                                <span>$367</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-new-arrival mb-50 text-center">
                              <div class="popular-img">
                                <img
                                  src="assets/img/gallery/popular4.png"
                                  alt=""
                                />
                              </div>
                              <div class="popular-caption">
                                <h3>
                                  <a href="/#">
                                    Bly Microfiber / Microsuede 56" Armless
                                    Loveseat
                                  </a>
                                </h3>
                                <span>$367</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-new-arrival mb-50 text-center">
                              <div class="popular-img">
                                <img
                                  src="assets/img/gallery/popular5.png"
                                  alt=""
                                />
                              </div>
                              <div class="popular-caption">
                                <h3>
                                  <a href="/#">
                                    Bly Microfiber / Microsuede 56" Armless
                                    Loveseat
                                  </a>
                                </h3>
                                <span>$367</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
          </div>
        </section>
      </main>
      <Footer />
      <div id="back-top">
        <a title="Go to Top" href="/products#">
          {" "}
          <i class="fas fa-level-up-alt"></i>
        </a>
      </div>
    </div>
  );
}

export default Products;
