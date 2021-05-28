import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ModalCheckOut from "../../components/ModalCheckOut";
import { Modal, Button } from "react-bootstrap";

function Cart() {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  let total = 0;
  cart.forEach((item, index) => {
    total = total + item.price * item.quantity;
    //total += item.price;
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setModalShow(false)}
        show={modalShow}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
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
                  <button
                    onClick={() => setModalShow(true)}
                    class="btn checkout_btn"
                  >
                    Proceed to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalCheckOut props={modalShow} />
      <Footer />
    </div>
  );
}

export default Cart;
