import React from "react";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Account() {
  /* useEffect(() => {
    window.scrollTo(0, 0);
  }, []); */
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  console.log(user);
  console.log(token);

  return (
    <div class="full-wrapper">
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
                        Account Information
                      </h1>
                      <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                          <li class="breadcrumb-item">
                            <a href="/#">Home</a>
                          </li>
                          <li class="breadcrumb-item">
                            <a href="/#">Account</a>
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
        <section class="contact-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-sm-8">
                <h2 class="contact-title">My information...</h2>
                <h3>Full name</h3>
                <h4>{`${user.name} ${user.lastName}`}</h4>
                <input
                  class="form-control valid mb-4"
                  name="name"
                  id="name"
                  type="text"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter new name'"
                  placeholder="Enter new name"
                />
                <h3>Email</h3>
                <h4>{user.email}</h4>
                <input
                  class="form-control valid mb-4"
                  name="name"
                  id="name"
                  type="text"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter new email'"
                  placeholder="Enter new email"
                />
                <h3>Address</h3>
                {user.address ? (
                  <h4>{user.address}</h4>
                ) : (
                  <h4>
                    No address in the sistem yet, do you want to add an address?
                  </h4>
                )}
                <input
                  class="form-control valid mb-4"
                  name="name"
                  id="name"
                  type="text"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter new address'"
                  placeholder="Enter new address"
                />
                <h3>Phone</h3>
                {user.phone ? (
                  <h4>{user.phone}</h4>
                ) : (
                  <h4>
                    No phone in the sistem yet, do you want to add a phone?
                  </h4>
                )}
                <input
                  class="form-control valid mb-5"
                  name="name"
                  id="name"
                  type="text"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter new phone'"
                  placeholder="Enter new phone"
                />
                <button
                  type="submit"
                  class="button button-contactForm boxed-btn"
                >
                  Submit Changes
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
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

export default Account;
