import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-card glass">
                    <div className="contact-info">
                        <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
                        <p className="contact-text">
                            Have a project in mind or just want to chat? Feel free to reach out.
                            I'm always open to new opportunities and creative collaborations.
                        </p>
                        <div className="contact-details">
                            <div className="detail-item">
                                <span className="label">Email</span>
                                <span className="value">khalidbinalikhan@gmail.com</span>
                            </div>
                            <div className="detail-item">
                                <span className="label">Location</span>
                                <span className="value">Remote / Worldwide</span>
                            </div>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
