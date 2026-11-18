
import { GraduationCap, CalendarDays, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    specialization: "Computer Science and Engineering – AI & ML",
    institution: "Annamacharya Institute of Technology and Sciences,Hyderabad",
    duration: "2022 – 2026",
    score: "7.8 CGPA",
    level: "UNDERGRADUATE",
  },
  {
    degree: "Intermediate – MPC",
    specialization: "Mathematics, Physics and Chemistry",
    institution: "NRI Junior Kalasala,Guntur",
    duration: "2020 – 2022",
    score: "70.4%",
    level: "HIGHER SECONDARY",
  },
  {
    degree: "Secondary School",
    specialization: "SSC",
    institution: "Scholars School,Piduguralla",
    duration: "2019 – 2020",
    score: "95.6%",
    level: "SECONDARY EDUCATION",
  },
];

function Education() {
  return (
    <section className="education section-container" id="education">
      <div className="section-heading">
        <span>ACADEMIC BACKGROUND</span>
        <h2>My <span>Education</span></h2>
        <p>
          My academic journey and educational qualifications.
        </p>
      </div>

      <div className="education-list">
        {education.map((item) => (
          <article className="education-card" key={item.degree}>
            <div className="education-icon">
              <GraduationCap size={25} />
            </div>

            <div className="education-content">
              <div className="education-top">
                <span className="education-level">{item.level}</span>
                <span className="education-score">
                  <Award size={16} />
                  {item.score}
                </span>
              </div>

              <h3>{item.degree}</h3>
              <h4>{item.specialization}</h4>

              <p className="education-institution">
                {item.institution}
              </p>

              <div className="education-duration">
                <CalendarDays size={15} />
                {item.duration}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
