import React from "react";
import { useState } from "react";
import "./ContactForm.css";
import { MdEmail } from "react-icons/md";
import { FaUniversity, FaQuestion } from "react-icons/fa";
import emailjs from "emailjs-com";
function ContactForm() {
  const [step, setStep] = useState(1);
  const [position, setPosition] = useState(33.33);
  const [email, setEmail] = useState("");
  const [studies, setStudies] = useState("");
  const [interests, setInterests] = useState("");
  const [emptyField, setEMptyField] = useState(0);

  function sendEmail(e) {
    console.log(e);
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.href = "/";
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <section id="contact-page">
      <form onSubmit={sendEmail}>
        <div
          className="inputs-info"
          style={{ transform: `translateX(${position}%)` }}
        >
          <div className="step">
            <MdEmail className="icon"></MdEmail>
            <h1>Επκοινωνία</h1>
            <p>Επικοινωνίστε μαζί μας αν ενδιαφέρεστε να μπείτε στην ομάδα.</p>
            <input
              type="email"
              name="email"
              placeholder={"Email"}
              onChange={(e) => setEmail(e.target.value)}
              style={
                emptyField === 1
                  ? { border: "2px solid rgb(255, 54, 54)" }
                  : { border: "none" }
              }
            />
          </div>
          <div className="step">
            <FaUniversity className="icon"></FaUniversity>
            <h1>Σπουδές</h1>
            <p>Πείτε μας που σπουδάζετε και σε ποιο τμήμα.</p>
            <input
              type="text"
              name="studies"
              style={
                emptyField === 2
                  ? { border: "2px solid rgb(255, 54, 54)" }
                  : { border: "none" }
              }
              placeholder={"Π.χ. Τμήμα Ψηφιακών Συστημάτων"}
              onChange={(e) => setStudies(e.target.value)}
            />
          </div>
          <div className="step">
            <FaQuestion className="icon"></FaQuestion>
            <h1>Ενδιαφέροντα</h1>
            <p>Παρακαλώ πείτε μας τι αντικείμενο σας ενδιαφέρει.</p>
            <textarea
              type="text"
              name="interests"
              style={
                emptyField === 3
                  ? { border: "2px solid rgb(255, 54, 54)" }
                  : { border: "none" }
              }
              placeholder={"Π.χ. Web development"}
              onChange={(e) => setInterests(e.target.value)}
            />
          </div>
        </div>
        <button
          className="next"
          type={step === 3 ? "submit" : "button"}
          onClick={(e) => {
            if (position > -33.33) {
              e.preventDefault();
              setStep(step + 1);
              setPosition(position - 33.33);
            } else {
              if (!email) {
                setPosition(33.33);
                setStep(1);
                setEMptyField(1);
              } else if (!studies) {
                setPosition(0);
                setStep(2);
                setEMptyField(2);
              } else if (!interests) {
                setPosition(-33.33);
                setStep(3);
                setEMptyField(3);
              }
            }
          }}
        >
          {step === 3 ? "Αποστολή" : "Επόμενο"}
        </button>
        <div className="dots">
          <div
            className="dot"
            onClick={() => {
              setStep(1);
              setPosition(33.33);
            }}
            style={
              step === 1
                ? { backgroundColor: "var(--primary)" }
                : { backgroundColor: "#adadad" }
            }
          ></div>
          <div
            className="dot"
            onClick={() => {
              setStep(2);
              setPosition(0);
            }}
            style={
              step === 2
                ? { backgroundColor: "var(--primary)" }
                : { backgroundColor: "#adadad" }
            }
          ></div>
          <div
            className="dot"
            onClick={() => {
              setStep(3);
              setPosition(-33.33);
            }}
            style={
              step === 3
                ? { backgroundColor: "var(--primary)" }
                : { backgroundColor: "#adadad" }
            }
          ></div>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
