const skillGroups = [
  {
    cluster: "LANGUAGES",
    skills: ["JAVASCRIPT", "PYTHON", "C++", "SQL"],
  },
  {
    cluster: "FRONTEND",
    skills: ["REACT", "HTML5", "CSS3", "D3.JS", "RESPONSIVE DESIGN" , "GSAP"],
  },
  {
    cluster: "BACKEND & DATA",
    skills: ["FASTAPI", "REST APIs", "MONGODB", "SQLITE", "JSON"],
  },
];

export default function Skills() {
  return (
    <div className="mj-section skills-section">

      {/* Label */}
      <span className="mj-label skills-label">02 / SKILLS</span>

      {/* Top headline */}
      <h2 className="skills-headline">I BUILD WITH</h2>

      {/* Skill clusters */}
      <div className="skills-clusters">
        {skillGroups.map((group) => (
          <div className="skills-cluster" key={group.cluster}>
            <p className="skills-cluster-name">{group.cluster}</p>
            <div className="skills-cluster-items">
              {group.skills.map((skill) => (
                <span className="skills-item" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
