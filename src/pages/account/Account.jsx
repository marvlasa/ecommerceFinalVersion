import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

function Account() {
  const [orders, setOrders] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(0);
  const [totalModal, setTotalModal] = useState(0);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(
        "https://ecommerce-back-end-fv.vercel.app/client",
        { name, lastName, email, phone, address },
        { headers: { Authorization: "Bearer " + token } }
      );
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          "https://ecommerce-back-end-fv.vercel.app/orders",
          { headers: { Authorization: "Bearer " + token } }
        );
        setOrders(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOrders();
  }, [token]);

  function openOrderModal(index, orderTotal) {
    setSelectedOrderId(index);
    setTotalModal(orderTotal);
    setLgShow(true);
  }

  return (
    <div>
      <PageBanner title="My Account" crumb="Account" />

      <section className="account-section">
        <div className="container">
          <div className="account-layout">
            {/* Billing Details form */}
            <div className="account-card">
              <h3>Billing Details</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder={user.name || "First name"}
                      onInput={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder={user.lastName || "Last name"}
                      onInput={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>Phone</label>
                    <input
                      type="text"
                      placeholder={user.phone || "Phone number"}
                      onInput={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder={user.email || "Email address"}
                      onInput={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>Country</label>
                  <select className="form-field">
                    <option value="UY">Uruguay</option>
                    <option value="US">United States</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder={user.address || "Street address"}
                    onInput={(e) => setAddress(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ marginTop: "8px" }}>
                  Save Changes
                </button>
              </form>
            </div>

            {/* Orders */}
            <div className="account-card">
              <h3>Order History</h3>
              {orders.length === 0 ? (
                <p style={{ color: "var(--muted)", fontSize: "14px" }}>
                  No orders yet.
                </p>
              ) : (
                <table className="orders-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Item</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => {
                      let orderTotal = 0;
                      order.products.forEach((item) => {
                        orderTotal +=
                          item.ordersProduct.price * item.ordersProduct.quantity;
                      });
                      return (
                        <tr
                          key={index}
                          style={{ cursor: "pointer" }}
                          onClick={() => openOrderModal(index, orderTotal)}
                        >
                          <td>{order.createdAt.substring(0, 10)}</td>
                          <td>{order.products[0].name}</td>
                          <td>
                            <span className="cart-price">${orderTotal}</span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Order detail modal */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="order-modal-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="order-modal-title">Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {orders.length > 0 && orders[selectedOrderId] && (
            <div className="cart-table-wrap">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orders[selectedOrderId].products.map((product, i) => (
                    <tr key={i}>
                      <td>
                        <div className="cart-product-cell">
                          {product.image && (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="cart-product-img"
                            />
                          )}
                          <span className="cart-product-name orderTitleModal">
                            {product.name}
                          </span>
                        </div>
                      </td>
                      <td>
                        <span className="cart-price">
                          ${product.ordersProduct.price}
                        </span>
                      </td>
                      <td>{product.ordersProduct.quantity}</td>
                      <td>
                        <span className="cart-price">
                          ${product.ordersProduct.price * product.ordersProduct.quantity}
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="2" />
                    <td style={{ fontWeight: 600, color: "var(--text)" }}>Total</td>
                    <td>
                      <span className="cart-price" style={{ fontSize: "17px" }}>
                        ${totalModal}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setLgShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </div>
  );
}

export default Account;
