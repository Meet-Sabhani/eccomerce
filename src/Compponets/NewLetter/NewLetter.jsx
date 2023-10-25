import React from "react";
import "./newletter.css";

const NewLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder="youremail@gmail.com" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewLetter;
