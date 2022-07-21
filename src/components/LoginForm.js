import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fromRegister } from "../features/userSlice";
import { auth } from "../firebase";
import LoginBtn from "./LoginBtn";

function LoginForm({ email, handleShowRegister }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("email:", email, "password:", password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser);
        // set comming from register route to false
        dispatch(fromRegister(false));
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <form className="loginScreen__loginForm">
        <h2 style={{ color: "white" }}>Sign In</h2>
        <input
          type="email"
          defaultValue={email}
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
        <LoginBtn handleSubmit={handleSubmit} text={"Sign in"} />

        <p className="loginScreen__registertxt">
          <span className="loginScreen__gray">Don't have an account? </span>
          <span className="loginScreen__link" onClick={handleShowRegister}>
            register now
          </span>
        </p>
      </form>
    </>
  );
}

export default LoginForm;
