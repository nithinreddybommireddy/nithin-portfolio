
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
    role: "Web Development Intern",
    company: "Talent Trek E-Learning",
    duration: "March 2025 – June 2025",
    type: "3-Month Internship",
    location: "Remote",
    description:
      "Gained practical experience in web development by building responsive user interfaces and implementing frontend functionality using modern web technologies.",
    responsibilities: [
      "Developed responsive web pages using HTML5, CSS3, and JavaScript.",
      "Implemented user interface components with a focus on usability and responsiveness.",
      "Worked on frontend functionality, debugging, and resolving UI issues.",
      "Applied web development concepts to practical application tasks.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
];

function Experience() {
  return (
    <section className="experience section-container" id="experience">
      <div className="section-heading">
        <span>MY PROFESSIONAL JOURNEY</span>
        <h2>Experience & <span>Internships</span></h2>
        <p>
          Practical experience and professional learning through
          real-world development activities.
        </p>
      </div>

      <div className="experience-list">
        {experiences.map((item, index) => (
          <article className="experience-card" key={index}>
            <div className="experience-header">
              <div className="experience-icon">
                <BriefcaseBusiness size={24} />
              </div>

              <div className="experience-title">
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
              </div>

              <span className="experience-type">{item.type}</span>
            </div>

            <div className="experience-meta">
              <span>
                <CalendarDays size={15} />
                {item.duration}
              </span>
              <span>
                <MapPin size={15} />
                {item.location}
              </span>
            </div>

            <p className="experience-description">
              {item.description}
            </p>

            <h5>Key Responsibilities</h5>

            <ul className="experience-responsibilities">
              {item.responsibilities.map((task) => (
                <li key={task}>
                  <CheckCircle2 size={16} />
                  <span>{task}</span>
                </li>
              ))}
            </ul>

            <div className="experience-technologies">
              {item.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
