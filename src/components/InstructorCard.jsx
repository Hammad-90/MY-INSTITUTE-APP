import React from "react";
import { useNavigate } from "react-router-dom";

function InstructorCard({ instructor }) {
  const navigate = useNavigate();

  return (
    <div className="instructor-card">

      <div className="instructor-image">
        <img src={instructor.image} alt={instructor.name} />
      </div>

      <div className="instructor-content">

        <h3>{instructor.name}</h3>

        <p className="designation">
          {instructor.designation}
        </p>

        <div className="instructor-info">
          <span>
            <strong>Expertise</strong>
            {instructor.expertise}
          </span>

          <span>
            <strong>Experience</strong>
            {instructor.experience}
          </span>
        </div>

        <button
          className="outline-button"
          onClick={() =>
            navigate(`/instructors/${instructor.id}`)
          }
        >
          View Profile →
        </button>

      </div>

    </div>
  );
}

export default InstructorCard;