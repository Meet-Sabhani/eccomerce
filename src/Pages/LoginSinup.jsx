import React from "react";
import './CSS/LoginSinup.css'

const LoginSinup = () => {
  return (
    <div className="loginsingup">
      <div className="loginsingup-container">
        <h1>Sing Up</h1>
        <div className="loginsingup-fields">
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="your email address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsingup-login">Already have an account? <span>Login Here</span></p>
        <div className="loginsingup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy police.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSinup;
