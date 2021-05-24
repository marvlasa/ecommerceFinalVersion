import React from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();

  dispatch({ type: "CLEAR_USER_DATA" });
  dispatch({ type: "CLEAR_TOKEN" });

  return <Redirect to={{ pathname: "/login" }} />;
}

export default Login;
