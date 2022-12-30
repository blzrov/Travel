import React, { useState, useEffect, useContext } from "react";
import "./Login.less";

import { useNavigate } from "react-router-dom";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

import { LoginContext } from "../App";

export default function Login({ setLogin }) {
  const loginContext = useContext(LoginContext);
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);

  useEffect(() => {
    if (loginContext) navigate("/Search");
  });

  return (
    <>
      {isSignIn ? (
        <SignIn setIsSignIn={setIsSignIn} setLogin={setLogin} />
      ) : (
        <SignUp setIsSignIn={setIsSignIn} setLogin={setLogin} />
      )}
    </>
  );
}
