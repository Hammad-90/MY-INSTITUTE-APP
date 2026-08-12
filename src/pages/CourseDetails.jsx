import React from "react";
import {
  useParams,
  useNavigate
} from "react-router-dom";

import { courses } from "../data/data";

function CourseDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  if (!course) {
    return (
      <section className="not-found">
        <h1>Course Not Found</h1>

        <button
          className="primary-button"
          onClick={() => navigate("/courses")}
        >
          Back to Courses
        </button>
      </section>
    );
  }

  return (
    <section className="details-page">

      <div className="details-image">
        <img
          src={course.image}
          alt={course.name}
        />
      </div>

      <div className="details-content">

        <span className="section-label">
          COURSE DETAILS
        </span>

        <h1>{course.name}</h1>

        <p className="details-description">
          {course.description}
        </p>

        <div className="details-meta">

          <div>
            <span>Duration</span>
            <strong>{course.duration}</strong>
          </div>

          <div>
            <span>Level</span>
            <strong>{course.level}</strong>
          </div>

          <div>
            <span>Instructor</span>
            <strong>{course.instructor}</strong>
          </div>

        </div>

        <h2>What You'll Learn</h2>

        <div className="feature-list">

          {course.features.map(
            (feature, index) => (
              <div key={index}>
                <span>✓</span>
                {feature}
              </div>
            )
          )}

        </div>

        <div className="details-buttons">

          <button
            className="primary-button"
            onClick={() => navigate("/contact")}
          >
            Enroll Now →
          </button>

          <button
            className="secondary-button"
            onClick={() => navigate("/courses")}
          >
            ← Back to Courses
          </button>

        </div>

      </div>

    </section>
  );
}

export default CourseDetails;