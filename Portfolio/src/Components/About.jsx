import Skills from "./Skills";
import Testimonials from "./Testimonials";
import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* Intro Section */}
      <section id="about" className="about section">
        <div className="container section-title">
          <h2>About</h2>
          <p>Hi, I’m Brandon, a calm-minded creative developer crafting digital experiences.</p>
        </div>

        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-7 intro-content">
              <span className="eyebrow">Hello there</span>
              <h2 className="headline">Hi, I'm Brandon</h2>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Integer posuere lacus in mi fringilla, eget luctus risus pulvinar.</p>
              <div className="cta-group">
                <a href="#portfolio" className="btn-ghost">View My Work</a>
                <a href="#" className="link-underline">Download Resume</a>
              </div>
            </div>

            <div className="col-lg-5 profile-figure">
              <img src="/assets/img/profile/profile-square-11.webp" alt="Profile" className="profile-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Testimonials Section */}
      <Testimonials />

    </main>
  );
}

export default About;
