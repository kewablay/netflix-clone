import React, { useEffect, useState } from "react";
import netflixLogo from "../images/netflixLogo.png";
import avatar from "../images/netflix-avatar.png";
import "../css/Nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
    console.log(show);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav--black"}`}>
      <div className="nav__contents">
        <img src={netflixLogo} alt="NETFLIX" className="nav__logo" />
        {loggedIn ? (
          <img src={avatar} alt="account" className="nav__avatar" />
        ) : (
          <button className="nav__button">Sign In</button>
        )}
      </div>
    </div>
  );
}

export default Nav;
