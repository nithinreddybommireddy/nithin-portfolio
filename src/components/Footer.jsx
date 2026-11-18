
import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <a href="#home" className="footer-logo">
            N<span>.</span>
          </a>

          <div className="footer-socials">
            <a
              href="https://github.com/nithinreddybommireddy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nithinreddy-bommireddy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:nithinreddybommireddy@gmail.com"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </div>

        <div className="footer-content">
          <h3>Building practical solutions through technology.</h3>
          <p>
            Java Full Stack Developer | React.js | Spring Boot |
            AI Integration
          </p>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Nithin Reddy Bommireddy.
            All rights reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to top <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
