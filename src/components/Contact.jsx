import { useState } from 'react';
import { HiMail, HiLocationMarker, HiCheckCircle } from 'react-icons/hi';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setResult('Sending...');

    const formData = new FormData(e.target);
    formData.append('access_key', '94072505-089b-49c9-b843-bbbae6397cae');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setResult('Message sent successfully. I\'ll get back to you soon.');
        e.target.reset();
      } else {
        setResult(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setResult('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project, an opportunity, or just want to connect? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info-col">
            <div className="contact-info-card card">
              <div className="contact-availability">
                <HiCheckCircle className="avail-icon" />
                <span className="mono">Available for new projects</span>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <HiMail />
                </div>
                <div>
                  <p className="contact-detail-label mono">Email</p>
                  <a href="mailto:khalidbinalikhan@gmail.com" className="contact-detail-value">
                    khalidbinalikhan@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <HiLocationMarker />
                </div>
                <div>
                  <p className="contact-detail-label mono">Location</p>
                  <p className="contact-detail-value">Pakistan — Remote / Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <form className="contact-form card" onSubmit={onSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label mono">Name</label>
                  <input type="text" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label className="form-label mono">Email</label>
                  <input type="email" name="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label mono">Subject</label>
                <input type="text" name="subject" placeholder="What's this about?" />
              </div>
              <div className="form-group">
                <label className="form-label mono">Message</label>
                <textarea name="message" placeholder="Tell me about your project..." rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Message'}
              </button>

              {result && (
                <p className={`form-result mono ${result.includes('successfully') ? 'success' : 'error'}`}>
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
