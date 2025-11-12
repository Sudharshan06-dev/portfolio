// File: TopNav.jsx
import React, { useState } from 'react';

const TopNav = ({ toggleTheme, openWindow, windows }) => {
  const [showAbout, setShowAbout] = useState(false);

  const sections = ['education', 'experience', 'projects', 'contact'];

  return (
    <div className="fixed top-0 left-0 right-0 h-12 bg-gradient-to-r from-slate-300/90 to-slate-200/90 dark:from-slate-900/90 dark:to-slate-800/90 backdrop-blur-md flex items-center justify-between px-4 z-50 text-sm font-medium text-gray-900 dark:text-white shadow">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setShowAbout(!showAbout)}
          className="bg-slate-600 text-white px-2 py-1 rounded-full text-xs font-bold hover:bg-slate-700 cursor-pointer shadow-sm"
        >
          SM
        </button>

        {sections.map((key) => (
          <button
            key={key}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${windows[key] ? 'bg-blue-500 text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-700'}`}
            onClick={() => openWindow(key)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopNav;