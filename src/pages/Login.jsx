import React, { useState } from "react";
import "./Login.less";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default function Login({setLogin}) {
  const [isLogin, setIsLogin] = useState(true);

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
