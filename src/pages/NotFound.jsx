import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function NotFound() {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section className="not-found">

      <div className="error-number">
        404
      </div>

      <span className="section-label">
        PAGE NOT FOUND
      </span>

      <h1>
        Looks Like You Took
        <span> A Wrong Turn</span>
      </h1>

      <p>
        The page
        <strong> {location.pathname} </strong>
        doesn't exist.
      </p>

      <button
        className="primary-button"
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>

    </section>
  );
}

export default NotFound;