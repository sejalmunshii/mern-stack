import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/sejal_DP1.jpeg";
import { BsGithub, BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import "./Hero.css";

function Hero() {
const lines = [
  "Code. Learn. Evolve.",
  "Think. Build. Deliver.",
  "Build. Learn. Repeat.",
];

const [text, setText] = useState("");
const [lineIndex, setLineIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);

useEffect(() => {
  // Stop if all lines are done (optional loop)
  if (lineIndex >= lines.length) return;

  const currentLine = lines[lineIndex];

  if (charIndex < currentLine.length) {
    const timeout = setTimeout(() => {
      setText(prev => prev + currentLine[charIndex]);
      setCharIndex(charIndex + 1);
    }, 60);

    return () => clearTimeout(timeout);
  } else {
    // Line finished typing
    const delay = setTimeout(() => {
      setText("");           // Clear text before next line
      setCharIndex(0);       // Reset char index
      setLineIndex((prev) => (prev + 1) % lines.length); // Next line
    }, 1000); // Pause before next line

    return () => clearTimeout(delay);
  }
}, [charIndex, lineIndex]);

  return (
    <section className="hero section">
      <div className="container">
        <div className="row align-items-center gy-2">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <h1 className="hero-title fs-1">
              Hello, I’m <span className="text-primary">Sejal Munshi</span>
            </h1>

            <h2 className="hero-subtitle my-3">
              MERN Stack Developer
            </h2>

            <p className="hero-text">
              I build modern, responsive, and user-friendly web applications using
              MongoDB, Express, React, and Node.js. Passionate about clean code and
              continuous learning.
            </p>

           <p className="hero-quote">
  {text}
  <span className="cursor">|</span>
</p>



            <div className="mt-2">
              <Link to="/projects" className="btn btn-primary me-3">
                View My Work
              </Link>

              <Link to="/resume" className="btn btn-outline-secondary">
                Resume
              </Link>
            </div>

            {/* SOCIAL LINKS */}
            <div className=" gap-3 pt-3  pb-3 fs-5 hero-social">
              <a
                href="https://github.com/sejalmunshii"
                target="_blank"
                rel="noreferrer"
                className="text-primary pe-3"
              >
                <BsGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sejal-munshi-244929385/"
                target="_blank"
                rel="noreferrer"
                className="text-primary pe-3"
              >
                <FaLinkedin />
              </a>

              <Link className="text-primary" to="/contact">
                <BsFillPersonLinesFill />
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center">
            <div className="hero-img-wrapper">
              <img
                src={profileImg}
                alt="Sejal Munshi"
                className="hero-img"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
