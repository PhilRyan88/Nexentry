import React from "react";
import "./contents.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="privacy-policy">
          <h3>Privacy and Policy</h3>
          <p>
            At Nexentry, we are committed to protecting your privacy and
            ensuring that your personal information is handled safely and
            securely. We collect only the necessary data required to process
            your data entry tasks and improve our services. Any information
            shared with us will not be sold, rented, or shared with third
            parties without your explicit consent, unless required by law.
          </p>
        </div>
        <div className="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li>Home</li>
            <li>Benefits</li>
            <li>About</li>
            <li>Work Details</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Resources</li>
            <li>Earning Disclaimer</li>
            <li>Membership & Refund Policy</li>
            <li>Terms & Conditions</li>
            <li>Shipping & Delivery Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>services@nexentry.in</p>
          <p>www.nexentry.in</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2020 www.nexentry.in</p>
      </div>
    </footer>
  );
};

export default Footer;
