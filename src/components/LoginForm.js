import React, { useRef } from "react";

function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("email:", email, "password:", password);
  };

  return (
    <>
      <form className="loginScreen__loginForm" onSubmit={handleSubmit}>
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
    </>
  );
}

export default LoginForm;
