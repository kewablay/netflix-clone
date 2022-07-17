import React, { useRef, useState } from "react";
import Nav from "../components/Nav";
import "../css/LoginScreen.css";
import netflixBanner from "../images/netflix-brand-banner.jpeg";

function LoginScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("email: ", email, "password: ", password);
  };

  return (
    <div>
      <Nav />
      <div
        id="loginScreen"
        style={{
          background: `url(${netflixBanner}) center/cover no-repeat`,
        }}
      >
        <div className="backdrop"></div>
        <form onSubmit={handleSubmit}>
          <h2 style={{ color: "white" }}>Sign In</h2>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            ref={emailRef}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            ref={passwordRef}
          />
          <button type="submit">Sing In</button>

          <p className="loginScreen__registertxt">
            <span className="loginScreen__gray">Don't have an account? </span>
            <span className="loginScreen__link">register now</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
