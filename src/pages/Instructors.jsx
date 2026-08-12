import React from "react";
import InstructorCard from "../components/InstructorCard";
import { instructors } from "../data/data";

function Instructors() {
  return (
    <>

      <section className="page-hero">
        <span className="section-label">
          OUR INSTRUCTORS
        </span>

        <h1>
          Learn From
          <span> Industry Experts</span>
        </h1>

        <p>
          Meet the experienced professionals who guide our
          students toward successful careers.
        </p>
      </section>

      <section className="section">

        <div className="instructor-grid">

          {instructors.map((instructor) => (
            <InstructorCard
              key={instructor.id}
              instructor={instructor}
            />
          ))}

        </div>

      </section>

    </>
  );
}

export default Instructors;