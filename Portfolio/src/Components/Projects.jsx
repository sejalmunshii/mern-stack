import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import "./Projects.css";

const projects = [
  {
    title: "BORCELLE Ecommerce Website",
    category: "Full Stack",
    tech: "React, Node.js",
    img: "/images/ecommerce.png",
  },
  {
    title: "Movie TV App - Using React",
    category: "React",
    tech: "React.js, API Integration",
    img: "/images/movie.png",
  },
  {
    title: "FoodieHub",
    category: "React",
    tech: "React.js, UI Design",
    img: "/images/food.png",
  },
  {
    title: "Prestige Jewellery",
    category: "Website",
    tech: "HTML, CSS, Bootstrap",
    img: "/images/jewellery.png",
  },
  {
    title: "Patan Hotel",
    category: "Website",
    tech: "HTML, CSS, Responsive UI",
    img: "/images/hotel.png",
  },
  {
    title: "Netflix Website",
    category: "Website",
    tech: "HTML, CSS, JavaScript",
    img: "/images/netflix.png",
  },
  {
    title: "Portfolio using HTML CSS and Bootstrap",
    category: "Website",
    tech: "HTML, CSS, Bootstrap",
    img: "/images/portfolio.png",
  },
  {
    title: "Burger PSD",
    category: "PSD",
    tech: "PSD to HTML using Bootstrap",
    img: "/images/burger.png",
  },
  {
    title: "Sabarmati Riverfront Website",
    category: "Website",
    tech: "HTML, CSS, Responsive UI",
    img: "/images/riverfront.png",
  },
];


const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`project-section py-5 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <h2 className="projects-title text-center">Projects</h2>
      <p className="projects-subtitle">
        Creative and results-driven professional showcasing real-world projects
        built using modern web technologies.
      </p>

      {/* Filter Buttons */}
      <div className="project-filters">
        <button className="active">All</button>
        <button>Full Stack</button>
        <button>Website</button>
        <button>React</button>
        <button>PSD</button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="project-content">
              <span className="project-badge">{project.category}</span>
              <h4>{project.title}</h4>
              <p>{project.tech}</p>
              <button className="view-btn">View Project</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
