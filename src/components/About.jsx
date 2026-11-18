
import {
  Code2,
  GraduationCap,
  BrainCircuit,
  BriefcaseBusiness,
} from "lucide-react";

const highlights = [
  {
    icon: <Code2 />,
    title: "Java Full Stack Development",
    description:
      "Building frontend and backend applications using React.js, Java, Spring Boot and REST APIs.",
  },
  {
    icon: <GraduationCap />,
    title: "Computer Science Graduate",
    description:
      "B.Tech in Computer Science and Engineering, specializing in Artificial Intelligence and Machine Learning.",
  },
  {
    icon: <BrainCircuit />,
    title: "AI-Powered Applications",
    description:
      "Developed GitInsight AI by integrating GitHub APIs and Gemini AI for developer analytics.",
  },
  {
    icon: <BriefcaseBusiness />,
    title: "Practical Development Experience",
    description:
      "Completed a web development internship focused on responsive interfaces, UI implementation and debugging.",
  },
];

const About = () => {
  return (
    <section className="about section-container" id="about">
      <div className="section-heading">
        <span>GET TO KNOW ME</span>
        <h2>About <span>Me</span></h2>
        <p>My background, technical interests and development journey.</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>
            Building practical solutions through
            <span className="about-gradient"> technology.</span>
          </h3>

          <p>
            I'm Nithin Reddy Bommireddy, a Computer Science and
            Engineering graduate specializing in Artificial
            Intelligence and Machine Learning from Annamacharya
            Institute of Technology and Sciences.
          </p>

          <p>
            My primary focus is Java Full Stack Development.
            I work with Java, Spring Boot, Spring Security,
            React.js, TypeScript, PostgreSQL and REST APIs
            to build responsive and secure web applications.
          </p>

          <p>
            I developed GitInsight AI, an AI-powered GitHub
            developer analytics platform integrating GitHub
            REST APIs and Gemini AI. I'm interested in building
            scalable applications and exploring practical AI
            integrations.
          </p>

          <div className="about-stats">
            <div>
              <strong>7.8</strong>
              <span>B.Tech CGPA</span>
            </div>
            <div>
              <strong>2026</strong>
              <span>Graduation</span>
            </div>
            <div>
              <strong>2</strong>
              <span>Projects</span>
            </div>
          </div>
        </div>

        <div className="about-highlights">
          {highlights.map((item) => (
            <div className="highlight-card" key={item.title}>
              <div className="highlight-icon">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
