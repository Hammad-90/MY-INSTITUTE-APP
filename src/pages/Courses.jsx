import React from "react";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/data";

function Courses() {
  return (
    <>

      <section className="page-hero">
        <span className="section-label">
          OUR COURSES
        </span>

        <h1>
          Skills That
          <span> Shape Careers</span>
        </h1>

        <p>
          Explore our professional courses designed to
          turn your passion into practical expertise.
        </p>
      </section>

      <section className="section">

        <div className="course-grid">

          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}

        </div>

      </section>

    </>
  );
}

export default Courses;