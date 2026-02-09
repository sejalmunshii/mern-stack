import React, { useContext } from "react";
import "./Resume.css";
import { ThemeContext } from "../Context/ThemeContext";

const Resume = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`resume-section py-5 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="resume-title">Resume</h2>
          <p className="resume-subtitle">
            Detail-oriented and proactive professional with [2019–2025] years of experience in [Informational Technology].
            Proven track record of delivering exceptional results through strong problem-solving,
            teamwork, and project management skills.
          </p>
          <a href="/Resume.pdf" download className="btn btn-primary mt-3">
            📄 Download Resume
          </a>
        </div>

        {/* Content */}
        <div className="row g-5">

          {/* Left Column */}
          <div className="col-lg-6">

            {/* About */}
            <div className="resume-card">
              <h5 className="section-title">About</h5>
              <p className="fw-bold mb-1">SEJAL MUNSHI</p>
              <p className="resume-text">
                Enthusiastic and detail-oriented MERN-Stack Developer with hands-on experience in
                building responsive websites and web applications. Skilled in frontend technologies
                like React.js and backend tools like Node.js using Express.js. Currently seeking an
                entry-level role to contribute technical skills and grow within a collaborative
                development team.
              </p>
              <ul className="resume-list">
                <li>RTO, Ahmedabad</li>
                <li>+91 7016004537</li>
                <li>sejalmunshi11@gmail.com</li>
              </ul>
            </div>

            {/* Projects */}
            <div className="resume-card mt-4">
              <h5 className="section-title">Projects</h5>

              <p className="fw-bold">Sabarmati Riverfront Website</p>
              <p className="resume-text">
                Designed and developed a responsive website for Sabarmati using
                HTML and CSS.
                Created clean layouts and user-friendly navigation.
                Focused on visual design, structure, and mobile responsiveness.
                Improved understanding of front-end development and real-world

              </p>

              <p className="fw-bold">Portfolio in React</p>
              <p className="resume-text">
                Built a modern and responsive portfolio website using React.js and reusable
                components. Focused on clean UI, component-based architecture, and mobile-first
                design for performance and scalability.
              </p>

              <p className="fw-bold">Lapinoz Menu Section</p>
              <p className="resume-text">
                Developed a dynamic menu section using React.js.
                Used map() function to display items efficiently and filter() for
                category-based filtering.
                Implemented React Router for smooth page navigation.
                Enhanced user experience with clean UI and responsive design.

              </p>

              <p className="fw-bold">React Learning Website
              </p>
              <p className="resume-text">
                Built an informative React-based website containing React interview
                questions, tasks, and learning resources.
                Designed the site to work like an educational platform, similar to
                online learning websites.
                Used React Router for smooth navigation between different sections.
                Focused on clean UI, structured content, and user-friendly experience.
</p>

                <p className="fw-bold">Education Website (PSD to HTML)</p>
                <p className="resume-text">
                  Designed and developed a responsive education website using HTML5 and CSS3,
                  implementing modern layout techniques like Flexbox and Grid.
                </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">

            {/* Skills */}
            <div className="resume-card">
              <h5 className="section-title">Skills</h5>

              <p className="fw-bold">Technical Skills</p>
              <ul className="resume-list">
                <li> Web Development</li>
                <li>Frontend: HTML, CSS, JavaScript, Bootstrap, jQuery, React.js (with Vite)</li>
                <li>Backend: Node.js, Express.js</li>
                <li>Database: MongoDB</li>
                <li>Basic understanding of GitHub</li>
              </ul>
            </div>

            {/* Experience */}
            <div className="resume-card mt-4">
              <h5 className="section-title">Professional Experience</h5>
              <p className="fw-bold">FRAMEBOXX</p>
              <p className="resume-text">Ahmedabad – Aug 2024 to JAN 2026</p>
              <p className="resume-text">
                Completed a Mern-Stack Development program at Frameboxx, including
                3 months of hands-on training and a 3-month internship. Gained practical experience
                in building responsive web applications using React, Node.js, Express, and MongoDB.
              </p>
            </div>

            {/* Certifications */}
            <div className="resume-card mt-4">
              <h5 className="section-title">Certifications</h5>
              <p className="fw-bold">Mern-Stack Developer Course</p>
              <p className="resume-text">
                Currently pursuing Mern-Stack Development at Frameboxx, covering 
                responsive web development, and modern web technologies.
              </p>

              <p className="fw-bold">Bachlor Provisional Certificate</p>
              <p className="resume-text">Bachloler in BTech – April 2025</p>

              <p className="resume-text">Mern-Stack Development Course Certificate</p>
            </div>

            {/* Education */}
            <div className="resume-card mt-4">
              <h5 className="section-title">Education</h5>
              <p className="fw-bold">Bachloler in BTech</p>
              <p className="resume-text">2022 – 2025</p>
              <p className="resume-text">Silver Oak University, Ahmedabad</p>
              <ul className="resume-list">
                <li>Graduated with Higher Second Class Distinction</li>
                <li>Mearn-Stack Developer Course at frameboxx – MERN Stack</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
