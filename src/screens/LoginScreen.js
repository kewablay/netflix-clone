import React from "react";
import Nav from "../components/Nav";
import LoginForm from "../components/LoginForm";
import "../css/LoginScreen.css";
import netflixBanner from "../images/netflix-brand-banner.jpeg";
import GetStarted from "../components/GetStarted";

function LoginScreen() {
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
        <div className="loginScreen__mainContent">
          <GetStarted />
          {/* <LoginForm /> */}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
