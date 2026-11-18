
import {
  Code2,
  Monitor,
  Server,
  Database,
  ShieldCheck,
  Wrench,
  BrainCircuit,
  Network,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: <Code2 />,
    description: "Languages used for programming and problem-solving.",
    skills: ["Java", "JavaScript", "Python (Basic)", "C", "SQL"],
  },
  {
    title: "Frontend Development",
    icon: <Monitor />,
    description: "Building responsive and interactive user interfaces.",
    skills: [
      "React.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React Router",
    ],
  },
  {
    title: "Backend Development",
    icon: <Server />,
    description: "Developing backend applications and services.",
    skills: ["Java", "Spring Boot", "Spring Security", "REST APIs"],
  },
  {
    title: "Database Management",
    icon: <Database />,
    description: "Working with relational and NoSQL databases.",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Security & Core Concepts",
    icon: <ShieldCheck />,
    description: "Application security and computer science fundamentals.",
    skills: [
      "JWT Authentication",
      "OOP",
      "DSA",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    title: "Development Tools",
    icon: <Wrench />,
    description: "Tools used in development, version control and deployment.",
    skills: [
      "Git",
      "GitHub",
      "Maven",
      "Docker",
      "Vercel",
      "IntelliJ IDEA",
      "VS Code",
    ],
  },
  {
    title: "AI Integration",
    icon: <BrainCircuit />,
    description: "AI technologies used in practical application development.",
    skills: ["Gemini AI", "GitHub REST API"],
  },
  {
    title: "API Development",
    icon: <Network />,
    description: "Building and integrating application programming interfaces.",
    skills: ["REST API Development", "API Integration"],
  },
];

const Skills = () => {
  return (
    <section className="skills section-container" id="skills">
      <div className="section-heading">
        <span>MY TECHNICAL EXPERTISE</span>
        <h2>Skills & <span>Technologies</span></h2>
        <p>
          Technologies and tools I use to develop full-stack applications.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-heading">
              <div className="skill-icon">{group.icon}</div>
              <div>
                <h3>{group.title}</h3>
                <p className="skill-card-description">
                  {group.description}
                </p>
              </div>
            </div>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
