import React from "react";
import "portfolio/src/Home/Home.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { useEmail } from "./Contexts/EmailContext";
import Mail from "portfolio/src/home/Assets/Mail.svg"

export default function Contact() {
  const { sendEmail } = useEmail();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const lastName = event.target.lastName.value;
    const message = event.target.message.value;

    const emailData = { email, lastName, message };
    await sendEmail(emailData);
  };

  return (
    <form id="Contact" onSubmit={handleSubmit}>
      <div className="contact">
        <img src={Mail} alt="Mail Icon" className="mailImg" />
        <div className="Get">
          <h1 className="title">Get in touch</h1>
          <br />
          <div className="input-container">
            <HiOutlineMail size={30} />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
            />
          </div>
          <br />
          <div className="input-container">
            <BsPersonFill size={30} />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <br />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="message"
          ></textarea>
          <br />
          <button type="submit" className="SBtn" role="button">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
