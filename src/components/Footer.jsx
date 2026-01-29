import React from 'react';
import { SiGithub, SiLinkedin, SiX, SiGmail } from 'react-icons/si';
import './Footer.css';

const Footer = ({ onShowPrivacy }) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">KHALIDD3V.</div>
                        <p className="footer-tagline">
                            Lead Backend Developer & AI Enthusiast. Building the future of digital
                            experiences with precision and passion.
                        </p>
                        <div className="footer-socials">
                            <a href="https://github.com/khalidd3v" target="_blank" rel="noreferrer" className="social-icon"><SiGithub /></a>
                            <a href="https://linkedin.com/in/khalidd3v" target="_blank" rel="noreferrer" className="social-icon"><SiLinkedin /></a>
                            <a href="https://x.com/khalidd3v" target="_blank" rel="noreferrer" className="social-icon"><SiX /></a>
                            <a href="mailto:khalidbinalikhan@gmail.com" className="social-icon"><SiGmail /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Get in Touch</h4>
                        <p>Pakistan 🇵🇰</p>
                        <p>+92 34747 91942</p>
                        <p>khalidbinalikhan@gmail.com</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Khalidd3v. All rights reserved.</p>
                    <div className="footer-legal">
                        <a target='_blank' href="https://github.com/khalidd3v">My Github</a>
                        <a href="#" onClick={onShowPrivacy}>Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
