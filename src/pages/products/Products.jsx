import React from "react";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Products({ searchField }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([{}]);
  const [categoriesId, setCategoriesId] = useState(0);

  const filteredProducts = products.filter((item) => {
    return item.name.toLowerCase().includes(searchField.toLowerCase());
  });

  useEffect(() => {
    const URL = "http://localhost:3079/category";

    const categories = async () => {
      try {
        const response = await axios.get(URL);
        console.log(response.data.categories);
        setCategories(response.data.categories);
      } catch (err) {
        console.log(err);
      }
    };
    categories();
  }, []);

  useEffect(() => {
    const URL = "http://localhost:3079/products";
    const products = async () => {
      try {
        const response = await axios.get(URL);
        setProducts(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    products();
  }, []);

  const handleSomething = (id) => {
    let URL = "";
    if (id === 0) {
      URL = "http://localhost:3079/products";
    } else {
      URL = `http://localhost:3079/products/category/${id}`;
    }
    const getProducts = async () => {
      try {
        const response = await axios.get(URL);
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  };

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
                        href="/#"
                        role="tab"
                        aria-controls="nav-Sofa"
                        aria-selected="true"
                        onClick={() => handleSomething(0)}
                      >
                        All products
                      </a>
                      {categories.map((category) => {
                        return (
                          <a
                            class="nav-item nav-link"
                            id="nav-Sofa-tab"
                            data-toggle="tab"
                            href="/#"
                            role="tab"
                            aria-controls="nav-Sofa"
                            aria-selected="true"
                            onClick={() => handleSomething(category.id)}
                          >
                            {category.name}
                          </a>
                        );
                      })}{" "}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div class="row">
              {filteredProducts &&
                filteredProducts.map((item) => {
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
                            <Link to={"/product/" + item.slug}>
                              {item.name}
                            </Link>
                          </h3>
                          <span>${item.price}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
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
