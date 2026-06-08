import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Login() {
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
        "https://ecommerce-back-end-fv.vercel.app/token",
        { email, password }
      );
      dispatch({ type: "USER", payload: res.data.user });
      dispatch({ type: "TOKEN", payload: res.data.user });
      history.push("/");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-heading">
          <h2>Welcome Back</h2>
          <p>Sign in to access your account</p>
        </div>

        {error && (
          <p style={{ color: "var(--sale)", fontSize: "13px", marginBottom: "16px", textAlign: "center" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="login-email">Email Address</label>
            <input
              id="login-email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="auth-footer">
            <p>
              Don't have an account?{" "}
              <Link to="/register">Sign up here</Link>
            </p>
            <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "13px" }}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
