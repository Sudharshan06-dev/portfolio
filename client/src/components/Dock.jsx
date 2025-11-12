import React, { useState, useEffect, useRef } from 'react';
import { X, Download, FileText, Briefcase, Code } from 'lucide-react';

const Dock = () => {
  const [showResumeSelector, setShowResumeSelector] = useState(false);
  const resumeSelectorRef = useRef(null);

  const iconClass = "w-9 h-9 hover:scale-125 hover:-translate-y-1 transition-transform";

  // Sample resume options - you can customize these
  const resumeOptions = [
    {
      id: 1,
      title: "Software Engineer Resume",
      description: "Focused on software engineering and system design experience",
      icon: <Briefcase className="w-8 h-8 text-green-500" />,
      fileName: "Sudharshan_Madhavan_Software_Engineer_Resume.pdf",
      url: "https://drive.google.com/file/d/1eInpK0bjRP63EF4YdqFrwjizfCYf8uPh/view?usp=sharing"
    },
    {
      id: 2,
      title: "Cloud Engineer Resume",
      description: "Focused on cloud related work especially using cloud provider like AWS",
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      fileName: "Sudharshan_CloudEngineer_Resume.pdf",
      url: "https://drive.google.com/file/d/1MfObhNwFMbqApcXpEn3uECSIzugtNS-G/view?usp=sharing"
    },
     {
      id: 3,
      title: "Full Stack Developer Resume",
      description: "Comprehensive resume highlighting full-stack development experience",
      icon: <Code className="w-8 h-8 text-blue-500" />,
      fileName: "Sudharshan_FullStack_Engineer_Resume.pdf",
      url: "https://drive.google.com/file/d/1u8lppFfcrInH6hd11ZLsOzG8pA_DHdVH/view?usp=sharing"
    },
  ];

  // Close resume selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resumeSelectorRef.current && !resumeSelectorRef.current.contains(event.target)) {
        setShowResumeSelector(false);
      }
    };

    if (showResumeSelector) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showResumeSelector]);

  const handleResumeClick = (e) => {
    e.preventDefault();
    setShowResumeSelector(true);
  };

  const handleDownloadResume = (resume) => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = resume.url;
    link.target = '_blank';
    link.download = resume.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowResumeSelector(false);
  };

  return (
    <>
      {/* Resume Selector Popup */}
      {showResumeSelector && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div 
            ref={resumeSelectorRef}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 scale-100"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Select Resume
              </h3>
              <button
                onClick={() => setShowResumeSelector(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Resume Options */}
            <div className="space-y-3">
              {resumeOptions.map((resume) => (
                <div
                  key={resume.id}
                  onClick={() => handleDownloadResume(resume)}
                  className="flex items-center p-4 bg-gray-50 dark:bg-slate-700 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-600 cursor-pointer transition-colors group"
                >
                  <div className="flex-shrink-0 mr-4">
                    {resume.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-800 dark:text-white text-sm">
                      {resume.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">
                      {resume.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <Download className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Click on any resume to download
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Dock */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <div className={'transition-all duration-300 translate-y-4 opacity-100'}>
          <div className="bg-slate-200 dark:bg-slate-700 rounded-2xl px-6 py-3 shadow-xl flex space-x-6 items-center">
            <a href="https://github.com/Sudharshan06-dev" target="_blank" rel="noreferrer" title="GitHub">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                className={iconClass}
              />
            </a>
            <a href="https://www.linkedin.com/in/sudharshan06-dev/" target="_blank" rel="noreferrer" title="LinkedIn">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className={iconClass}
              />
            </a>
            <a href="https://leetcode.com/u/sudharshan06-dev/" target="_blank" rel="noreferrer" title="LeetCode">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                alt="LeetCode"
                className={`${iconClass} rounded`}
              />
            </a>
            <a href="https://dev.to/sudharshan06" target="_blank" rel="noreferrer" title="Blog">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1377/1377250.png"
                alt="Blog"
                className={iconClass}
              />
            </a>
            <button onClick={handleResumeClick} title="Download Resume">
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="Resume"
                className={iconClass}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dock;