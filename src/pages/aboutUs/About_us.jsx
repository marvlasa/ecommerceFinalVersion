import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

const TEAM = [
  { name: "Marcos Sierra",       role: "Admin & Backend",   bio: "In charge of the admin logic and back-end routes. Also supporting the front-end team with React.js and Redux.", linkedin: "https://www.linkedin.com/in/masnc7/" },
  { name: "Kevin Mullin",        role: "Backend Lead",      bio: "Using his sixth sense, he solved the most complex problems. Primarily back-end, with strong front-end support.", linkedin: "https://www.linkedin.com/in/kevin-mullin-ferres/" },
  { name: "Martín Vlasanovich",  role: "Frontend Lead",     bio: "Developing the front-end interface with React.js and Redux. Also supported the back-end MVC architecture.", linkedin: "https://www.linkedin.com/in/martinvlasanovich/" },
  { name: "Nicolás Curbelo",     role: "Backend Engineer",  bio: "In charge of the back-end logic with support in front-end activities using React.js and Redux.", linkedin: "https://www.linkedin.com/in/nicolascurbelo/" },
];

const TECH = ["fa-html5", "fa-css3-alt", "fa-react", "fa-node-js"];

function About_us() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  return (
    <div>
      <PageBanner title="About Us" crumb="About" />

      <section className="about-section">
        <div className="container">
          <div className="about-intro">
            <span className="section-label">Our Mission</span>
            <h2>Motivation</h2>
            <p>
              We chose this project to deliver high-quality furniture experiences that blend modern
              aesthetics with thoughtful craftsmanship. Every piece is selected to bring warmth and
              character to your space.
            </p>
          </div>

          <div className="text-center" style={{ marginBottom: "64px" }}>
            <span className="section-label">Built With</span>
            <h2 className="section-title" style={{ marginBottom: "20px" }}>Tech Stack</h2>
            <div className="tech-icons">
              {TECH.map((icon) => <i key={icon} className={`fab ${icon}`} />)}
              <i className="fas fa-database" title="Database" />
            </div>
          </div>

          <div className="text-center" style={{ marginBottom: "40px" }}>
            <span className="section-label">The People</span>
            <h2 className="section-title">Meet the Team</h2>
          </div>

          <div className="team-grid">
            {TEAM.map(({ name, role, bio, linkedin }) => (
              <div className="team-card" key={name}>
                <h3>{name}</h3>
                <p className="eyebrow" style={{ color: "var(--accent)", marginBottom: "10px" }}>{role}</p>
                <p>{bio}</p>
                <a href={linkedin} target="_blank" rel="noreferrer" className="btn-ghost" style={{ display: "inline-flex" }}>
                  <i className="fab fa-linkedin" /> Hire me
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About_us;
