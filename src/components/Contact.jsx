import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "94072505-089b-49c9-b843-bbbae6397cae");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message || "Error submitting form");
            }
        } catch (error) {
            console.error("Submission error", error);
            setResult("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    <form className="contact-form" onSubmit={onSubmit}>
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                        {result && (
                            <div className={`form-status ${result.includes('Successfully') ? 'success' : 'error'}`} style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>
                                {result}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
