import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NavTabs from "./components/NavTabs";

import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import ProjectDetails from "./components/pages/ProjectDetails"
import Contact from "./components/pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

import './app.css'; 



function App() {
  return (
    <Router>
      <Header />
      <NavTabs />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetails />} />
        {/* Define a route that will have descendant routes */}
        <Route path="contact/*" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
