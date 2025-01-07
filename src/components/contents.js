import React from "react";
import "./contents.css";
import FAQChatbot from "./FAQChatbot";
import ContactDetails from "./CardDetails";
import Table from "./Table";

const Contents = () => {
  return (
    <div className="content-container">
      <div className="grid-container"></div>

      {/* New Section */}

      <div className="new-section-3">
        <div className="box-container">
          <h1>+ 7500 users registered so far</h1>
          <p>
            Data Entry job is running successfully and We are well recognized,
            Honest, Authentic, Opportunity providing and paying company.
          </p>
        </div>
      </div>
      <div className="new-section-4">
        <div className="heading-container">
          <h1>Work Details</h1>
          <hr className="underline" />
          <p>
            At Nexentry, we offer customized plans tailored to your working
            shifts and availability, ensuring flexibility to suit your schedule
            and lifestyle.
          </p>
        </div>
        <Table />
      </div>
      <section className="section-5">
        <div className="register-box">
          <h2 className="register-heading">Register Now</h2>
          <p className="email-address">registration@nexentry.in</p>
        </div>
      </section>
      <ContactDetails />

      <FAQChatbot />
    </div>
  );
};

export default Contents;
