import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>
            <span>E</span> EduNova
          </h2>

          <p>
            Empowering students with modern skills,
            practical knowledge and career-focused education.
          </p>

          <div className="socials">
            <span>f</span>
            <span>in</span>
            <span>𝕏</span>
            <span>◎</span>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/instructors">Instructors</Link>
        </div>

        <div className="footer-column">
          <h3>Courses</h3>

          <Link to="/courses/1">Web Development</Link>
          <Link to="/courses/2">React JS</Link>
          <Link to="/courses/3">JavaScript</Link>
          <Link to="/courses/4">UI/UX Design</Link>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <p>📍 Karachi, Pakistan</p>
          <p>📞 +92 300 1234567</p>
          <p>✉ hello@edunova.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 EduNova Institute. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;