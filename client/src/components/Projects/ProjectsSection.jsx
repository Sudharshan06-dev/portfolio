import React from 'react';
import { motion } from 'framer-motion';
import './ProjectsSection.css';
import raftIcon from '/raft_profile.png';
import ragIcon from '/rag_profile.jpeg';

const Projects = () => {
  const projects = [
    {
      title: 'RAFT Consensus Implementation',
      description: 'Built a production-grade RAFT consensus engine for a 3-node cluster with RPC-based inter-node communication, leader election, log replication, to guarantee strong consistency and prevent split-brain scenarios.',
      highlights: [
        'Real-time visualization dashboard using React and WebSockets',
        'Live RAFT internals monitoring (leader/follower roles, term/log evolution)',
        'RPC flows and commit progress tracking',
        'Strong distributed systems observability'
      ],
      technologies: ['Python', 'RPC', 'Threading', 'WebSockets', 'React'],
      github: 'https://github.com/Sudharshan06-dev/raft-visualization',
      icon: raftIcon,
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      color: '#6366f1'
    },
    {
      title: 'AI-Powered Document Query System',
      description: 'Developed a Retrieval-Augmented Generation (RAG) system using LangChain and ChromaDB for intelligent document querying, enabling contextual Q&A across diverse PDF formats through vector embeddings and semantic search.',
      highlights: [
        'Vector embeddings for semantic search',
        'Context-aware Q&A across multiple documents',
        'Integration with LangChain and ChromaDB',
        'Support for diverse PDF formats'
      ],
      technologies: ['Python', 'LangChain', 'ChromaDB', 'RAG', 'Ollama'],
      github: 'https://github.com/Sudharshan06-dev/rag-pdf-qa',
      icon: ragIcon,
      gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
      color: '#a855f7'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-number">
            <span className="number-bracket">{'<'}</span>
            Projects
            <span className="number-bracket">{'/>'}</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Hands-on implementations showcasing distributed systems, AI/ML, and full-stack development
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Background Glow */}
              <div className="project-background" style={{ background: project.gradient }}></div>
              
              {/* Project Header with Icon */}
              <div className="project-header">
                <div 
                  className="project-icon-wrapper"
                  style={{ 
                    background: `${project.color}22`,
                    borderColor: `${project.color}44`
                  }}
                >
                  <img src={project.icon} alt={project.title} className="project-icon" />
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  <h4 className="highlights-title">Key Features:</h4>
                  <ul className="highlights-list">
                    {project.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        className="highlight-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <span className="highlight-bullet" style={{ color: project.color }}>▸</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="project-tag"
                      style={{ 
                        background: `${project.color}22`,
                        borderColor: `${project.color}44`,
                        color: `${project.color}`
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="project-footer">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                    style={{ background: project.gradient }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    View on GitHub
                  </motion.a>
                </div>
              </div>

              {/* Card Glow Effect */}
              <div className="project-glow" style={{ background: project.color }}></div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          className="more-projects"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="more-projects-text">Explore more of my work on</p>
          <motion.a
            href="https://github.com/Sudharshan06-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;