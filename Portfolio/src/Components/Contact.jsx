import React, { useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../Context/ThemeContext";
import "./Contact.css";

const Contact = () => {
  const { theme } = useContext(ThemeContext); // theme access
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "gmail$0808",
      "contact$0808",
      formData,
      "PqC5yKxVc9A6v-A2h"
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => {
      alert("Failed to send message, try again.");
    });
  };

  return (
    <div className={`contact-container ${theme} text-center`}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Your Name"
            required
          />
          <label>Name</label>
        </div>

        <div className="form-floating">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Your Email"
            required
          />
          <label>Email</label>
        </div>

        <div className="form-floating">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            placeholder="Your Message"
            required
            rows="5"
          ></textarea>
          <label>Message</label>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Send Message
        </button>
      </form>

      <div className="contact-info">
        <p>Email: yourname@example.com</p>
        <p>Phone: +91 12345 67890</p>
        <p>Location: Your City, Country</p>
      </div>
    </div>
  );
};

export default Contact;
