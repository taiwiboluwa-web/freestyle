"use client";

import { useState } from "react";

const projects = [
  {
    title: "Nocturne",
    type: "Brand world / Digital",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=85",
    className: "project-large",
  },
  {
    title: "Forma House",
    type: "Identity / Architecture",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
    className: "project-tall",
  },
  {
    title: "Afterglow",
    type: "Campaign / Motion",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=85",
    className: "project-wide",
  },
];

export const HomeView = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <header className="nav">
        <a className="brand" href="#top" aria-label="Freestyle home">
          FREESTYLE<span>®</span>
        </a>
        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
        >
          <span />
          <span />
          <b>{menuOpen ? "Close" : "Menu"}</b>
        </button>
        <nav id="site-menu" className={`nav-links ${menuOpen ? "is-visible" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-kicker"><span>01</span><span>Independent creative studio</span></div>
        <div className="hero-title-wrap">
          <h1>Make it<br /><em>impossible</em><br />to ignore.</h1>
          <p className="hero-copy">
            Freestyle builds identities, digital experiences and campaigns for brands
            that want to look as ambitious as they feel.
          </p>
        </div>
        <a className="circle-cta" href="#work" aria-label="Explore selected work">↘</a>
        <div className="hero-meta"><span>Lagos · Worldwide</span><span>Available for select projects — 2026</span></div>
      </section>

      <section id="work" className="work section-pad">
        <div className="section-heading"><span>02 / Selected work</span><span>Scroll to explore</span></div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project ${project.className}`} key={project.title}>
              <a href="#contact" className="project-image" style={{ backgroundImage: `url(${project.image})` }} aria-label={`Discuss ${project.title}`}>
                <span className="project-index">0{index + 1}</span>
                <span className="project-arrow">↗</span>
              </a>
              <div className="project-info"><h2>{project.title}</h2><span>{project.type}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="statement section-pad">
        <div className="section-heading"><span>03 / The studio</span><span>Small team, big swing</span></div>
        <div className="statement-grid">
          <p className="statement-lead">We turn <i>good ideas</i> into cultural signals.</p>
          <div className="statement-copy">
            <p>Freestyle is a multidisciplinary studio for founders, teams and organisations ready for a sharper point of view. Strategy, design and technology live together here.</p>
            <a className="text-link" href="#contact">Start a conversation <span>↗</span></a>
          </div>
        </div>
      </section>

      <section id="services" className="services section-pad">
        <div className="section-heading"><span>04 / Capabilities</span><span>What we make</span></div>
        <div className="service-list">
          {["Brand strategy", "Visual identity", "Websites & digital", "Campaigns & content", "Creative direction"].map((item, index) => (
            <div className="service-row" key={item}><span>0{index + 1}</span><h2>{item}</h2><span className="service-arrow">↗</span></div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-top"><span>05 / Let&apos;s make something</span><span>hello@freestyle.studio</span></div>
        <h2>Have a brave<br /><em>idea?</em></h2>
        <a className="contact-link" href="mailto:hello@freestyle.studio">hello@freestyle.studio <span>↗</span></a>
        <footer><span>FREESTYLE®</span><span>© 2026</span><span>Lagos / Nigeria</span></footer>
      </section>
    </main>
  );
};
