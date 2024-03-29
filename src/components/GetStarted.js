import React from "react";

function GetStarted({ handleSubmit }) {
  return (
    <>
      <div className="getStarted">
        <h2>Unlimited Movies, TV shows and more.</h2>
        <p>Watch anywhere. Cancel anytime.</p>
        <small>
          Ready to watch? Enter your email to create ro restart your membership
        </small>
        <form className="getStarted__form">
          <input
            id="getStarted"
            type="email"
            placeholder="Enter your email.."
          />
          <button id="getStartedBtn" type="submit" onClick={handleSubmit}>
            Get Started
          </button>
        </form>
      </div>
    </>
  );
}

export default GetStarted;
