import React, { useRef, useState } from "react";
import "./contents.css";
import FAQChatbot from "./FAQChatbot";
import ContactDetails from "./CardDetails";
import Table from "./Table";
import AnimatedCanvas from "./styling/style";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const footerRef = useRef(null);
  const workDetailsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <header>
        <nav>
          <span>
            <img src="./images/erased.png" style={{ height: "60px" }} />
          </span>
          <p className="company-title">Nexentry</p>
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className={`navbar ${isMenuOpen ? "open" : ""}`}>
            <li
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection(firstSectionRef);
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection(secondSectionRef);
              }}
            >
              Benefits
            </li>
            <li
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection(footerRef);
              }}
            >
              About
            </li>
            <li
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection(workDetailsRef);
              }}
            >
              Work Details
            </li>
            <li
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection(contactRef);
              }}
            >
              Contact
            </li>
          </ul>
        </nav>
      </header>
      <AnimatedCanvas />
      <div className="content-container">
        {/* Section 1: Home */}
        <section ref={firstSectionRef}>
          <h1 className="first">Earn Rs 250 per page</h1>
          <hr />
          <p className="content-para">
            Earn ₹250 for Each Page of Data Entry Completed. With consistent and
            high-quality work, users can earn between ₹10,000 and ₹25,000
            monthly. Your earnings are based on the volume and accuracy of your
            work, providing a reliable way to generate income from home.
          </p>
        </section>

        {/* Section 2: Benefits */}
        <section ref={secondSectionRef}>
          <h1 className="second">Job Benefits</h1>
          <p className="secondp">
            Work from pc, laptop, tab, smartphone from anywhere you want.
          </p>
          <div className="grid-container">
            {" "}
            <div className="grid">
              <img src="https://cdn.iconscout.com/icon/free/png-256/free-bank-icon-download-in-svg-png-gif-file-formats--building-savings-construction-debit-banking-pack-business-icons-1522770.png?f=webp" />
              <h3>Settlement in 24 hrs</h3>
              <p>
                Withdraw your payment in a single click. Your payment will be
                settled to you within 24 hrs without any delay.
              </p>
            </div>
            <div className="grid">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/upi-icon.png" />
              <h3>Payment Mode</h3>
              <p>
                We have payment withdrawal modes like UPI, bank transfer, and
                also via wallet. Choose any option you want.
              </p>
            </div>
            <div className="grid">
              <img src="https://cdn-icons-png.flaticon.com/512/399/399552.png" />
              <h3>Security System</h3>
              <p>
                Our software is secured by SSL. Your data stored on our site is
                safe and secure.
              </p>
            </div>
            <div className="grid">
              <img src="https://www.svgrepo.com/show/93695/technical-support.svg" />
              <h3>Dedicated Support</h3>
              <p>
                Create a support ticket from your account. Our dedicated support
                team will resolve your query on time.
              </p>
            </div>
            <div className="grid">
              <img src="https://icons.veryicon.com/png/o/miscellaneous/szj/working-hours-2.png" />
              <h3>Working Time</h3>
              <p>
                No particular working time or schedule. Login anytime and work
                whenever you want; it is 24x7.
              </p>
            </div>
            <div className="grid">
              <img src="https://www.svgrepo.com/show/530162/credit-report.svg" />
              <h3>Work Credit</h3>
              <p>
                After you finish each project, your account will be credited
                with real money.
              </p>
            </div>
          </div>
        </section>

        <div className="new-section">
          <div className="text-container">
            <h1>We Can Make Your Dreams Come True</h1>
            <p>
              Earn from the comfort of your home with data entry work at
              Nexentry. These tasks involve processing images containing
              distorted text that must be typed accurately according to the
              company-provided format.
            </p>
            <p>
              Nexentry is your first step into online work. While earnings may
              not be huge initially, it offers both full-time and part-time
              opportunities, allowing you to earn additional income from the
              comfort of your home in your free time.
            </p>
            <p className="bold-text">+7500 Total Users</p>
          </div>
          <div className="image-container">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/successful-businessman-illustration-download-in-svg-png-gif-file-formats--wealth-rich-banknote-life-style-pack-entertainment-illustrations-9554219.png?f=webp"
              alt="Cloud"
            />
          </div>
        </div>
        <div className="new-section-2">
          <div className="text-container">
            <h1>Earn Rs 250 per page</h1>
            <div className="content">
              <div className="content-item">
                <img
                  className="content-icon"
                  src="	https://cdn.jsdelivr.net/gh/version85/home/home/images/icon-1.png" // Replace with actual image path
                  alt="Limitations icon"
                />
                <div className="content-text">
                  <h2>Limitations</h2>
                  <p>
                    There is no limitations or restrictions and also there is no
                    negative deduction.
                  </p>
                </div>
              </div>
              <div className="content-item">
                <img
                  className="content-icon"
                  src="	https://cdn.jsdelivr.net/gh/version85/home/home/images/icon-2.png" // Replace with actual image path
                  alt="Adding More Value icon"
                />
                <div className="content-text">
                  <h2>Adding More Value</h2>
                  <p>
                    You can work in your free time. Working 2 to 4 hrs daily
                    will make you earn a decent amount of money.
                  </p>
                </div>
              </div>
              <div className="content-item">
                <img
                  className="content-icon"
                  src="https://cdn.jsdelivr.net/gh/version85/home/home/images/icon-3.png" // Replace with actual image path
                  alt="Fulfill your dreams icon"
                />
                <div className="content-text">
                  <h2>Fulfill your dreams</h2>
                  <p>
                    You can work full time or part time, this depends upon you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="image-container">
            <img
              src="https://icons.veryicon.com/png/o/business/oa-office-system-icon/computer-application.png" // Replace with the image path you uploaded
              alt="illustration"
              className="section-image"
            />
          </div> */}
          <div className="slideshow-container">
            <div className="slideshow">
              <img src="./images/1.jpeg" alt="Slide 1" />
              <img src="./images/2.jpeg" alt="Slide 2" />
              <img src="./images/3.jpeg" alt="Slide 3" />
              <img src="./images/4.jpeg" alt="Slide 4" />
              <img src="./images/5.jpeg" alt="Slide 5" />
            </div>
          </div>
        </div>

        {/* Section 3: About */}
        <section ref={footerRef} className="new-section-3">
          <div className="box-container">
            <h1>+ 7500 users registered so far</h1>
            <p>
              Data Entry job is running successfully and We are well recognized,
              Honest, Authentic, Opportunity providing and paying company.
            </p>
          </div>
        </section>

        {/* Section 4: Work Details */}
        <section ref={workDetailsRef} className="new-section-4">
          <div className="heading-container">
            <h1>Work Details</h1>
            <hr className="underline" />
            <p>
              At Nexentry, we offer customized plans tailored to your working
              shifts and availability, ensuring flexibility to suit your
              schedule and lifestyle.
            </p>
          </div>
          <Table />
        </section>

        {/* Section 5: Contact */}
        <section ref={contactRef} className="section-5">
          <div className="register-box">
            <h2 className="register-heading">Register Now</h2>
            <p className="email-address">registration@nexentry.in</p>
          </div>
          <ContactDetails />
          <FAQChatbot />
        </section>
      </div>
    </div>
  );
};

export default Navbar;
