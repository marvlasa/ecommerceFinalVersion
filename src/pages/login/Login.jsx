import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <main class="login-bg">
        <div class="login-form-area">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-7 col-lg-8">
                <div class="login-form">
                  <div class="login-heading">
                    <span>Login</span>
                    <p>Enter Login details to get access</p>
                  </div>
                  <div class="input-box">
                    <div class="single-input-fields">
                      <label>Username or Email Address</label>
                      <input
                        type="text"
                        placeholder="Username / Email address"
                      />
                    </div>
                    <div class="single-input-fields">
                      <label>Password</label>
                      <input type="password" placeholder="Enter Password" />
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
                    <button class="submit-btn3">Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
