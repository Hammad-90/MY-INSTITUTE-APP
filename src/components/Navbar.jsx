import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const navStyle = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div
          className="logo"
          onClick={() => navigate("/")}
        >
          <span className="logo-icon">E</span>
          <span>EduNova</span>
        </div>

        <div className="nav-links">
          <NavLink to="/" className={navStyle}>
            Home
          </NavLink>

          <NavLink to="/about" className={navStyle}>
            About
          </NavLink>

          <NavLink to="/courses" className={navStyle}>
            Courses
          </NavLink>

          <NavLink to="/instructors" className={navStyle}>
            Instructors
          </NavLink>

          <NavLink to="/contact" className={navStyle}>
            Contact
          </NavLink>
        </div>

        <button
          className="nav-button"
          onClick={() => navigate("/courses")}
        >
          Explore Courses
        </button>

      </div>
    </nav>
  );
}

export default Navbar;