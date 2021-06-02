import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

function BillingDetails() {
  const [orders, setOrders] = useState([]);
  console.log(orders);
  const token = useSelector((state) => state.token);

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
    <div class="container pt-5 billing_details">
      <div class="row billing_css">
        <div class="col-md-8 ">
          <h3>Billing Details</h3>
          <form
            class="row contact_form"
            action="#"
            method="post"
            novalidate="novalidate"
          >
            <div class="col-md-6 form-group p_star">
              <input
                type="text"
                class="form-control"
                placeholder="First name*"
                id="first"
                name="name"
              />
              {/* <span class="placeholder" data-placeholder="First name"></span> */}
            </div>
            <div class="col-md-6 form-group p_star">
              <input
                type="text"
                class="form-control"
                placeholder="Last name*"
                id="last"
                name="name"
              />
              {/* <span class="placeholder" data-placeholder="Last name"></span> */}
            </div>
            <div class="col-md-12 form-group">
              <input
                type="text"
                class="form-control"
                id="company"
                name="company"
                placeholder="Company name"
              />
            </div>
            <div class="col-md-6 form-group p_star">
              <input
                type="text"
                class="form-control"
                id="number"
                name="number"
                placeholder="Phone number"
              />
              {/* <span class="placeholder" data-placeholder="Phone number"></span> */}
            </div>
            <div class="col-md-6 form-group p_star">
              <input
                type="text"
                class="form-control"
                id="email"
                name="compemailany"
                placeholder="Email Address"
              />
              {/* <span class="placeholder" data-placeholder="Email Address"></span> */}
            </div>
            <div class="col-md-12 form-group p_star">
              <select class="country_select">
                <option value="1">Country</option>
                <option value="2">Country</option>
                <option value="4">Country</option>
              </select>
            </div>
            <div class="col-md-12 form-group p_star">
              <input
                type="text"
                class="form-control"
                id="add1"
                name="add1"
                placeholder="Address line 01"
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
            <div class="col-md-12 form-group p_star">
              <select class="country_select">
                <option value="1">District</option>
                <option value="2">District</option>
                <option value="4">District</option>
              </select>
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
            <button type="submit" class="button button-contactForm boxed-btn">
              Submit Changes
            </button>
            <div class="col-md-12 form-group">
              <div class="checkout-cap">
                <input type="checkbox" id="fruit1" name="keep-log" />
                <label for="fruit1">Create an account?</label>
              </div>
            </div>
            <div class="col-md-12 form-group">
              <div class="creat_account">
                <h3>Shipping Details</h3>
                <div class="checkout-cap">
                  <input type="checkbox" id="f-option3" name="selector" />
                  <label for="f-option3">Ship to a different address?</label>
                </div>
              </div>

              <textarea
                class="form-control"
                name="message"
                id="message"
                rows="1"
                placeholder="Order Notes"
              ></textarea>
            </div>
          </form>
        </div>

        <div className="col-md-4">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Name</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            {orders.map((order) => {
              let total = 0;
              order.products.forEach((item) => {
                total =
                  total +
                  item.ordersProduct.price * item.ordersProduct.quantity;
              });

              return (
                <tr>
                  <Link to="/orderDetail">
                    <td>
                      <div class="media">
                        <div class="media-body">
                          <p>{order.createdAt}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>{order.products[0].name}</h5>
                    </td>
                    <td></td>
                    <td>
                      <h5>${total}</h5>
                    </td>
                  </Link>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default BillingDetails;
