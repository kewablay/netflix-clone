import React from "react";

function NetflixPlan({ title, vidQuality }) {
  return (
    <div className="netflixPlan">
      <div>
        <p>{title}</p>
        <small>{vidQuality}</small>
      </div>
      <button>Subscribe</button>
    </div>
  );
}

export default NetflixPlan;
