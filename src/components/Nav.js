import React, { useEffect, useState } from "react";
import netflixLogo from "../images/netflixLogo.png";
import avatar from "../images/netflix-avatar.png";
import "../css/Nav.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

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
        {user ? (
          <img
            src={avatar}
            alt="account"
            className="nav__avatar"
            onClick={() => navigate("/profile")}
          />
        ) : (
          <button className="nav__button">Sign In</button>
        )}
      </div>
    </div>
  );
}

export default Nav;
