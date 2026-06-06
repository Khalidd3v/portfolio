import { Link } from 'react-router-dom';
import { HiArrowRight, HiDocumentText, HiLocationMarker } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="hero-status mono">
          <span className="hero-status-text">{'>'} status: available_for_hire</span>
          <span className="hero-cursor">_</span>
        </div>

        <h1 className="hero-title">
          Khalid <span className="gradient-text">Ali Khan</span>
        </h1>

        <p className="hero-role mono">
          Full Stack Software Engineer &amp; AI Developer
        </p>

        <p className="hero-description">
          Building intelligent systems that scale — from AI-powered SaaS platforms
          to real-time ML pipelines. Currently engineering KPIs, AI workflows, and
          data science solutions at <span className="highlight">Qurk</span>.
        </p>

        <div className="hero-meta">
          <span className="hero-location">
            <HiLocationMarker /> Pakistan — Remote / Worldwide
          </span>
        </div>

        <div className="hero-actions">
          <Link to="/projects" className="btn btn-primary btn-lg">
            View Projects <HiArrowRight />
          </Link>
          <a
            href="/resume/Khalid_Ali_Khan.pdf"
            download
            className="btn btn-outline btn-lg"
          >
            <HiDocumentText /> Download CV
          </a>
          <a
            href="https://github.com/khalidd3v"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-lg hero-github-btn"
            aria-label="GitHub"
          >
            <SiGithub />
          </a>
        </div>
      </div>

      <div className="hero-bg">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-grid" />
      </div>
    </section>
  );
};

export default Hero;
