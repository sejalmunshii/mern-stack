import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import './Footer.css'
import { BsFillPersonLinesFill, BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`}>
      <div className="container text-center py-4">
        <h5 className="fs-2" >Portfolio</h5>
        <p className="fs-6">Let's connect and make something amazing! Reach out for projects, collaborations, or just to say hi.</p>

         <div className=" gap-3 pt-3  pb-3 fs-5 hero-social">
              <a
                href="https://github.com/sejalmunshii"
                target="_blank"
                rel="noreferrer"
                className="text-primary pe-3"
              >
                <BsGithub/>
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
    </footer>
  );
}

export default Footer;
