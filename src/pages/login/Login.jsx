import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const URL = "http://localhost:3079/token";

    try {
      const response = await axios.post(URL, {
        email,
        password,
      });

      dispatch({ type: "USER", payload: response.data.user });
      dispatch({ type: "TOKEN", payload: response.data.user });
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <main class="login-bg">
        <div class="login-form-area">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-7 col-lg-8">
                <form onSubmit={handleSubmit} class="login-form">
                  <div class="login-heading">
                    <span>Login</span>
                    <p>Enter Login details to get access</p>
                  </div>
                  <div class="input-box">
                    <div class="single-input-fields">
                      <label>Email Address</label>
                      <input
                        type="text"
                        placeholder="Email address"
                        onInput={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div class="single-input-fields">
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        onInput={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div class="single-input-fields login-check">
                      <input type="checkbox" id="fruit1" name="keep-log" />
                      <label for="fruit1">Keep me logged in</label>
                      <a href="/#" class="f-right">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div class="login-footer">
                    <p>
                      Don’t have an account?
                      <Link to="/register"> sign up </Link>
                      here
                    </p>
                    <button type="submit" class="submit-btn3">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
