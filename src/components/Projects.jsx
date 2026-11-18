
import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Target,
  Lightbulb,
  Code2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "GitInsight AI",
    subtitle: "AI-Powered GitHub Developer Analytics Platform",
    category: "FLAGSHIP PROJECT",
    type: "FULL STACK · AI INTEGRATION",
    featured: true,

    description:
        "Developed and deployed GitInsight AI, an AI-powered developer analytics platform that transforms GitHub activity into actionable insights. Analyzes repositories, commits, contributions, and technical skills while enabling recruiters to screen developer profiles through AI-driven evaluations of coding activity, project experience, and technical strengths.",
    problem:
      "Understanding a developer's practical coding activity and technical strengths through manual GitHub profile and repository reviews can be time-consuming.",

    solution:
      "Developed a platform that integrates GitHub REST APIs and Gemini AI to collect developer information, display analytics and generate AI-powered developer insights.",

    features: [
        "GitHub profile and repository analysis",
        "Commit and contribution activity analytics",
        "Programming language and technical skill analysis",
        "Developer performance metrics and insights",
        "Gemini AI-powered developer analysis",
        "AI-driven developer profile screening for recruiters"
    ],

    architecture:
      "React.js frontend with Tailwind CSS communicates with Java and Spring Boot backend REST APIs. Spring Security and JWT provide authentication. PostgreSQL stores application data, while GitHub REST APIs and Gemini AI provide external developer data and AI insights.",

    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "React.js",
      "Tailwind CSS",
      "REST API",
      "GitHub API",
      "Gemini AI",
      "Docker",
      "Maven",
    ],

    github: "https://github.com/nithinreddybommireddy/git-insight-ai.git",
    demo: "https://git-insight-ai-one.vercel.app/",
  },
 

{
  id: 3,
  title: "Travel Log",
  subtitle: "Full-Stack Travel Discovery & Booking Platform",
  category: "FULL STACK PROJECT",
  type: "REACT · TYPESCRIPT · CONVEX",

  description:
    "Designed and developed a full-stack travel platform that simplifies discovering destinations and booking trips across India. Enables users to explore tours, view detailed itineraries, save favorite destinations, manage bookings, apply discount coupons, and receive booking confirmations through an integrated email service.",

  problem:
    "Travelers often need to use multiple platforms to discover destinations, compare tour details, save their preferences, and manage trip bookings.",

  solution:
    "Built an integrated travel discovery and booking application with user authentication, destination exploration, saved tours, and a streamlined booking workflow powered by Convex.",

  features: [
    "User registration and login with protected routes",
    "Explore and search travel destinations across India",
    "Tour details with pricing, duration, and itineraries",
    "Save and manage favorite destinations",
    "Complete tour booking with traveler details",
    "Coupon codes and automatic discount calculations",
    "Booking confirmation emails using EmailJS",
    "Responsive design for desktop, tablet, and mobile"
  ],

  architecture:
    "React 19 and TypeScript frontend built with Vite and Tailwind CSS v4. Convex provides backend functions, database operations, and authentication through Convex Auth. EmailJS handles booking confirmation emails, while Framer Motion supports interface animations.",

  technologies: [
    "React 19",
    "TypeScript",
    "Vite",
    "Tailwind CSS v4",
    "Convex",
    "Convex Database",
    "Convex Auth",
    "Framer Motion",
    "EmailJS",
    "shadcn/ui",
    "Lucide React"
  ],

  github: "https://github.com/nithinreddybommireddy/Travel-log.git",
  demo: "https://travel-log-five-lemon.vercel.app/",
},
];

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(project.featured);

  return (
    <article
      className={`project-card ${
        project.featured ? "featured-project" : ""
      }`}
    >
      <div className="project-top">
        <span className="project-category">
          {project.category}
        </span>

        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub repository`}
            >
              <FaGithub size={20} />
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
            >
              <ArrowUpRight size={20} />
            </a>
          )}
        </div>
      </div>

      <span className="project-type">{project.type}</span>

      <h3>{project.title}</h3>
      <h4 className="project-subtitle">{project.subtitle}</h4>

      <p className="project-description">
        {project.description}
      </p>

      <button
        className="project-expand"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {expanded ? "Hide details" : "Explore project details"}
        {expanded ? (
          <ChevronUp size={18} />
        ) : (
          <ChevronDown size={18} />
        )}
      </button>

      {expanded && (
        <div className="project-details">
          <div className="project-detail-block">
            <div className="detail-heading">
              <Target size={19} />
              <h5>Problem</h5>
            </div>
            <p>{project.problem}</p>
          </div>

          <div className="project-detail-block">
            <div className="detail-heading">
              <Lightbulb size={19} />
              <h5>Solution</h5>
            </div>
            <p>{project.solution}</p>
          </div>

          <div className="project-detail-block">
            <div className="detail-heading">
              <Code2 size={19} />
              <h5>Key Features</h5>
            </div>

            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-detail-block">
            <div className="detail-heading">
              <Layers3 size={19} />
              <h5>Technical Architecture</h5>
            </div>
            <p>{project.architecture}</p>
          </div>
        </div>
      )}

      <div className="project-tech-heading">
        <ShieldCheck size={16} />
        TECHNOLOGY STACK
      </div>

      <div className="project-tech">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </article>
  );
}

const Projects = () => {
  return (
    <section className="projects section-container" id="projects">
      <div className="section-heading">
        <span>SELECTED WORK</span>
        <h2>Projects & <span>Case Studies</span></h2>
        <p>
          Applications I've built using frontend, backend
          and AI technologies.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
