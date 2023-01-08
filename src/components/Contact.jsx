import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-buttons">
      <button className="email btn">
        <FaEnvelope /> Email
      </button>
      <button className="linkdn btn blue-btn">
        <FaLinkedin /> Linkdn
      </button>
    </div>
  );
}

export default Contact;
