import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

const NotFound = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '8rem 0',
    }}>
      <div className="container">
        <h1 className="mono" style={{
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          fontWeight: '900',
          color: 'hsl(var(--accent-1))',
          opacity: '0.2',
          lineHeight: '1',
          marginBottom: '1rem',
        }}>404</h1>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>
          Page not <span className="gradient-text">found</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          <HiArrowLeft /> Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
