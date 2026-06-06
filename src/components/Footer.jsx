import { Link } from 'react-router-dom';
import { SiGithub, SiLinkedin, SiX, SiGmail } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo mono gradient-text">KHALID</Link>
            <p className="footer-tagline">
              Full Stack Software Engineer &amp; AI Developer — building intelligent systems at scale.
            </p>
            <div className="footer-socials">
              <a href="https://github.com/khalidd3v" target="_blank" rel="noreferrer" aria-label="GitHub">
                <SiGithub />
              </a>
              <a href="https://linkedin.com/in/khalidd3v" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <SiLinkedin />
              </a>
              <a href="https://x.com/khalidd3v" target="_blank" rel="noreferrer" aria-label="X">
                <SiX />
              </a>
              <a href="mailto:khalidbinalikhan@gmail.com" aria-label="Email">
                <SiGmail />
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <h4 className="mono footer-heading">Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="mono footer-heading">Contact</h4>
            <p>Pakistan</p>
            <p>+92 34747 91942</p>
            <p>
              <a href="mailto:khalidbinalikhan@gmail.com">
                khalidbinalikhan@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy mono">
            &copy; {year} Khalid Ali Khan. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="https://github.com/khalidd3v" target="_blank" rel="noreferrer">GitHub</a>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
