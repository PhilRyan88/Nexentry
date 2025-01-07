import React, { useState } from "react";
import "./EmailModal.css";

const EmailModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = "Registration Form";
    const body = `Hello,\n\nI am interested in registering for the NexEntry application. You can reach me at my contact number: ${contactNumber}.\n\nMy name is: ${name}.`;

    window.location.href = `mailto:registration@nexentry.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Registration Form</h2>
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              name="contactNumber"
              placeholder="Your Contact Number"
              className="input-field"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
