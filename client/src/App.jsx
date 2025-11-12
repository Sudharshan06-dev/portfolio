// File: App.jsx
import { useState, useEffect } from 'react';
import TopNav from './components/TopNav';
import Dock from './components/Dock';
import LandingPage from './components/LandingPage';
import { motion, AnimatePresence } from 'framer-motion';
import ExperienceSection from './components/sections/ExperienceSection';
import EducationSection from './components/sections/EducationSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import ChatAssistantInterface from './components/ChatAssistant';

function App() {
  const [windows, setWindows] = useState({});
  const [maximizedKey, setMaximizedKey] = useState(null);
  const [tabOrder, setTabOrder] = useState([]);
  const [isDarkMode, setDarkMode] = useState(true);
  const [showLanding, setShowLanding] = useState(true);

  const toggleTheme = () => setDarkMode(!isDarkMode);

  const maximizeWindow = (key) => {
    setMaximizedKey(key);
    setShowLanding(false); // always hide landing when maximizing
    if (!tabOrder.includes(key)) {
      setTabOrder((prev) => [...prev, key]);
    }
  };

  const restoreWindow = () => {
    setMaximizedKey(null);
    setShowLanding(true);
  };

  const closeWindow = (key) => {
    setWindows((prev) => ({ ...prev, [key]: false }));
    if (maximizedKey === key) restoreWindow();

    const newTabs = tabOrder.filter((item) => item !== key);
    setTabOrder(newTabs);

    if (newTabs.length === 0) setShowLanding(true); // show landing if no tabs
  };


  const openWindow = (key) => {
    setWindows((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => maximizeWindow(key), 0);
  };

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, [isDarkMode]);

  const sectionContent = {
    about: {
      full: (
        <div className="space-y-2">
          <p>👋 Hi! I'm Sudharshan Madhavan, a passionate Software Engineer focused on backend development and cloud architecture.</p>
          <p>🔭 Currently pursuing M.S. in Software Engineering at California State University, Fullerton.</p>
          <p>⚙️ Tech Stack: FastAPI, Spring Boot, AWS, Docker, Kubernetes, PostgreSQL, MongoDB.</p>
        </div>
      ),
    },
    education: {
      full: <EducationSection/>
    },
    experience: {
      full: <ExperienceSection />,
    },
    projects: {
      full: <ProjectsSection/>
    },
    contact: {
      full: <ContactSection/>
    },
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 text-black dark:text-white font-sans overflow-hidden relative">
      {!maximizedKey && <TopNav toggleTheme={toggleTheme} openWindow={openWindow} windows={windows} />}

      {showLanding && !maximizedKey && (
          <LandingPage onExplore={() => setShowLanding(false)} />
      )}

      {tabOrder.length > 0 && !maximizedKey && (
        <div className="absolute top-12 left-0 right-0 px-6 py-1 bg-slate-100 dark:bg-slate-800 border-b border-slate-300 dark:border-slate-700 flex space-x-3 z-40">
          {tabOrder.map((key) => (
            <div
              key={key}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-300 dark:bg-slate-700 text-sm text-black dark:text-white shadow cursor-pointer hover:brightness-105 transition"
              onClick={() => maximizeWindow(key)}
            >
              <span className="capitalize font-medium">{key}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeWindow(key);
                }}
                className="text-xs text-red-500 hover:text-red-400"
              >✕</button>
            </div>
          ))}
        </div>
      )}

      <div className="absolute inset-0 pt-20 px-6 pb-10">
        <AnimatePresence>
          {maximizedKey && !showLanding && (
            <motion.div
              key={maximizedKey}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg text-black dark:text-white z-40 rounded-lg shadow-xl overflow-auto transition-all duration-300"
            >
              <div className="relative flex items-center px-6 py-3 bg-slate-200/80 dark:bg-slate-800/80 backdrop-blur-sm border-b border-slate-300 dark:border-slate-700 shadow-inner">
                <div className="absolute left-6 flex space-x-2">
                  <button className="w-3 h-3 rounded-full bg-red-500" onClick={() => closeWindow(maximizedKey)} title="Close" />
                  <button className="w-3 h-3 rounded-full bg-yellow-400" onClick={restoreWindow} title="Minimize" />
                  <div className="w-3 h-3 rounded-full bg-gray-400 opacity-60 cursor-not-allowed" title="Maximize (unavailable)" />
                </div>
                <h1 className="mx-auto text-lg md:text-xl font-semibold capitalize animate-fade-in">
                  {maximizedKey}
                </h1>
              </div>
              <div className="p-6 md:p-10">
                {sectionContent[maximizedKey]?.full}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Dock toggleWindow={openWindow} />
    </div>
  );
}

export default App;