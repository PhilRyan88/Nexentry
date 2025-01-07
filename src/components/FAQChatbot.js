import React, { useState, useEffect } from "react";
import "./FAQChatbot.css";

const FAQChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const questions = [
    {
      question: "Who can join/signup/register in this site ?",
      answer:
        "If you are residing in India and you are above 18 to 55 years in age you can register in this site.",
    },
    {
      question: "When and how i can start my work ?",
      answer:
        "You can Contact the Whatsapp support to Start your Work or Drop us a mail registration@nexentry.in",
    },
    {
      question: "I can register more than one account ?",
      answer: "Yes you can register more than 1 account.",
    },
    {
      question: "How i will get my earnings ?",
      answer:
        "Transfer of funds will be done through IMPS/NEFT/PAYTM/PHONEPE/GPAY/UPI. You can update any one method in your portal to receive your payment.",
    },
    {
      question: "What is the minimum withdraw amount ?",
      answer: "Minimum payout is based on the plan you choose.",
    },
    {
      question:
        "My earning is above minimum withdraw amount do I need to withdraw immediately ?",
      answer:
        "Not necessary once your reached the minimum withdrawal amount you can go for withdraw or you can still earn more and go for withdraw.",
    },
    {
      question: "What is the registration fee ?",
      answer:
        "There is no registration fees, a small service fee depends on the plan you choose.",
    },
    {
      question: "What about withdrawal Fee ?",
      answer:
        "Rs 5 /- will be deducted from your earnings as transaction service charge when your earnings is transferred to your account.",
    },
    {
      question: "Is Refund Available ?",
      answer: "Sorry! The service fee amount is non-refundable in any case.",
    },
    {
      question: "Is it possible to work from anywhere ?",
      answer:
        "Yes it is possible to work from anywhere with your laptop or smartphone.",
    },
    {
      question: "I can work from Smart Phone ?",
      answer: "Yes! You can work from your Smart Phone.",
    },
    {
      question:
        "What to do if I don't get the payment after earning minimum withdrawal ?",
      answer:
        "After you click the request button for withdrawal it will take maximum 24 to 78 hrs for us to deliver your payment to your bank account.",
    },
    {
      question: "Does training is provided ?",
      answer: "No, We will provide demo works to know the guidelines.",
    },
    {
      question: "I can work with multiple devices ?",
      answer:
        "Yes, you can work with multiple ip address but don't give your login details to others and don't do gang/group work. If found your account will be blocked permanently without any refund also you won't get your earned amount.",
    },
    {
      question: "How to increase my earning amount ?",
      answer:
        "For a skilled person typing a single text will take maximum 8 to 10 seconds. If you work for more than 4 to 6 hrs per day by submitting accurate data as per the given format we assure you can earn more.",
    },
    {
      question: "How much I can earn from this website?",
      answer:
        "Earning depends on how much and how good you are in work, if your typing speed is good than you will earn good income, it depends on person to person. Generally users get 10,000 to 25,000 per project by doing this work. You will earn as much you work.",
    },
    {
      question: "Is there any limitations of work ?",
      answer:
        "This is a leisure and free time work, even you could say part time work. However, if you are eager to do this job full time, you can do. We are glad about it. There is no work load, it depends upon candidates how much they can work.",
    },
    {
      question: "Is it possible to join without paying the registration fee ?",
      answer:
        "Yes, to start working in Nexentry you need to pay a small amount of service fee.",
    },
    {
      question: "How to submit my completed work?",
      answer:
        "You can submit in the company mail id that our customer support will provide.",
    },
    {
      question: "What about the customer support ?",
      answer:
        "We will guide you every time you need us. We provide 'Contact Us' system for technical support. For general enquiry you can mail us.",
    },
    {
      question: "Is data typing easy anyone can do ?",
      answer:
        "Persons who have good typing skill and applying candidates must be able to type quickly and accurately.",
    },
    {
      question: "What is project duration?",
      answer:
        "Project durations will be weekly & monthly as you complete a project you can select the next payout and apply for the next project.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".new-section-3");
      if (section) {
        const { top } = section.getBoundingClientRect();
        setIsVisible(top < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setSelectedQuestionIndex(null);
  };

  const handleQuestionClick = (index) => {
    setSelectedQuestionIndex(index);
  };

  const handleGoBack = () => {
    setSelectedQuestionIndex(null);
  };

  return (
    <div>
      {isVisible && (
        <div className="faq-chatbot">
          <div
            className={`chatbot-button ${isOpen ? "active" : ""}`}
            onClick={toggleChat}
          >
            💬
          </div>
          {isOpen && (
            <div className="chat-window">
              <h2 className="chat-heading">Frequently Asked Questions</h2>
              {selectedQuestionIndex === null ? (
                <ul className="chat-questions">
                  {/* Map through your questions array */}
                  {questions.map((item, index) => (
                    <li
                      key={index}
                      className="chat-question-item"
                      onClick={() => handleQuestionClick(index)}
                    >
                      {item.question}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="chat-answer-section">
                  <div className="question">
                    <strong>{questions[selectedQuestionIndex].question}</strong>
                  </div>
                  <div className="answer">
                    {questions[selectedQuestionIndex].answer
                      .charAt(0)
                      .toUpperCase() +
                      questions[selectedQuestionIndex].answer.slice(1)}
                  </div>
                  <button className="go-back-button" onClick={handleGoBack}>
                    Go Back
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FAQChatbot;
