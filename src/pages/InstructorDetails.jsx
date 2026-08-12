import React from "react";
import {
  useParams,
  useNavigate
} from "react-router-dom";

import { instructors } from "../data/data";

function InstructorDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const instructor = instructors.find(
    (item) => item.id === Number(id)
  );

  if (!instructor) {
    return (
      <section className="not-found">
        <h1>Instructor Not Found</h1>

        <button
          className="primary-button"
          onClick={() => navigate("/instructors")}
        >
          Back to Instructors
        </button>
      </section>
    );
  }

  return (
    <section className="instructor-details">

      <div className="profile-image">
        <img
          src={instructor.image}
          alt={instructor.name}
        />
      </div>

      <div className="profile-content">

        <span className="section-label">
          INSTRUCTOR PROFILE
        </span>

        <h1>{instructor.name}</h1>

        <h3>{instructor.designation}</h3>

        <p>
          {instructor.bio}
        </p>

        <div className="profile-stats">

          <div>
            <span>Expertise</span>
            <strong>{instructor.expertise}</strong>
          </div>

          <div>
            <span>Experience</span>
            <strong>{instructor.experience}</strong>
          </div>

        </div>

        <button
          className="primary-button"
          onClick={() => navigate("/contact")}
        >
          Contact Institute →
        </button>

      </div>

    </section>
  );
}

export default InstructorDetails;