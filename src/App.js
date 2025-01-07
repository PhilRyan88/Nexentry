import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const footerRef = useRef(null); // footer refernce

  return (
    <Router>
      <div className="container">
        <Navbar footerRef={footerRef} />
        <Routes>
          <Route path="/" element={<div />} />
        </Routes>
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
