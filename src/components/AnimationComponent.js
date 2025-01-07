import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AnimationComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="large-header">
      <canvas id="demo-canvas" />
      <h1 className="main-title"></h1>
      <p className="main-titlep">
        Turn your typing skills into cash with simple data entry jobs from home!
      </p>
      <button
        className="main-titleb"
        onClick={() => navigate("/email")} // This will navigate to the Email component
      >
        Register Now
      </button>
    </div>
  );
};

export default AnimationComponent;
