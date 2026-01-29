import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import './About.css'; // Reusing some base styles for consistency

const Privacy = ({ onBack }) => {
    return (
        <div className="privacy-page container" style={{ padding: '8rem 0', minHeight: '100vh' }}>
            <button
                onClick={onBack}
                className="btn btn-outline btn-small"
                style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
                <HiArrowLeft /> Back to Home
            </button>

            <h1 className="section-title" style={{ marginBottom: '2rem' }}>Privacy <span className="gradient-text">Policy</span></h1>

            <div className="glass" style={{ padding: '3rem', borderRadius: '24px', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    <strong>Last Updated: January 2026</strong>
                </p>

                <h2 style={{ color: 'white', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Information Collection</h2>
                <p>
                    This portfolio website is a static showcase. We do not collect personal information from visitors
                    unless you voluntarily provide it through the contact form (Name, Email, Message).
                </p>

                <h2 style={{ color: 'white', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Use of Information</h2>
                <p>
                    Any information submitted through the contact form is used solely for the purpose of communicating with you
                    regarding your inquiry. We do not share or sell your information to third parties.
                </p>

                <h2 style={{ color: 'white', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Cookies</h2>
                <p>
                    We may use basic analytical cookies to understand site traffic and improve user experience. These do not
                    identify individual users.
                </p>

                <h2 style={{ color: 'white', marginTop: '2.5rem', marginBottom: '1rem' }}>4. External Links</h2>
                <p>
                    This site contains links to external platforms such as GitHub, LinkedIn, and social media.
                    We are not responsible for the privacy practices of those third-party sites.
                </p>

                <h2 style={{ color: 'white', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Contact</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at
                    <strong> khalidbinalikhan@gmail.com</strong>.
                </p>
            </div>
        </div>
    );
};

export default Privacy;
