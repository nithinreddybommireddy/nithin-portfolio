
import { useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        N<span>.</span>
      </a>

      <div
        className={`nav-links ${isMenuOpen ? "is-open" : ""}`}
        id="mobile-navigation"
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={closeMenu}
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="social-links">
        <a
          href="https://github.com/nithinreddybommireddy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={19} />
        </a>

        <a
          href="https://www.linkedin.com/in/nithinreddy-bommireddy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={19} />
        </a>

        <a
          href="mailto:nithinreddybommireddy@gmail.com?subject=Portfolio%20Inquiry"
          aria-label="Email"
        >
          <Mail size={19} />
        </a>
      </div>

      <button
        type="button"
        className="mobile-menu-toggle"
        onClick={() => setIsMenuOpen((previous) => !previous)}
        aria-label={
          isMenuOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
      >
        {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>
    </nav>
  );
};

export default Navbar;
