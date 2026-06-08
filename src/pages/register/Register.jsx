import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(
        "https://ecommerce-back-end-fv.vercel.app/client",
        { name, lastName, email, password }
      );
      dispatch({ type: "USER", payload: res.data.user });
      dispatch({ type: "TOKEN", payload: res.data.user });
      history.push("/");
    } catch (err) {
      setError("Registration failed. Please check your details and try again.");
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-heading">
          <h2>Create Account</h2>
          <p>Join Maison Bois for a premium experience</p>
        </div>

        {error && (
          <p style={{ color: "var(--sale)", fontSize: "13px", marginBottom: "16px", textAlign: "center" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div className="form-field">
              <label htmlFor="reg-name">First Name</label>
              <input
                id="reg-name"
                type="text"
                placeholder="First name"
                required
                onInput={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="reg-lastname">Last Name</label>
              <input
                id="reg-lastname"
                type="text"
                placeholder="Last name"
                required
                onInput={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="reg-email">Email Address</label>
            <input
              id="reg-email"
              type="email"
              placeholder="your@email.com"
              required
              onInput={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label htmlFor="reg-password">Password</label>
            <input
              id="reg-password"
              type="password"
              placeholder="Create a password"
              required
              onInput={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="auth-footer">
            <p>
              Already have an account?{" "}
              <Link to="/login">Sign in here</Link>
            </p>
            <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "13px" }}>
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
