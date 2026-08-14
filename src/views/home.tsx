"use client";

import { createElement, useEffect, useState } from "react";

const ASSET = "https://api.getlayers.ai/storage/v1/object/public/public/assets/soda-14ff8a788d";
const LOOPSTACK_ASSET = "https://api.getlayers.ai/storage/v1/object/public/public/assets/loopstack-f8c64439bf";
const projects = [
  { title: "Kefas Food", type: "Brand / E-commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85" },
  { title: "Shins Empire", type: "Identity / Digital", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85" },
  { title: "School Stories", type: "Content / Creative Direction", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=85" },
];

export const HomeView = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [flavor, setFlavor] = useState<"classic" | "blue">("classic");

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  const modelViewer = createElement("model-viewer", { className: "bluehaven-model", src: `${ASSET}/deit_soda2.glb`, environmentImage: "neutral", exposure: "1.5", cameraOrbit: "0deg 90deg 380%", fieldOfView: "30deg", disableZoom: true, interactionPrompt: "none" });

  return (
    <main className={`bluehaven-experience ${flavor === "blue" ? "blue-theme" : ""}`}>
      <div className="soda-bubbles" />
      <header className="soda-header">
        <a className="soda-logo" href="#top" aria-label="BlueHaven Studios home"><span>BH</span> BlueHaven</a>
        <nav className={`soda-nav ${menuOpen ? "open" : ""}`}>
          <a href="#top" onClick={() => setMenuOpen(false)}>Home</a><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a><a href="#cosmic" onClick={() => setMenuOpen(false)}>Cosmic</a><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <button className="soda-contact" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>Let&apos;s Talk</button>
        <button className="soda-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"}</button>
      </header>

      <section id="top" className="soda-hero">
        <div className="soda-leaves"><span>✦</span><span>✧</span><span>✦</span><span>✧</span></div>
        <div className="soda-hero-left"><p className="eyebrow">01 · CREATIVE STUDIO · LAGOS / NIGERIA</p><h1><span>Beyond</span><br />limits.</h1><p className="soda-description">BlueHaven Studios builds bold identities, digital experiences and media that make brands impossible to ignore.</p><a className="soda-pill" href="#work">Explore our work <b>+</b></a><div className="soda-award"><strong>BLUEHAVEN</strong><span>CREATIVITY BEYOND LIMITS</span></div></div>
        <div className="soda-product" aria-hidden="true">{modelViewer}<div className="product-glow" /></div>
        <div className="soda-hero-right"><div className="soda-cards"><button className={`soda-card ${flavor === "classic" ? "active" : ""}`} onClick={() => setFlavor("classic")}><img src={`${ASSET}/Green%20Soda.png`} alt="BlueHaven creative" /><span>Creative</span><small>Brand & Design</small></button><button className={`soda-card ${flavor === "blue" ? "active" : ""}`} onClick={() => setFlavor("blue")}><img src={`${ASSET}/Blue%20Soda.png`} alt="BlueHaven digital" /><span>Digital</span><small>Web & Experiences</small></button></div><h2><span>Creativity</span><br />that moves.</h2></div>
        <div className="hero-scroll">SCROLL TO DISCOVER <span>↓</span></div>
      </section>

      <section id="experience" className="loopstack-section">
        <div className="loopstack-video"><video autoPlay muted loop playsInline><source src={`${LOOPSTACK_ASSET}/flower.mp4`} type="video/mp4" /></video></div><img className="loopstack-gradient" src={`${LOOPSTACK_ASSET}/black_gradient.svg`} alt="" />
        <div className="loopstack-content"><p className="loopstack-eyebrow">02 · DIGITAL EXPERIENCE</p><h2>Creating beyond<br /><em>limits.</em></h2><p>Digital experiences with motion, atmosphere and personality. We blend technology, design and storytelling to turn a website into an experience.</p><a className="loopstack-cta" href="mailto:bluehavens.studios@gmail.com"><span>Start a project</span><i /></a></div>
        <div className="loopstack-footer"><span>BLUEHAVEN STUDIOS</span><span>CREATIVITY BEYOND LIMITS</span><span>LAGOS / NIGERIA</span></div><div className="loopstack-wordmark">BlueHaven</div>
      </section>

      <section id="cosmic" className="cosmic-section">
        <iframe className="cosmic-frame" src="/cosmic-dust.html" title="BlueHaven Cosmic Dust" loading="lazy" />
        <div className="cosmic-overlay"><div><p>03 · COSMIC DUST</p><h2>Ideas in <em>motion.</em></h2><span>Procedural light · Digital atmosphere · Endless drift</span></div><a href="mailto:bluehavens.studios@gmail.com">Create an experience ↗</a></div>
      </section>

      <section id="work" className="soda-section work-section"><div className="soda-section-top"><span>04 / Selected work</span><span>Built by BlueHaven</span></div><div className="soda-work-grid">{projects.map((project, i) => <article className={`soda-work-card card-${i + 1}`} key={project.title}><a href="#contact" className="soda-work-image" style={{ backgroundImage: `url(${project.image})` }}><span>0{i + 1}</span><b>↗</b></a><h3>{project.title}</h3><p>{project.type}</p></article>)}</div></section>

      <section id="services" className="soda-section dark-section"><div className="soda-section-top"><span>05 / Capabilities</span><span>What we make</span></div><h2 className="big-statement">We make <em>ideas</em><br />feel real.</h2><div className="soda-services">{["Brand strategy & identity", "Websites & digital experiences", "Graphic design & campaigns", "Photography & videography", "Livestreaming & broadcast", "Content & creative direction"].map((s, i) => <div key={s}><span>0{i + 1}</span><b>{s}</b><i>↗</i></div>)}</div></section>

      <section id="about" className="soda-section about-section"><div className="soda-section-top"><span>06 / The studio</span><span>Creating beyond limits</span></div><div className="about-grid"><h2>Different<br /><em>by design.</em></h2><div><p>BlueHaven Studios is a multidisciplinary creative studio connecting brand strategy, design, technology, media and storytelling.</p><p>From school campaigns to business identities, websites and live productions, we turn ambitious ideas into experiences people remember.</p><a href="#contact">Start a conversation ↗</a></div></div></section>

      <section id="contact" className="soda-contact-section"><div className="soda-section-top"><span>07 / Let&apos;s make something</span><span>Available for projects</span></div><h2>Have a brave<br /><em>idea?</em></h2><div className="contact-links"><a href="mailto:bluehavens.studios@gmail.com">bluehavens.studios@gmail.com <span>↗</span></a><a href="tel:+2348068483718">+234 806 848 3718 <span>↗</span></a><a href="https://bluehavens.name.ng" target="_blank" rel="noreferrer">bluehavens.name.ng <span>↗</span></a></div><footer><span>BLUEHAVEN STUDIOS®</span><span>CREATIVITY BEYOND LIMITS</span><span>LAGOS / NIGERIA</span></footer></section>
    </main>
  );
};
