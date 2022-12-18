import React, { useState, useContext, useEffect } from "react";
import "./Login.less";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

import { User } from "../App";
import { useNavigate } from "react-router-dom";

export default function Login({ setLogin }) {
  const user = useContext(User);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (user) navigate("/Search");
  });

  return (
    <>
      {isLogin ? (
        <SignIn setIsLogin={setIsLogin} setLogin={setLogin} />
      ) : (
        <SignUp setIsLogin={setIsLogin} setLogin={setLogin} />
      )}
    </>
  );
}
