import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ModalCheckOut from "../../components/ModalCheckOut";
import axios from "axios";

function Cart() {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const token = useSelector((state) => state.token);
  console.log("CART");
  console.log(cart);
  let total = 0;
  cart.forEach((item, index) => {
    total = total + item.price * item.quantity;
    //total += item.price;
  });

  const handleCheckOut = async (item) => {
    const URL = "http://localhost:3079/order";
    const axiosSettings = { headers: { Authorization: "Bearer " + token } };
    try {
      const response = await axios.post(URL, cart, axiosSettings);
      console.log(response);
      dispatch({
        type: "RESET_CART",
      });
    } catch (err) {
      console.log(err);
    }
    setModalShow(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ModalCheckOut modalShow={modalShow} setModalShow={setModalShow} />
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
                            <span
                              className="input-number-decrement minus-sign"
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE_ITEM_FROM_CART",
                                  payload: product,
                                })
                              }
                            >
                              <i className="ti-minus"></i>
                            </span>
                            <input
                              class="input-number"
                              type="text"
                              value={product.quantity}
                              min="0"
                              max="10"
                            />

                            <span
                              className="input-number-increment plus-sign"
                              onClick={() =>
                                dispatch({
                                  type: "CART_ADD_ITEM",
                                  payload: product,
                                })
                              }
                            >
                              <i class="ti-plus"></i>
                            </span>
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
                <div className="checkout_btn_inner mt-5">
                  <button onClick={handleCheckOut} class="btn checkout_btn">
                    Proceed to checkout
                  </button>
                </div>
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
