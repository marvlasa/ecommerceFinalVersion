import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function Cart({ cartItems }) {
  return (
    <div>
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
                          {cartItems.length}
                        </span>
                      </div>
                    </td>
                    <td>
                      <h5>$720.00</h5>
                    </td>
                  </tr>

                  <tr class="bottom_button">
                    <td>
                      <a class="btn" href="/#">
                        Update Cart
                      </a>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <div class="cupon_text float-right">
                        <a class="btn" href="/#">
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
                <a class="btn checkout_btn" href="/#">
                  Proceed to checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Cart;
