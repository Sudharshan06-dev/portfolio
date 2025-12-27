import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/NavbarSection'
import Landing from './components/LandingPage/LandingPage';
import Education from './components/Education/EducationSection';
import TechnicalSkills from './components/TechnicalSkills/TechnicalSkills';
import Experience from './components/Experience/ExperienceSection';
import Projects from './components/Projects/ProjectsSection';
import Resume from './components/Resume/ResumeSections';
import Contact from './components/Contact/ContactSection';
import './App.css';
import Certifications from './components/Certifications/Certification';

function App() {
  const [activeSection, setActiveSection] = useState('landing');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['landing', 'education', 'skills', 'experience', 'projects', 'certifications', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />
      <Landing />
      <Education />
      <TechnicalSkills/>
      <Experience />
      <Projects />
      <Certifications/>
      <Resume />
      <Contact />
    </div>
  );
}

export default App;