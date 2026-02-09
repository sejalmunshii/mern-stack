import React, { useEffect, useState, useContext } from "react";
import "./About.css";
import profileImg from "../assets/sejal_DP.jpeg";
import { ThemeContext } from "../Context/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`about-section py-3 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="about-title">About</h2>
          <p className="about-subtitle">
            Hi there! My name is Sejal Munshi, and I am a mern-stack Web Developer.
            I specialize in building websites as per user requirements.
          </p>
        </div>

        <div className="row align-items-center g-5">
          <div className="col-md-5 text-center">
            <div className="profile-wrapper">
              <img src={profileImg} alt="Profile" className="profile-img" />
            </div>
          </div>

          <div className="col-md-7">
            <div className={`about-card ${theme === "dark" ? "card-dark" : "card-light"}`}>
              <h3 className="role-title">Mern-stack Developer</h3>
              <p className="role-desc">
                Enthusiastic and detail-oriented mern-stack Developer with hands-on
                experience in building responsive websites and web applications.
                Skilled in frontend technologies like React.js and backend tools
                like Node.js using Express.js. Currently seeking an entry-level
                role to contribute technical skills and grow within a collaborative
                development team.
              </p>

              <div className="row info-box mt-4">
                <div className="col-md-6">
                  <p><strong>Work:</strong> Mern-stack Developer</p>
                  <p><strong>Email:</strong> sejalmunshi11@gmail.com</p>
                  <p><strong>GitHub:</strong> <a href="https://github.com/sejalmunshii">Profile</a></p>
                  <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sejal-munshi-244929385/">Profile</a></p>
                </div>
                <div className="col-md-6">
                  <p><strong>Education:</strong> BTech From Silver Oak University</p>
                  <p><strong>Phone:</strong> +91 7016004537</p>
                  <p><strong>City:</strong> Ahmedabad</p>
                </div>
              </div>

              <p className="focus-text mt-3">
                I focus on responsive design, modern UI, and scalable web apps.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section mt-5">
          <h4 className="skills-title">My Skills</h4>

          <div className="row">
            <div className="col-md-6">
              <AnimatedSkillBar skill="React.js" percent={80} />
              <AnimatedSkillBar skill="HTML" percent={90} />
              <AnimatedSkillBar skill="JavaScript" percent={80} />
              <AnimatedSkillBar skill="MongoDB" percent={80} />
            </div>

            <div className="col-md-6">
              <AnimatedSkillBar skill="Node.js" percent={80} />
              <AnimatedSkillBar skill="CSS" percent={90} />
              <AnimatedSkillBar skill="Bootstrap" percent={90} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AnimatedSkillBar = ({ skill, percent }) => {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    setTimeout(() => {
      setWidth(`${percent}%`);
    }, 200);
  }, [percent]);

  return (
    <div className="skill-item mb-4">
      <div className="d-flex justify-content-between">
        <span>{skill}</span>
        <span>{percent}%</span>
      </div>
      <div className="progress">
        <div className="progress-bar animated-bar" style={{ width }}></div>
      </div>
    </div>
  );
};

export default About;
