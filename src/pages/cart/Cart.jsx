import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";
import ModalCheckOut from "../../components/ModalCheckOut";

function Cart() {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const history = useHistory();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  async function handleCheckOut() {
    if (!user.name) {
      history.push("/login");
      return;
    }
    try {
      await axios.post(
        "https://ecommerce-back-end-fv.vercel.app/order",
        cart,
        { headers: { Authorization: "Bearer " + token } }
      );
      dispatch({ type: "RESET_CART" });
      setModalShow(true);
    } catch (err) {
      console.error(err);
    }
  }

  function addItem(product) {
    dispatch({ type: "CART_ADD_ITEM", payload: product });
  }

  function removeItem(product) {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: product });
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <ModalCheckOut modalShow={modalShow} setModalShow={setModalShow} />

      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1>Your Cart</h1>
            <nav className="breadcrumb-nav">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <span>Cart</span>
            </nav>
          </div>
        </div>
      </div>

      <section className="cart-section">
        <div className="container">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <h2>Your cart is empty</h2>
              <p style={{ marginBottom: "24px" }}>
                Add some beautiful pieces to get started.
              </p>
              <Link to="/products" className="btn-primary">
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="cart-layout">
              {/* Cart items table */}
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
                    {cart.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <div className="cart-product-cell">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="cart-product-img"
                            />
                            <span className="cart-product-name">
                              {product.name}
                            </span>
                          </div>
                        </td>
                        <td>
                          <span className="cart-price">${product.price}</span>
                        </td>
                        <td>
                          <div className="qty-stepper">
                            <button
                              className="qty-btn minus-sign"
                              onClick={() => removeItem(product)}
                            >
                              &minus;
                            </button>
                            <input
                              className="qty-value"
                              type="text"
                              value={product.quantity}
                              readOnly
                            />
                            <button
                              className="qty-btn plus-sign"
                              onClick={() => addItem(product)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>
                          <span className="cart-price">
                            ${product.price * product.quantity}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Summary sidebar */}
              <div className="cart-summary">
                <h3>Order Summary</h3>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${total}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span style={{ color: "var(--instock)" }}>Free</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span className="summary-total-value">${total}</span>
                </div>

                <div className="cart-summary-actions">
                  <button className="btn-primary" onClick={handleCheckOut}>
                    Proceed to Checkout
                  </button>
                  <Link to="/products" className="btn-outline">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Cart;
