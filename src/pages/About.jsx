import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <>

      <section className="page-hero">
        <span className="section-label">ABOUT EDUNOVA</span>

        <h1>
          Empowering The
          <span> Next Generation</span>
        </h1>

        <p>
          We believe quality education should be practical,
          accessible and designed for the future.
        </p>
      </section>

      <section className="about-section">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
            alt="Students"
          />

          <div className="experience-box">
            <strong>10+</strong>
            <span>Years of Excellence</span>
          </div>
        </div>

        <div className="about-content">

          <span className="section-label">
            WHO WE ARE
          </span>

          <h2>
            More Than Just
            <span> A Classroom</span>
          </h2>

          <p>
            EduNova is a professional education and training
            institute dedicated to helping students develop
            modern, practical and career-ready skills.
          </p>

          <p>
            Our learning environment combines expert mentorship,
            hands-on projects and industry-focused curriculum.
          </p>

          <button
            className="primary-button"
            onClick={() => navigate("/courses")}
          >
            Explore Our Courses →
          </button>

        </div>

      </section>

      <section className="stats-section">

        <div className="stat-item">
          <strong>5,000+</strong>
          <span>Students</span>
        </div>

        <div className="stat-item">
          <strong>30+</strong>
          <span>Courses</span>
        </div>

        <div className="stat-item">
          <strong>25+</strong>
          <span>Instructors</span>
        </div>

        <div className="stat-item">
          <strong>10+</strong>
          <span>Years Experience</span>
        </div>

      </section>

      <section className="mission-section">

        <div className="mission-card">
          <div className="mission-icon">🎯</div>
          <h2>Our Mission</h2>
          <p>
            To provide practical and accessible education that
            enables students to build successful careers.
          </p>
        </div>

        <div className="mission-card">
          <div className="mission-icon">🚀</div>
          <h2>Our Vision</h2>
          <p>
            To become a leading technology education institute
            that inspires innovation and lifelong learning.
          </p>
        </div>

      </section>

    </>
  );
}

export default About;