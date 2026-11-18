
import { useState } from "react";

import {
  Mail,
  Send,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(form.subject);

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href =
      `mailto:nithinreddybommireddy@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      className="contact section-container"
      id="contact"
    >
      <div className="section-heading">
        <span>GET IN TOUCH</span>

        <h2>
          Let's <span>Connect</span>
        </h2>

        <p>
          Interested in working together or discussing an opportunity?
          Feel free to reach out.
        </p>
      </div>

      <div className="contact-container">

        {/* CONTACT INFORMATION */}

        <div className="contact-info">
          <h3>Let's start a conversation</h3>

          <p>
            I'm open to entry-level Java Full Stack Developer
            opportunities, collaborations, and interesting
            development projects.
          </p>

          <a
            href="mailto:nithinreddybommireddy@gmail.com"
            className="contact-info-card"
          >
            <div className="contact-info-icon">
              <Mail size={21} />
            </div>

            <div>
              <span>Email</span>
              <h4>nithinreddybommireddy@gmail.com</h4>
            </div>

            <ArrowUpRight size={18} />
          </a>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <MapPin size={21} />
            </div>

            <div>
              <span>Location</span>
              <h4>Hyderabad, Telangana, India</h4>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/nithinreddybommireddy"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/nithinreddy-bommireddy"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={21} />
            </a>
          </div>
        </div>

        {/* CONTACT FORM */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <h3>Send me a message</h3>

          <div className="contact-form-group">
            <label htmlFor="contact-name">
              Your Name
            </label>

            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="contact-email">
              Your Email
            </label>

            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="contact-subject">
              Subject
            </label>

            <input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="contact-message">
              Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              placeholder="Write your message..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
          >
            Send Message
            <Send size={17} />
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
