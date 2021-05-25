import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function Cart({ cartItems }) {
  let total = 0;
  cartItems.forEach((item, index) => {
    total = total + item.price;
    //total += item.price;
  });
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
                  {cartItems.map((product) => {
                    return (
                      <tr>
                        <td>
                          <div class="media">
                            <div class="d-flex">
                              <img src={product.image} alt="" />
                            </div>
                            <div class="media-body">
                              <p>{product.name}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h5>${product.price}</h5>
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
                          <h5>${product.price}</h5>
                        </td>
                      </tr>
                    );
                  })}

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
                      <h5>${total}</h5>
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
      <Footer />
    </div>
  );
}

export default Cart;
