import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import "./Projects.css";

const projects = [
  {
    title: "Lapinoz Menu",
    category: "React",
    tech: "React",
    img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47",
    link: "https://your-ecommerce-site.com",
  },
  {
    title: "Sabarmati Riverfront",
    category: "PSD",
    tech: "HTML CSS Bootstrap",
    img: "./slider1.jpg",
    link: "https://your-movie-app.com",
  },
  {
    title: "OLA", 
    category: "PSD",
    tech: "HTML CSS Bootstrap",
    img: "./bg-sec.webp",
    link: "https://your-food-app.com",
  },
  {
    title: "Browerinfo",
    category: "PSD",
    tech: "HTML, CSS, Bootstrap",
    img: "./info-bg-1.jpg",
    link: "https://your-jewellery-site.com",
  },
  {
    title: "PORTFOLIO",
    category: "Website",
    tech: "React",
    img: "https://onemoneyway.com/wp-content/uploads/2024/08/Portfolio-word-with-pencil-instead-letter-i-vector-image-on-VectorStock-1.png",
    link: "https://your-jewellery-site.com",
  },
  {
    title: "TODO App",
    category: "React",
    tech: "React",
    img: "https://images.ctfassets.net/lzny33ho1g45/O6Ns6DttUzJym7rhGiD36/b1cc4e063288e5161b14edad3569c5cb/best-to-do-list-apps.jpg?fm=webp&q=31&fit=thumb&w=1520&h=760",
    link: "https://your-hotel-site.com",
  },
  {
    title: "Netflix Website",
    category: "PSD",
    tech: "HTML, CSS, JavaScript",
    img: "./logo.png",
    link: "https://your-netflix-clone.com",
  },

];

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      className={`project-section py-5 ${
        theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <h2 className="projects-title text-center">Projects</h2>
      <p className="projects-subtitle text-center">
        Creative and results-driven professional showcasing real-world projects
        built using modern web technologies.
      </p>

      {/* Filter Buttons */}
      <div className="project-filters">
        {["All", "Website", "React", "PSD"].map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="project-content">
              <span className="project-badge">{project.category}</span>
              <h4>{project.title}</h4>
              <p>{project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn text-decoration-none"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
