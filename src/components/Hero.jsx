import React from 'react';
import { HiDownload, HiDocumentText } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-content">
                <div className="hero-badge" style={{ color: "white" }}>Hello & Welcome</div>
                <h1 className="hero-title">
                    This is <span className="gradient-text">Khalid Ali Khan</span>
                </h1>

                <p className="hero-subtitle">
                    Creative Developer specializing in scaling SaaS platforms,
                    architecting RESTful APIs, and building intelligent AI solutions.
                </p>
                <div className="hero-actions">
                    <a href="https://github.com/khalidd3v" target="_blank" rel="noreferrer" className="btn btn-primary btn-small">
                        <SiGithub /> Github
                    </a>
                    <a href="/resume/Khalid_Ali_Khan.pdf" download className="btn btn-outline btn-small cv-btn">
                        <HiDocumentText /> Resume
                    </a>
                </div>
            </div>
            <div className="hero-background">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </div>
        </section>
    );
};

export default Hero;
