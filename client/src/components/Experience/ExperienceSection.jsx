import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import calixLogo from '/calix_profile.png';
import myDigitalLogo from '/my_digital.png';

const Experience = () => {
  const experiences = [
    {
      company: 'Calix',
      role: 'Software Engineer Intern',
      location: 'San Jose, CA',
      period: 'May 2025 – Aug 2025',
      achievements: [
        'Developed a CLI tool with intelligent autocomplete for network configuration using libyang (C++) to dynamically parse YANG 1.1 schemas, enabling context-aware tab-completion and parameter validation for developer workflows',
        'Built an automated schema diff tool integrated with Bamboo CI/CD and Bitbucket to validate release versions, performing attribute-level comparison and path-based grouping for clearer schema change tracking'
      ],
      technologies: ['C++', 'YANG', 'Bamboo', 'Bitbucket', 'CLI'],
      icon: calixLogo,
      color: '#6366f1'
    },
    {
      company: 'My Digital Accounts',
      role: 'Software Engineer',
      location: 'Chennai, India',
      period: 'Sept 2020 – June 2024',
      achievements: [
        'Designed end-to-end event-driven microservices architecture using React frontend and AWS serverless backend (Lambda, SQS, SNS, DynamoDB), processing 30K+ messages/day, achieving 80% improved delivery success rate',
        'Architected OAuth 2.0 authentication system with Angular frontend (Route Guards, RxJS Observables, Interceptors) and RESTful API backend using JWT tokens, implementing RBAC serving 100K+ concurrent users',
        'Built distributed ETL pipeline automating payroll validation for 100K+ records per batch using Python and Pentaho, reducing manual QA effort by 90% and accelerating release cycles across production systems',
        'Developed high-performance type-ahead search component efficiently querying and filtering 100K+ records with sub-second response times, improving user experience by 70% through backend indexing and frontend debouncing',
        'Automated log monitoring and alerting by building a Python script to parse 50+ daily S3 logs, categorize errors by severity and team, and distribute reports across 4 engineering teams, reducing incident detection time by 50%',
        'Led team of 3 engineers through Agile sprints, implementing TDD practices, code reviews, and pair programming, improving code quality and team velocity while delivering features on schedule'
      ],
      technologies: ['React', 'Angular', 'AWS Lambda', 'DynamoDB', 'Python', 'OAuth 2.0', 'Microservices'],
      icon: myDigitalLogo,
      color: '#a855f7'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-number">
            <span className="number-bracket">{'<'}</span>
            Experience
            <span className="number-bracket">{'/>'}</span>
          </div>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-description">
            Building scalable systems and leading engineering initiatives across diverse domains
          </p>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-marker">
                <div className="marker-glow" style={{ background: exp.color }}></div>
                <div className="marker-icon" style={{ borderColor: exp.color, boxShadow: `0 0 30px ${exp.color}40` }}>
                  <img src={exp.icon} alt={exp.company} />
                </div>
              </div>

              <motion.div
                className="experience-card"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="card-header">
                  <div className="company-info">
                    <h3 className="company-name">{exp.company}</h3>
                    <div className="role-title">{exp.role}</div>
                    <div className="location-period">
                      <span className="location">📍 {exp.location}</span>
                      <span className="period-divider">•</span>
                      <span className="period">📅 {exp.period}</span>
                    </div>
                  </div>
                </div>

                <div className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      className="achievement-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <span className="bullet" style={{ background: exp.color }}></span>
                      <p>{achievement}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="tech-stack">
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      style={{ borderColor: `${exp.color}66` }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="experience-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="stat-card">
            <div className="stat-value">4+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">30K+</div>
            <div className="stat-label">Messages/Day Processed</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">100K+</div>
            <div className="stat-label">Concurrent Users Served</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">90%</div>
            <div className="stat-label">Efficiency Improvement</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;