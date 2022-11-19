import React from "react";

import SignInForm from "../components/SignIn/SignIn_Form";

import "../styles/Login.css";

function SignIn() {
  return (
    <>
      <div className="login">
        <SignInForm />
      </div>
    </>
  );
}

export default SignIn;