import React from "react";
import Footer from "../../components/Footer";
import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
                  <p class="">
                    <i class="fab fa-html5 ml-5 mr-5 "></i>
                    <i class="fab fa-css3-alt mr-5"></i>
                    <i class="fab fa-react mr-5 "></i>
                    <i class="fab fa-node-js mr-5"></i>
                    <i class="fas fa-database "></i>
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

        <div class="container pb-5">
          <div class="pb-padding px-5 row justify-content-center">
            <div class="col-lg-5 col-md-7 col-6">
              <div class="section-tittle">
                <h2>Marcos Sierra</h2>
                <p class="mb-35">
                  In charge of the admin logic and also giving support to the
                  back-end with Routes. Also, supporting front-end team with
                  React.js and Redux technologies.
                </p>
                <a
                  href="https://www.linkedin.com/in/masnc7/"
                  class="border-btn"
                >
                  Hire me!
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 col-6">
              <img src="assets/img/marcos3.jpeg" alt="" class="w-100" />
            </div>
          </div>
        </div>

        <div class="container pb-5">
          <div class="pb-padding px-5 row justify-content-center">
            <div class="col-lg-5 col-md-7 col-6">
              <div class="section-tittle">
                <h2>Kevin Mullin</h2>
                <p class="mb-35">
                  Using his sixth sense, he was able to solve the most complex
                  problems we faced. Mainly, in charge of the back-end, but also
                  giving support to the front-end team.
                </p>
                <a
                  href="https://www.linkedin.com/in/kevin-mullin-ferres/"
                  class="border-btn"
                >
                  Hire me!
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 col-6">
              <img src="assets/img/kevin3.jpeg" alt="" class="w-100" />
            </div>
          </div>
        </div>

        <div class="container pb-5">
          <div class="pb-padding px-5 row justify-content-center">
            <div class="col-lg-5 col-md-7 col-6">
              <div class="section-tittle">
                <h2>Martín Vlasanovich</h2>
                <p class="mb-35">
                  Mainly developing the front-end interface using react.js and
                  redux technologies. Also, supporting the back-end team in the
                  creation of the MVC model.
                </p>
                <a
                  href="https://www.linkedin.com/in/martinvlasanovich/"
                  class="border-btn"
                >
                  Hire me!
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 col-6">
              <img src="assets/img/martin3.jpeg" alt="" class="w-100" />
            </div>
          </div>
        </div>

        <div class="container pb-5">
          <div class="pb-padding px-5 row justify-content-center">
            <div class="col-lg-5 col-md-7 col-6">
              <div class="section-tittle">
                <h2>Nicolás Curbelo</h2>
                <p class="mb-35">
                  In charge of the back-end logic. Also, giving support in
                  front-end activities with React.js and Redux technologies.
                </p>
                <a
                  href="https://www.linkedin.com/in/nicolascurbelo/"
                  class="border-btn"
                >
                  Hire me!
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 col-6">
              <img src="assets/img/nicolas3.jpg" alt="" class="w-100" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {/* <div id="back-top">
        <a title="Go to Top" href="/#">
          {" "}
          <i class="fas fa-level-up-alt"></i>
        </a>
      </div> */}
    </div>
  );
}

export default AboutUs;
