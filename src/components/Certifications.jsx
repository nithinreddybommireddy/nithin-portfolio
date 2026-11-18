
import {
  Award,
  CalendarDays,
  ExternalLink,
  GraduationCap,
} from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Java Full Stack Development with AI Training",
    organization: "ST School – Student Tribe",
    date: "September 2026",
    category: "FULL STACK DEVELOPMENT",
    description:
      "Technical training covering Java Full Stack Development and AI-related technologies.",
    icon: GraduationCap,
  },
  {
    id: 2,
    title: "Programming in Java",
    organization: "NPTEL",
    date: "",
    category: "PROGRAMMING",
    description:
      "Certification in Java programming concepts and fundamentals.",
    icon: Award,
  },
  {
    id: 3,
    title: "Generative AI",
    organization: "NASBA Accredited",
    date: "",
    category: "ARTIFICIAL INTELLIGENCE",
    description:
      "Certification focused on Generative AI concepts and technologies.",
    icon: Award,
  },
];

function Certifications() {
  return (
    <section
      className="certifications section-container"
      id="certifications"
    >
      <div className="section-heading">
        <span>LEARNING & ACHIEVEMENTS</span>
        <h2>Certifications & <span>Training</span></h2>
        <p>
          Professional certifications and technical learning
          that support my development journey.
        </p>
      </div>

      <div className="certifications-list">
        {certifications.map((cert) => {
          const Icon = cert.icon;

          return (
            <article className="certification-card" key={cert.id}>
              <div className="certification-icon">
                <Icon size={25} />
              </div>

              <div className="certification-content">
                <span className="certification-category">
                  {cert.category}
                </span>

                <h3>{cert.title}</h3>

                <p className="certification-organization">
                  {cert.organization}
                </p>

                <p className="certification-description">
                  {cert.description}
                </p>

                {cert.date && (
                  <div className="certification-date">
                    <CalendarDays size={15} />
                    {cert.date}
                  </div>
                )}
              </div>

              <div className="certification-badge">
                <Award size={20} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Certifications;
