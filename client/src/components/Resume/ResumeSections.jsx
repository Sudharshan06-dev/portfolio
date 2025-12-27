import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Resume.css';

const Resume = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    // Create a download link
    const link = document.createElement('a');
    link.href = '../../../Sudharshan_Madhavan_Fullstack_Engineer_Resume.pdf';
    link.download = 'Sudharshan_Madhavan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-number">
            <span className="number-bracket">{'<'}</span>
            Resume
            <span className="number-bracket">{'/>'}</span>
          </div>
          <h2 className="section-title">Resume</h2>
          <p className="section-description">
            Download or preview my complete professional resume
          </p>
        </motion.div>

        <div className="resume-content">
          <motion.div
            className="resume-viewer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flip-card-container">
              <div 
                className={`flip-card ${isFlipped ? 'flipped' : ''}`}
                onClick={handleFlip}
              >
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front">
                    <div className="card-glow"></div>
                    <div className="resume-icon">
                      <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="14 2 14 8 20 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="16" y1="13" x2="8" y2="13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="16" y1="17" x2="8" y2="17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="10 9 9 9 8 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3>Sudharshan Madhavan</h3>
                    <p className="resume-subtitle">Full Stack Software Engineer</p>
                    <div className="resume-stats">
                      <div className="stat">
                        <div className="stat-value">4.0</div>
                        <div className="stat-label">GPA</div>
                      </div>
                      <div className="stat-divider"></div>
                      <div className="stat">
                        <div className="stat-value">4+</div>
                        <div className="stat-label">Years</div>
                      </div>
                      <div className="stat-divider"></div>
                      <div className="stat">
                        <div className="stat-value">AWS</div>
                        <div className="stat-label">Certified</div>
                      </div>
                    </div>
                    <p className="flip-hint">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="9 18 15 12 9 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Click to flip
                    </p>
                  </div>

                  {/* Back */}
                  <div className="flip-card-back">
                    <h3>Actions</h3>
                    <p className="back-subtitle">Choose an option below</p>
                    <div className="action-buttons">
                      <motion.button
                        className="action-btn preview-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowModal(true);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Preview Resume
                      </motion.button>
                      
                      <motion.button
                        className="action-btn download-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload();
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="7 10 12 15 17 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Download PDF
                      </motion.button>
                    </div>
                    <p className="flip-hint">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ transform: 'rotate(180deg)' }}>
                        <polyline points="9 18 15 12 9 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Click to flip back
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal for Resume Preview */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setShowModal(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="pdf-preview">
                <iframe 
                  src="../../../Sudharshan_Madhavan_Fullstack_Engineer_Resume.pdf" 
                  width="100%" 
                  height="600px"
                  style={{ border: 'none', borderRadius: '16px' }}
                  title="Resume Preview"
                />
              </div>

              <motion.button
                className="modal-download-btn"
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="7 10 12 15 17 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download PDF
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Resume;