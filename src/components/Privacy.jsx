import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

const Privacy = () => {
  return (
    <section style={{ padding: '8rem 0', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link to="/" className="btn btn-outline" style={{ marginBottom: '2.5rem' }}>
          <HiArrowLeft /> Back to Home
        </Link>

        <h1 className="section-title" style={{ marginBottom: '1rem' }}>
          Privacy <span className="gradient-text">Policy</span>
        </h1>

        <div className="card" style={{ padding: '2.5rem', lineHeight: 1.8, color: 'hsl(var(--text-secondary))' }}>
          <p className="mono" style={{ marginBottom: '1.5rem', fontSize: '0.82rem', color: 'hsl(var(--text-muted))' }}>
            <strong>Last Updated: January 2026</strong>
          </p>

          <h2 style={{ color: 'hsl(var(--text-primary))', fontSize: '1.1rem', marginTop: '2rem', marginBottom: '0.75rem' }}>1. Information Collection</h2>
          <p style={{ fontSize: '0.9rem' }}>
            This portfolio website is a static showcase. We do not collect personal information from visitors
            unless you voluntarily provide it through the contact form (Name, Email, Message).
          </p>

          <h2 style={{ color: 'hsl(var(--text-primary))', fontSize: '1.1rem', marginTop: '2rem', marginBottom: '0.75rem' }}>2. Use of Information</h2>
          <p style={{ fontSize: '0.9rem' }}>
            Any information submitted through the contact form is used solely for the purpose of communicating with you
            regarding your inquiry. We do not share or sell your information to third parties.
          </p>

          <h2 style={{ color: 'hsl(var(--text-primary))', fontSize: '1.1rem', marginTop: '2rem', marginBottom: '0.75rem' }}>3. Cookies</h2>
          <p style={{ fontSize: '0.9rem' }}>
            We may use basic analytical cookies to understand site traffic and improve user experience.
            These do not identify individual users.
          </p>

          <h2 style={{ color: 'hsl(var(--text-primary))', fontSize: '1.1rem', marginTop: '2rem', marginBottom: '0.75rem' }}>4. External Links</h2>
          <p style={{ fontSize: '0.9rem' }}>
            This site contains links to external platforms such as GitHub, LinkedIn, and social media.
            We are not responsible for the privacy practices of those third-party sites.
          </p>

          <h2 style={{ color: 'hsl(var(--text-primary))', fontSize: '1.1rem', marginTop: '2rem', marginBottom: '0.75rem' }}>5. Contact</h2>
          <p style={{ fontSize: '0.9rem' }}>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <strong style={{ color: 'hsl(var(--text-primary))' }}>khalidbinalikhan@gmail.com</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
