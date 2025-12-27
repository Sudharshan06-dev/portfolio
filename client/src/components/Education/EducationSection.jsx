import React from 'react';
import { motion } from 'framer-motion';
import './EducationSection.css';
import csufLogo from '/csuf_profile.svg';
import sastraLogo from '/sastra_profile.png';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Software Engineering',
      school: 'California State University, Fullerton',
      location: 'Fullerton, CA',
      period: 'Aug 2024 – Dec 2025',
      gpa: '4.0',
      status: 'Completed',
      icon: csufLogo,
      iconType: 'circle',
      highlights: [
        'Perfect 4.0 GPA',
        'Advanced Software Engineering',
        'Distributed Systems',
        'Advanced Software Process',
        'Software Architecture',
        'Cloud Architecture'
      ],
      color: '#6366f1'
    },
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      school: 'SASTRA University',
      location: 'Thanjavur, India',
      period: 'Jul 2016 – May 2020',
      gpa: null,
      status: 'Completed',
      icon: sastraLogo,
      iconType: 'square',
      highlights: [
        'Computer Science Fundamentals',
        'Data Structures & Algorithms',
        'Software Engineering',
        'Database Management Systems',
        'Web Technologies'
      ],
      color: '#a855f7'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-number">
            <span className="number-bracket">{'<'}</span>
            Education
            <span className="number-bracket">{'/>'}</span>
          </div>
          <h2 className="section-title">Academic Journey</h2>
          <p className="section-description">
            Building a strong foundation through rigorous academic training and continuous learning
          </p>
        </motion.div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="card-glow-bg" style={{ background: edu.color }}></div>
              
              <div className="card-header">
                {/* University Logo */}
                <div className="university-logo-container">
                  <div 
                    className={`university-logo ${edu.iconType}`}
                    style={{ 
                      borderColor: `${edu.color}66`,
                      boxShadow: `0 10px 40px ${edu.color}40`
                    }}
                  >
                    <img src={edu.icon} alt={edu.school} />
                  </div>
                </div>
                
                {/* GPA Badge */}
                {edu.gpa && (
                  <motion.div 
                    className="gpa-badge"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: 'spring' }}
                  >
                    <div className="gpa-value">
                      {edu.gpa}
                      <span className="gpa-perfect">Perfect!</span>
                    </div>
                    <div className="gpa-label">GPA</div>
                  </motion.div>
                )}
              </div>

              <div className="card-content">
                <h3 className="degree-title">{edu.degree}</h3>
                
                <div className="school-info">
                  <div className="school-name">{edu.school}</div>
                  <div className="school-meta">
                    <span className="location">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="10" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {edu.location}
                    </span>
                    <span className="period-divider">•</span>
                    <span className="period">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {edu.period}
                    </span>
                  </div>
                </div>

                <div className="highlights-section">
                  <h4>Key Focus Areas</h4>
                  <div className="highlights-list">
                    {edu.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        className="highlight-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <span className="highlight-dot" style={{ background: edu.color }}></span>
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card-decoration">
                <div className="decoration-line" style={{ background: edu.color }}></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="education-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Education;