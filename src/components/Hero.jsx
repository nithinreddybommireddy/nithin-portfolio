
import { ArrowDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { lazy, Suspense } from "react";
const Avatar3D = lazy(() => import("./Avatar3D"));

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-label">
          <span className="status-dot"></span>
          AVAILABLE FOR OPPORTUNITIES
        </p>

        <h1>
          Hi, I'm <span>Nithin Reddy</span>
          <br />
          Java Full Stack Developer
        </h1>

        <p className="hero-description">
          I build modern web applications using Java, Spring Boot,
          React.js and databases. I'm passionate about software
          development, problem-solving and AI-powered solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Explore Projects <ArrowDown size={18} />
          </a>

          <a href="/resume.pdf" className="btn-secondary" download>
            Download Resume <Download size={18} />
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/nithinreddybommireddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={19} /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nithinreddy-bommireddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={19} /> LinkedIn
          </a>
        </div>
      </div>

    <div className="hero-visual">
      <Suspense fallback={<div className="avatar-loading" />}>
    <Avatar3D />
    </Suspense>
    </div>
    </section>
  );
};

export default Hero;
