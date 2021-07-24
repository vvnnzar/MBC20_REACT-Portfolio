import React from "react";
import "./contact.scss";

export default function Contact() {
  return (
    <section className="contactWrapper" id="contact">
      <div className="label" id="contact">
        <h1>Let's work together!</h1>
        <h3>Learn more or reach out</h3>
        <br></br>
      </div>
      <div className="contactContainer">
        <div className="box">
          <i className="fas fa-user fa-3x"></i>
          <a href="mailto:vzara88@hotmail.com" className="btn">
            Send Email
          </a>
        </div>

        <div className="box">
          <i className="fab fa-linkedin fa-3x"></i>
          <a
            href="https://www.linkedin.com/in/vivianne-zara-2927aa4/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View LinkedIn Profile
          </a>
        </div>

        <div className="box">
          <i className="fab fa-github fa-3x"></i>
          <a
            href="https://github.com/vvnnzar"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View GitHub Profile
          </a>
        </div>

        <div className="box">
          <i className="fas fa-file fa-3x"></i>
          <a
            href="assets/resume/Professional Profile - Vivianne Zara.docx"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
