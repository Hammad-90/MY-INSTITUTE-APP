import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Instructors from "./pages/Instructors";
import InstructorDetails from "./pages/InstructorDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <main>

        <Routes>

          {/* Static Routes */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/courses"
            element={<Courses />}
          />

          {/* Dynamic Course Route */}

          <Route
            path="/courses/:id"
            element={<CourseDetails />}
          />

          <Route
            path="/instructors"
            element={<Instructors />}
          />

          {/* Dynamic Instructor Route */}

          <Route
            path="/instructors/:id"
            element={<InstructorDetails />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* 404 Catch-All Route */}

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
