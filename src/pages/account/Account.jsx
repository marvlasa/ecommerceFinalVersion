import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

function BillingDetails() {
  const [orders, setOrders] = useState([
    /* { products: [{ name: "", ordersProduct: { price: 0, quantity: 0 } }] }, */
  ]);
  const [lgShow, setLgShow] = useState(false);
  const [id, setId] = useState(0);
  const [totalModal, setTotalModal] = useState(0);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // const [password, setPassword] = useState("");

  console.log(orders);
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  console.log(user);
  console.log(token);

  // const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const URL = "http://localhost:3079/client";
    const axiosSettings = { headers: { Authorization: "Bearer " + token } };

    try {
      const response = await axios.post(
        URL,
        {
          name,
          lastName,
          email,
          phone,
          address,
        },
        axiosSettings
      );
      console.log(response);
      // dispatch({ type: "USER", payload: response.data.user });
      // dispatch({ type: "TOKEN", payload: response.data.user });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const URL = "http://localhost:3079/orders";
    const axiosSettings = { headers: { Authorization: "Bearer " + token } };
    const getOrders = async () => {
      try {
        const response = await axios.get(URL, axiosSettings);
        setOrders(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getOrders();
  }, []);

  return (
    <div>
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
      <div class="container pt-5 billing_details">
        <div class="row billing_css">
          <div class="col-md-7 shadow-box">
            <h3 className="BD-title">Billing Details</h3>
            <form
              class="row contact_form"
              action="#"
              method="post"
              novalidate="novalidate"
            >
              <div class="col-md-6 form-group p_star">
                <h4>{`${user.name} `}</h4>
                <input
                  type="text"
                  class="form-control"
                  placeholder={`${user.name} `}
                  id="first"
                  name="name"
                  onInput={(e) => setName(e.target.value)}
                />
                {/* <span class="placeholder" data-placeholder="First name"></span> */}
              </div>
              <div class="col-md-6 form-group p_star">
                <h4>{`${user.lastName}`}</h4>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name*"
                  id="last"
                  name="name"
                  onInput={(e) => setLastName(e.target.value)}
                />
                {/* <span class="placeholder" data-placeholder="Last name"></span> */}
              </div>

              <div class="col-md-6 form-group p_star">
                {user.phone ? (
                  <h4>{user.phone}</h4>
                ) : (
                  <h4>
                    No phone in the sistem yet, do you want to add a phone?
                  </h4>
                )}
                <input
                  type="text"
                  class="form-control"
                  id="number"
                  name="number"
                  placeholder="Phone number"
                  onInput={(e) => setPhone(e.target.value)}
                />
                {/* <span class="placeholder" data-placeholder="Phone number"></span> */}
              </div>
              <div class="col-md-6 form-group p_star">
                <h4>{user.email}</h4>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  name="compemailany"
                  placeholder="Email Address"
                  onInput={(e) => setEmail(e.target.value)}
                />
                {/* <span class="placeholder" data-placeholder="Email Address"></span> */}
              </div>

              <div class="col-md-12 form-group p_star">
                <select class="country_select">
                  <option value="1">Uruguay</option>
                </select>
              </div>
              <div class="col-md-12 form-group p_star">
                {user.address ? (
                  <h4>{user.address}</h4>
                ) : (
                  <h4>
                    No address in the sistem yet, do you want to add an address?
                  </h4>
                )}
                <input
                  type="text"
                  class="form-control"
                  id="add1"
                  name="add1"
                  placeholder="Address line 01"
                  onInput={(e) => setAddress(e.target.value)}
                />
                {/* <span
                class="placeolder"
                data-placeholder="Address line 01"
              ></span> */}
              </div>
              <div class="col-md-12 form-group p_star">
                <input
                  type="text"
                  class="form-control"
                  id="add2"
                  name="add2"
                  placeholder="Address line 02"
                />
                {/* <span
                class="placeholder"
                data-placeholder="Address line 02"
              ></span> */}
              </div>
              <div class="col-md-12 form-group p_star">
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  name="city"
                  placeholder="City"
                />
                {/* <span class="placeholder" data-placeholder="Town/City"></span> */}
              </div>

              <div class="col-md-12 form-group">
                <input
                  type="text"
                  class="form-control"
                  id="zip"
                  name="zip"
                  placeholder="Postcode/ZIP"
                />
              </div>
              <button
                type="submit"
                class="button button-contactForm boxed-btn justify-content-center btn-center"
              >
                Submit Changes
              </button>
            </form>
          </div>
          <div className="col-md-5">
            <table class="table shadow-box">
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Name</th>
                <th scope="col">Total</th>
              </tr>
              {orders.map((order, index) => {
                let total = 0;
                order.products.forEach((item) => {
                  total =
                    total +
                    item.ordersProduct.price * item.ordersProduct.quantity;
                });

                return (
                  <tr
                    onClick={() => {
                      setLgShow(true);
                      setId(index);
                      setTotalModal(total);
                    }}
                    id="tr"
                  >
                    <td>
                      <div class="media">
                        <div class="media-body">
                          <p>{order.createdAt.substring(10, 0)}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>{order.products[0].name}</h5>
                    </td>
                    <td>
                      <h5>${total}</h5>
                    </td>
                  </tr>
                );
              })}
              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg"></Modal.Title>{" "}
                  <p>{/* {order.createdAt} */}</p>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    {
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
                                    {!orders[0] ? (
                                      <div></div>
                                    ) : (
                                      orders[id].products.map((product) => {
                                        return (
                                          <tr>
                                            <td>
                                              <p class="orderTitleModal">
                                                {product.name}
                                              </p>
                                              <div class="media">
                                                <div class="d-flex">
                                                  <img
                                                    src={product.image}
                                                    alt=""
                                                  />
                                                </div>
                                                <div class="media-body"></div>
                                              </div>
                                            </td>
                                            <td>
                                              <h5>
                                                ${product.ordersProduct.price}
                                              </h5>
                                            </td>
                                            <td>
                                              <div class="product_count">
                                                <input
                                                  class="input-number"
                                                  type="text"
                                                  value={
                                                    product.ordersProduct
                                                      .quantity
                                                  }
                                                  min="0"
                                                  max="10"
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <h5>
                                                $
                                                {product.ordersProduct.price *
                                                  product.ordersProduct
                                                    .quantity}
                                              </h5>
                                            </td>
                                          </tr>
                                        );
                                      })
                                    )}
                                    <tr>
                                      <td></td>
                                      <td></td>
                                      <td>
                                        <h5>Total</h5>
                                      </td>
                                      <td>
                                        <h5>${totalModal}</h5>
                                      </td>
                                    </tr>
                                    <tr class="shipping_area"></tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    }
                  </div>
                </Modal.Body>
              </Modal>
            </table>
          </div>
        </div>
      </div>
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

export default BillingDetails;
