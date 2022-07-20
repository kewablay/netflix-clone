import React from "react";

function LoginBtn({ handleSubmit, text }) {
  return (
    <button type="submit" onClick={handleSubmit}>
      {text}
    </button>
  );
}

export default LoginBtn;
