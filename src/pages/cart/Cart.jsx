import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="container">
      <section class="cart_area section-padding40">
        <div class="container">
          <div class="cart_inner">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="media">
                        <div class="d-flex">
                          <img src="assets/img/gallery/card1.png" alt="" />
                        </div>
                        <div class="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                    <td>
                      <div class="product_count">
                        <span class="input-number-decrement">
                          <i class="ti-minus"></i>
                        </span>
                        <input
                          class="input-number"
                          type="text"
                          value="1"
                          min="0"
                          max="10"
                        />
                        <span class="input-number-increment">
                          <i class="ti-plus"></i>
                        </span>
                      </div>
                    </td>
                    <td>
                      <h5>$720.00</h5>
                    </td>
                  </tr>

                  <tr class="bottom_button">
                    <td>
                      <a class="btn" href="#">
                        Update Cart
                      </a>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <div class="cupon_text float-right">
                        <a class="btn" href="#">
                          Close Coupon
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <h5>Total</h5>
                    </td>
                    <td>
                      <h5>$2160.00</h5>
                    </td>
                  </tr>
                  <tr class="shipping_area"></tr>
                </tbody>
              </table>
              <div class="checkout_btn_inner float-right">
                <Link to="/products" className="btn">
                  Continue Shopping
                </Link>
                <a class="btn checkout_btn" href="#">
                  Proceed to checkout
                </a>
              </div>
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
    </div>
  );
}

export default Cart;
