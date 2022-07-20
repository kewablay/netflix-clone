import React, { useRef, useState } from "react";
import Nav from "../components/Nav";
import LoginForm from "../components/LoginForm";
import "../css/LoginScreen.css";
import netflixBanner from "../images/netflix-brand-banner.jpeg";
import GetStarted from "../components/GetStarted";
import RegisterForm from "../components/RegisterForm";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState(null);
  const [showRegister, setShowregister] = useState(false);
  console.log(signIn);
  const emailReference = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignIn(true);
    setEmail(emailReference.current.value);
  };

  const handleShowRegister = () => {
    setShowregister(true);
  };
  const handleShowSignIn = () => {
    setShowregister(false);
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
        <div className="loginScreen__mainContent">
          {signIn ? (
            showRegister ? (
              <RegisterForm email={email} handleShowSignIn={handleShowSignIn} />
            ) : (
              <LoginForm
                email={email}
                handleShowRegister={handleShowRegister}
              />
            )
          ) : (
            <GetStarted handleSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
