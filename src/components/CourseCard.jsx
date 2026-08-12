import React from "react";
import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <div className="course-card">

      <div className="course-image-wrapper">
        <img src={course.image} alt={course.name} />

        <span className="level-badge">
          {course.level}
        </span>
      </div>

      <div className="course-content">

        <h3>{course.name}</h3>

        <p>{course.description}</p>

        <div className="course-meta">
          <span>⏱ {course.duration}</span>
          <span>📚 {course.level}</span>
        </div>

        <button
          className="outline-button"
          onClick={() => navigate(`/courses/${course.id}`)}
        >
          View Details →
        </button>

      </div>

    </div>
  );
}

export default CourseCard;