import "./About.css"





function Skills() {

  const skills = [
    { name: "HTML", percent: 90 },
    { name: "CSS", percent: 95 },
    { name: "JavaScript", percent: 80 },
    { name: "Photoshop", percent: 55 },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container section-title">
        <h2>Skills</h2>
      </div>

      <div className="container">
        <div className="row g-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="skill-box">
                <h3>{skill.name}</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: `${skill.percent}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
