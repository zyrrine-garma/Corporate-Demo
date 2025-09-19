// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Shared Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Landing Page Sections
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

// Separate About Us Page
import AboutUs from "./components/AboutUs";

// Scroll reset on navigation
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <div className="App font-sans text-gunmetal">
              <Navbar />
              <Hero />
              <About />
              <Services />
              <Testimonials />
              <Contact />
              <Footer />
            </div>
          }
        />

        {/* About Us Page */}
        <Route
          path="/about"
          element={
            <div className="App font-sans text-gunmetal">
              <Navbar />
              <AboutUs />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
