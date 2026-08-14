"use client";

import { useState } from "react";

const projects = [
  {
    title: "Kefas Food",
    type: "Brand / E-commerce website",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85",
    className: "project-large",
  },
  {
    title: "Shins Empire",
    type: "Identity / Digital experience",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
    className: "project-tall",
  },
  {
    title: "School Stories",
    type: "Content / Creative direction",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=85",
    className: "project-wide",
  },
];

const services = [
  "Brand strategy & identity",
  "Websites & digital experiences",
  "Graphic design & campaigns",
  "Photography & videography",
  "Livestreaming & broadcast",
  "Content creation & creative direction",
];

export const HomeView = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <header className="nav">
        <a className="brand" href="#top" aria-label="BlueHaven Studios home">
          BLUEHAVEN<span>®</span>
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
        <div className="hero-kicker"><span>01</span><span>Creating beyond limits</span></div>
        <div className="hero-title-wrap">
          <h1>Make it<br /><em>impossible</em><br />to ignore.</h1>
          <p className="hero-copy">
            BlueHaven Studios creates brands, websites, content and visual experiences
            for people and organisations ready to be seen differently.
          </p>
        </div>
        <a className="circle-cta" href="#work" aria-label="Explore selected work">↘</a>
        <div className="hero-meta"><span>Lagos · Nigeria · Worldwide</span><span>Creative studio · Available for projects</span></div>
      </section>

      <section id="work" className="work section-pad">
        <div className="section-heading"><span>02 / Selected work</span><span>Built by BlueHaven</span></div>
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
        <div className="section-heading"><span>03 / The studio</span><span>Creativity beyond limits</span></div>
        <div className="statement-grid">
          <p className="statement-lead">We turn <i>good ideas</i> into memorable experiences.</p>
          <div className="statement-copy">
            <p>BlueHaven Studios is a multidisciplinary creative studio working across branding, design, technology, media and storytelling. We help businesses, schools, organisations and creators turn ideas into work people remember.</p>
            <a className="text-link" href="#contact">Start a conversation <span>↗</span></a>
          </div>
        </div>
      </section>

      <section id="services" className="services section-pad">
        <div className="section-heading"><span>04 / Capabilities</span><span>What we make</span></div>
        <div className="service-list">
          {services.map((item, index) => (
            <div className="service-row" key={item}><span>0{index + 1}</span><h2>{item}</h2><span className="service-arrow">↗</span></div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-top"><span>05 / Let&apos;s make something</span><span>bluehavens.studios@gmail.com</span></div>
        <h2>Have a brave<br /><em>idea?</em></h2>
        <div className="contact-actions">
          <a className="contact-link" href="mailto:bluehavens.studios@gmail.com">bluehavens.studios@gmail.com <span>↗</span></a>
          <a className="contact-link" href="tel:+2348068483718">+234 806 848 3718 <span>↗</span></a>
          <a className="contact-link" href="https://bluehavens.name.ng" target="_blank" rel="noreferrer">bluehavens.name.ng <span>↗</span></a>
        </div>
        <footer><span>BLUEHAVEN STUDIOS®</span><span>© 2026</span><span>Lagos / Nigeria</span></footer>
      </section>
    </main>
  );
};
