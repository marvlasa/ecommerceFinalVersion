import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const teamMembers = [
  {
    name: "Marcos Sierra",
    role: "Admin & Backend",
    bio: "In charge of the admin logic and back-end routes. Also supporting the front-end team with React.js and Redux.",
    linkedin: "https://www.linkedin.com/in/masnc7/",
  },
  {
    name: "Kevin Mullin",
    role: "Backend Lead",
    bio: "Using his sixth sense, he solved the most complex problems. Primarily back-end, with strong front-end support.",
    linkedin: "https://www.linkedin.com/in/kevin-mullin-ferres/",
  },
  {
    name: "Martín Vlasanovich",
    role: "Frontend Lead",
    bio: "Developing the front-end interface with React.js and Redux. Also supported the back-end MVC architecture.",
    linkedin: "https://www.linkedin.com/in/martinvlasanovich/",
  },
  {
    name: "Nicolás Curbelo",
    role: "Backend Engineer",
    bio: "In charge of the back-end logic with support in front-end activities using React.js and Redux.",
    linkedin: "https://www.linkedin.com/in/nicolascurbelo/",
  },
];

function About_us() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <h1>About Us</h1>
            <nav className="breadcrumb-nav">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <span>About</span>
            </nav>
          </div>
        </div>
      </div>

      {/* About section */}
      <section className="about-section">
        <div className="container">
          {/* Motivation */}
          <div className="about-intro">
            <span className="section-label">Our Mission</span>
            <h2>Motivation</h2>
            <p>
              We chose this project to deliver high-quality furniture experiences
              that blend modern aesthetics with thoughtful craftsmanship. Every
              piece is selected to bring warmth and character to your space.
            </p>
          </div>

          {/* Tech stack */}
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="section-label">Built With</span>
            <h2 className="section-title" style={{ marginBottom: "20px" }}>Tech Stack</h2>
            <div className="tech-icons">
              <i className="fab fa-html5" title="HTML5" />
              <i className="fab fa-css3-alt" title="CSS3" />
              <i className="fab fa-react" title="React" />
              <i className="fab fa-node-js" title="Node.js" />
              <i className="fas fa-database" title="Database" />
            </div>
          </div>

          {/* Team */}
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <span className="section-label">The People</span>
            <h2 className="section-title">Meet the Team</h2>
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div className="team-card" key={member.name}>
                <h3>{member.name}</h3>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "10px",
                  }}
                >
                  {member.role}
                </p>
                <p>{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                  style={{ display: "inline-flex" }}
                >
                  <i className="fab fa-linkedin" />
                  Hire me
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
