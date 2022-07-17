import React, { useRef, useState } from "react";
import Nav from "../components/Nav";
import LoginForm from "../components/LoginForm";
import "../css/LoginScreen.css";
import netflixBanner from "../images/netflix-brand-banner.jpeg";
import GetStarted from "../components/GetStarted";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState(null);
  console.log(signIn);
  const emailReference = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignIn(true);
    setEmail(emailReference.current.value);
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
            <LoginForm email={email} />
          ) : (
            <div className="getStarted">
              <h2>Unlimited Movies, TV shows and more.</h2>
              <p>Watch anywhere. Cancel anytime.</p>
              <small>
                Ready to watch? Enter your email to create ro restart your
                membership
              </small>
              <form className="getStarted__form">
                <input
                  type="email"
                  placeholder="Enter your email.."
                  ref={emailReference}
                />
                <button type="submit" onClick={handleSubmit}>
                  Get Started
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
