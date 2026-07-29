import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ProjectsDetails from './components/ProjectsDetails/ProjectsDetails';
import Certificates from './components/Certifications/Certifications';
import NotFound from './components/NotFound/NotFound';
import Loader from './components/Loader/Loader';
import './App.css';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Check if we're on a project details page
  const isProjectDetails = location.pathname.startsWith('/projects/');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Loader />

      {/* Global background elements */}
      <div className="grid-pattern" aria-hidden="true" />
      
      <Navbar />
      <main className="main-content">
        <Routes>
          {/* Home page with all sections */}
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Certificates />
              <Contact />
            </>
          } />
          
          {/* Projects list page (if you want a separate page) */}
          <Route path="/projects" element={<Projects />} />
          
          {/* Individual project details page */}
          <Route path="/projects/:id" element={<ProjectsDetails />} />

          {/* Catch-all: any unmatched route shows the 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      
      {showScrollTop && !isProjectDetails && (
        <button 
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg className="scroll-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;