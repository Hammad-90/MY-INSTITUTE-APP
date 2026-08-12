import React, { useState } from "react";

function Contact() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>

      <section className="page-hero">
        <span className="section-label">
          GET IN TOUCH
        </span>

        <h1>
          Let's Start Your
          <span> Learning Journey</span>
        </h1>

        <p>
          Have a question about our courses?
          We'd love to hear from you.
        </p>
      </section>

      <section className="contact-section">

        <div className="contact-info">

          <span className="section-label">
            CONTACT US
          </span>

          <h2>
            We're Here
            <span> To Help</span>
          </h2>

          <p>
            Reach out to our team for course information,
            admissions and any other questions.
          </p>

          <div className="contact-item">
            <div>📍</div>
            <div>
              <strong>Our Location</strong>
              <span>Karachi, Pakistan</span>
            </div>
          </div>

          <div className="contact-item">
            <div>📞</div>
            <div>
              <strong>Phone</strong>
              <span>+92 300 1234567</span>
            </div>
          </div>

          <div className="contact-item">
            <div>✉</div>
            <div>
              <strong>Email</strong>
              <span>hello@edunova.com</span>
            </div>
          </div>

        </div>

        <div className="contact-form">

          {submitted ? (
            <div className="success-message">
              <div>✓</div>
              <h2>Message Sent!</h2>
              <p>
                Thank you for contacting EduNova.
                Our team will get back to you soon.
              </p>

              <button
                className="primary-button"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    placeholder="+92 300 0000000"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    placeholder="Course inquiry"
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label>Message</label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="primary-button"
              >
                Send Message →
              </button>

            </form>
          )}

        </div>

      </section>

    </>
  );
}

export default Contact;