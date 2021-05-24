import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const URL = "http://localhost:3079/client";

    try {
      const response = await axios.post(URL, {
        name,
        lastName,
        email,
        password,
      });
      console.log(response.data.user);
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
        <div class="register-form-area">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-6 col-lg-8">
                <form onSubmit={handleSubmit} class="register-form text-center">
                  <div class="register-heading">
                    <span>Sign Up</span>
                    <p>Create your account to get full access</p>
                  </div>
                  <div class="input-box">
                    <div class="single-input-fields">
                      <label>First name</label>
                      <input
                        type="text"
                        placeholder="Enter full name"
                        required
                        onInput={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div class="single-input-fields">
                      <label>Last name</label>
                      <input
                        type="text"
                        placeholder="Enter full name"
                        required
                        onInput={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div class="single-input-fields">
                      <label>Email Address</label>
                      <input
                        type="email"
                        placeholder="Enter email address"
                        required
                        onInput={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div class="single-input-fields">
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        required
                        onInput={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {/* <div class="single-input-fields">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        required
                      />
                    </div> */}
                  </div>
                  <div class="register-footer">
                    <p>
                      Already have an account?
                      <Link to="/login"> Login </Link>
                      here
                    </p>
                    <button type="submit" class="submit-btn3">
                      Sign Up
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

export default Register;
