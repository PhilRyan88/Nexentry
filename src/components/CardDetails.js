import React, { useState } from "react";
import "./contents.css";

const ContactDetails = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="new-section-5">
      <h2 className="contact-heading">Contact Details</h2>
      <div className={`contact-card ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">
          <p>
            Don't hesitate to send your questions through the contact form or
            mail to us
          </p>
          <button className="flip-button" onClick={handleFlip}>
            Flip
          </button>
        </div>
        <div className="card-back">
          <p>services@nexentry.in</p>
          <button className="flip-button" onClick={handleFlip}>
            Flip Back
          </button>
        </div>
      </div>
      <div className="" style={{ position: "relative", right: "45px" }}>
        <span style={{ position: "relative", top: "0", left: "70px" }}>
          Follow us on{" "}
        </span>{" "}
        <a href="https://www.instagram.com/malayali.work_from_home/profilecard/">
          <img
            style={{
              height: "40px",
              marginTop: "10px",
              position: "relative",
              top: "50px",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
