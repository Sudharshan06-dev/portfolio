import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: '2025',
      credentialId: 'Active',
      badgeType: 'developer',
      color: '#FF9900',
      link: "https://www.credly.com/badges/aa4e77a6-f2ab-4f34-855d-42fd897888d2",
      skills: ['AWS Lambda', 'DynamoDB', 'S3', 'CloudFormation', 'API Gateway'],
      description: 'Validates expertise in developing and maintaining AWS-based applications'
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'Active',
      badgeType: 'practitioner',
      color: '#232F3E',
      link: "https://www.credly.com/badges/93044753-3f93-4598-85e8-9c7f16c504e3",
      skills: ['Cloud Concepts', 'AWS Services', 'Security', 'Architecture', 'Billing'],
      description: 'Foundational understanding of AWS Cloud concepts and services'
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-number">
            <span className="number-bracket">{'<'}</span>
            Certifications
            <span className="number-bracket">{'/>'}</span>
          </div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-description">
            Industry-recognized credentials validating expertise in cloud technologies and best practices
          </p>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (<motion.div
              key={index}
              className="certification-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="card-shine"></div>
              
              <div className="cert-header">
                <div className="aws-badge-container">
                  {/* AWS Official Badge */}
                  <div className={`aws-certification-badge ${cert.badgeType}`}>
                    <div className="badge-ribbon">certified</div>
                    <div className="badge-main">
                      {cert.badgeType === 'developer' ? (
                        <>
                          <div className="badge-title">Developer</div>
                          <div className="badge-level">ASSOCIATE</div>
                        </>
                      ) : (
                        <>
                          <div className="badge-title">Cloud<br/>Practitioner</div>
                          <div className="badge-level">FOUNDATIONAL</div>
                        </>
                      )}
                    </div>
                    <div className="badge-tip"></div>
                  </div>
                </div>

                <div className="cert-status">
                  <span className="status-dot"></span>
                  Active
                </div>
              </div>

              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                
                <div className="cert-meta">
                  <div className="meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="meta-divider">•</div>
                  <div className="meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Issued {cert.date}</span>
                  </div>
                </div>

                <p className="cert-description">{cert.description}</p>

                <div className="cert-skills">
                  <h4>Key Competencies:</h4>
                  <div className="skills-tags">
                    {cert.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="skill-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="cert-footer">
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="verify-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  View Certification Details
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="certifications-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="cta-card">
            <div className="cta-icon"><img src='/continuous_learning.jpg' width="200px"/></div>
            <div className="cta-content">
              <h3>Committed to Continuous Learning</h3>
              <p>Actively pursuing additional certifications in cloud architecture, DevOps, and emerging technologies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;