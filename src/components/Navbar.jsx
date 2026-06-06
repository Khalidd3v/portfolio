import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/#about', label: 'About' },
  { to: '/#contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const onKeyDown = (e) => { if (e.key === 'Escape') setOpen(false); };
      window.addEventListener('keydown', onKeyDown);
      return () => window.removeEventListener('keydown', onKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isActive = (to) => {
    if (to.startsWith('/#')) {
      return pathname === '/' && hash === to.slice(1);
    }
    return pathname === to;
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo mono" onClick={() => setOpen(false)}>
          <span className="gradient-text">KHALID</span>
        </Link>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={label}>
              <Link
                to={to}
                className={`nav-link mono ${isActive(to) ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {label}
                {isActive(to) && <span className="active-dot" />}
              </Link>
            </li>
          ))}
          <li className="nav-cta-mobile">
            <Link to="/projects" className="btn btn-primary" onClick={() => setOpen(false)}>
              View Work
            </Link>
          </li>
        </ul>

        <button
          className="menu-btn"
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}
    </nav>
  );
};

export default Navbar;
