import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { fromRegister } from "../features/userSlice";
import { auth } from "../firebase";
import LoginBtn from "./LoginBtn";

function RegisterForm({ email, handleShowSignIn }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fromRegister());
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
        alert("Account registerd successfully");
        // go back to sigh in
        handleShowSignIn();
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <form className="loginScreen__loginForm">
        <h2 style={{ color: "white" }}>Register </h2>
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
        <LoginBtn handleSubmit={handleSubmit} text={"Register"} />

        <p className="loginScreen__registertxt">
          <span className="loginScreen__gray">Have an account already? </span>
          <span className="loginScreen__link" onClick={handleShowSignIn}>
            Sign in
          </span>
        </p>
      </form>
    </>
  );
}

export default RegisterForm;
