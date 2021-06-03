import React from "react";
import Footer from "../../components/Footer";
import { useEffect } from "react";

function AboutUs() {
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
                        About
                      </h1>
                      <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                          <li class="breadcrumb-item">
                            <a href="/#">Home</a>
                          </li>
                          <li class="breadcrumb-item">
                            <a href="/#">About</a>
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
        <div class="about-area section-padding40">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="section-tittle mb-60 text-center pt-10">
                  <h2>Motivation</h2>
                  <p class="pera">
                    We built this project because Marcus forced us.
                  </p>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="section-tittle mb-60 text-center pt-10">
                  <h2>Tech Stack</h2>
                  <p class="pera">
                    <i class="fab fa-html5 mr-5 "></i>
                    <i class="fab fa-css3-alt mr-5"></i>
                    <i class="fab fa-react mr-5 "></i>
                    <i class="fab fa-node-js mr-5"></i>
                    <i class="fas fa-database  mr-5"></i>
                  </p>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="section-tittle text-center pt-10">
                  <h2>Team</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="instagram-area pb-padding translate-x">
          <div class="container-fluid">
            <div class="row align-items-center justify-content-center">
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="instra-tittle mb-40">
                  <div class="section-tittle">
                    <h2>Marcos Sierra</h2>
                    <p class="mb-35">
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>
                    <a
                      href="https://www.linkedin.com/in/masnc7/"
                      class="border-btn"
                    >
                      Hire me!
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-9 col-lg-8">
                <div class="row no-gutters">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <img src="assets/img/marcos.jpeg" alt="" class="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="instagram-area pb-padding translate-x">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="instra-tittle mb-40">
                  <div class="section-tittle">
                    <h2>Kevin Mullin</h2>
                    <p class="mb-35">
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>
                    <a
                      href="https://www.linkedin.com/in/kevin-mullin-ferres/"
                      class="border-btn"
                    >
                      Hire me!
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-9 col-lg-8">
                <div class="row no-gutters">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <img
                      src="assets/img/kevin.jpeg"
                      alt=""
                      class="w-100 img-fluid"
                      style={{ height: "457px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="instagram-area pb-padding translate-x">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="instra-tittle mb-40">
                  <div class="section-tittle">
                    <h2>Martín Vlasanovich</h2>
                    <p class="mb-35">
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>
                    <a
                      href="https://www.linkedin.com/in/martinvlasanovich/"
                      class="border-btn"
                    >
                      Hire me!
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-9 col-lg-8">
                <div class="row no-gutters">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <img
                      src="assets/img/martin.jpeg"
                      alt=""
                      class="w-100 img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="instagram-area pb-padding translate-x">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="instra-tittle mb-40">
                  <div class="section-tittle">
                    <h2>Nicolás Curbelo</h2>
                    <p class="mb-35">
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>
                    <a
                      href="https://www.linkedin.com/in/nicolascurbelo/"
                      class="border-btn"
                    >
                      Hire me!
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-9 col-lg-8">
                <div class="row no-gutters">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <img
                      src="assets/img/nicolas.jpg"
                      alt=""
                      class="w-100 img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <div id="back-top">
        <a href="/#">
          <i class="fas fa-level-up-alt"></i>
        </a>
      </div>
    </div>
  );
}

export default AboutUs;
