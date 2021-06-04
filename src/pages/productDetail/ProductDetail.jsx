import React from "react";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { slug } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  let history = useHistory();

  if (user.name) {
    console.log("Está logeado");
  }

  const handleItem = (item) => {
    if (user.name) {
      dispatch({
        type: "CART_ADD_ITEM",
        payload: product,
      });
    } else {
      history.push("/login");
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`http://localhost:3079/product/${slug}`);
      console.log(response.data);
      setProduct(response.data);
    };
    getProduct();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                        Product details
                      </h1>
                      <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                          <li class="breadcrumb-item">
                            <a href="/#">Home</a>
                          </li>
                          <li class="breadcrumb-item">
                            <a href="/#">Product details</a>
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
        <div class="product_image_area section-padding40">
          <div class="container">
            <div class="row s_product_inner">
              <div class="col-lg-5">
                <div id="vertical">
                  <img
                    src={product.image}
                    class="w-100"
                    style={{ maxHeight: "520px" }}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-5 offset-lg-1">
                <div class="s_product_text">
                  <h3>{product.name}</h3>
                  <h2>${product.price}</h2>
                  <ul class="list">
                    <li>
                      <a href="/#" class="active">
                        <span>Category</span> :{" "}
                        {product.category && product.category.name}
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        {" "}
                        <span>Availibility</span> :{" "}
                        {product.stock > 0 ? "In Stock" : "No Stock"}
                      </a>
                    </li>
                  </ul>
                  <p>{product.description}</p>
                  <div class="card_area">
                    <div class="add_to_cart">
                      <button
                        // onClick={() => addItemToCart(product)}
                        onClick={() => {
                          handleItem(product);
                        }}
                        class="btn"
                      >
                        add to cart
                      </button>
                      <a href="/#" class="like_us">
                        {" "}
                        <i class="ti-heart"></i>{" "}
                      </a>
                    </div>
                    <div class="social_icon">
                      <a href="/#" class="fb">
                        <i class="ti-facebook"></i>
                      </a>
                      <a href="/#" class="tw">
                        <i class="ti-twitter-alt"></i>
                      </a>
                      <a href="/#" class="li">
                        <i class="ti-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default ProductDetail;
