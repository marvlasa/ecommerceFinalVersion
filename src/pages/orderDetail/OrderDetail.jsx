import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function OrderDetail() {
  const cart = [];
  return (
    <div>
      <div>
        <section class="cart_area section-padding40">
          <div class="container">
            <div class="cart_inner">
              <div class="checkout_btn_inner float-right">
                <Link to="/account" className="btn">
                  Back to account
                </Link>
              </div>
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
                    {cart.map((product) => {
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
                              <input
                                class="input-number"
                                type="text"
                                value={product.quantity}
                                min="0"
                                max="10"
                              />
                            </div>
                          </td>
                          <td>
                            <h5>${product.price * product.quantity}</h5>
                          </td>
                        </tr>
                      );
                    })}

                    {/* <tr class="bottom_button">
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
                  </tr> */}
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                        <h5>Total</h5>
                      </td>
                      <td>
                        <h5>${1337}</h5>
                      </td>
                    </tr>
                    <tr class="shipping_area"></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default OrderDetail;
