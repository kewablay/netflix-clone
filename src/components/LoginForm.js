import React, { useRef } from "react";
import { auth } from "../firebase";

function LoginForm({ email }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("email:", email, "password:", password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser);
        alert("Signed in successfull");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
        alert("Account registerd successfully");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <form className="loginScreen__loginForm" onSubmit={signIn}>
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
        <button type="submit" onClick={signIn}>
          Sing In
        </button>

        <p className="loginScreen__registertxt">
          <span className="loginScreen__gray">Don't have an account? </span>
          <span className="loginScreen__link" onClick={register}>
            register now
          </span>
        </p>
      </form>
    </>
  );
}

export default LoginForm;
