import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { courses } from "../data/data";
import CourseCard from "../components/CourseCard";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>

      <section className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            ✦ Future-ready education
          </div>

          <h1>
            Learn Skills.
            <br />
            <span>Build Your Future.</span>
          </h1>

          <p>
            Transform your career with practical, industry-focused
            courses taught by experienced professionals.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() => navigate("/courses")}
            >
              Explore Courses →
            </button>

            <button
              className="secondary-button"
              onClick={() => navigate("/about")}
            >
              Discover EduNova
            </button>

          </div>

          <div className="hero-stats">
            <div>
              <strong>5K+</strong>
              <span>Students</span>
            </div>

            <div>
              <strong>30+</strong>
              <span>Courses</span>
            </div>

            <div>
              <strong>25+</strong>
              <span>Instructors</span>
            </div>
          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-glow"></div>

          <div className="floating-card card-one">
            <span>🎓</span>
            <div>
              <strong>5,000+</strong>
              <small>Students Enrolled</small>
            </div>
          </div>

          <div className="hero-main-card">
            <div className="play-circle">▶</div>
            <p>Start Learning Today</p>
          </div>

          <div className="floating-card card-two">
            <span>⭐</span>
            <div>
              <strong>4.9/5</strong>
              <small>Student Rating</small>
            </div>
          </div>

        </div>

      </section>

      <section className="section">

        <div className="section-heading">

          <div>
            <span className="section-label">
              OUR COURSES
            </span>

            <h2>
              Learn From The
              <span> Best</span>
            </h2>
          </div>

          <button
            className="text-button"
            onClick={() => navigate("/courses")}
          >
            View All Courses →
          </button>

        </div>

        <div className="course-grid">
          {courses.slice(0, 3).map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>

      </section>

      <section className="why-section">

        <div className="why-content">

          <span className="section-label">
            WHY EDUNOVA?
          </span>

          <h2>
            Education That
            <span> Moves You Forward</span>
          </h2>

          <p>
            We combine expert instructors, practical projects
            and modern learning methods to prepare students
            for real-world careers.
          </p>

          <div className="features-grid">

            <div className="feature">
              <div>🎯</div>
              <h3>Career Focused</h3>
              <p>
                Skills designed around real industry needs.
              </p>
            </div>

            <div className="feature">
              <div>👨‍🏫</div>
              <h3>Expert Mentors</h3>
              <p>
                Learn directly from experienced professionals.
              </p>
            </div>

            <div className="feature">
              <div>💻</div>
              <h3>Practical Learning</h3>
              <p>
                Build real projects instead of just studying theory.
              </p>
            </div>

            <div className="feature">
              <div>🏆</div>
              <h3>Certification</h3>
              <p>
                Earn certificates that showcase your skills.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="cta-section">

        <div className="cta-content">

          <span className="section-label">
            START YOUR JOURNEY
          </span>

          <h2>
            Ready to Build Your
            <br />
            <span>Future?</span>
          </h2>

          <p>
            Join thousands of students learning the skills
            that matter today.
          </p>

          <button
            className="primary-button"
            onClick={() => navigate("/courses")}
          >
            Start Learning →
          </button>

        </div>

      </section>

    </>
  );
}

export default Home;