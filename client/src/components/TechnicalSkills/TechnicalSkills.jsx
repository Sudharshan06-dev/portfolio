import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './TechnicalSkills.css';

const TechnicalSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skills = [
    // Expert Level - Core Technologies
    {
      name: 'Python',
      category: 'Backend',
      level: 'Expert',
      proficiency: 95,
      years: '4+',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: '#3776AB',
      description: 'Advanced expertise in building microservices, ETL pipelines, and automation scripts'
    },
    {
      name: 'FastAPI',
      category: 'Backend',
      level: 'Expert',
      proficiency: 95,
      years: '3+',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      color: '#009688',
      description: 'High-performance async APIs, Pydantic validation, OpenAPI'
    },
    {
      name: 'AWS',
      category: 'Cloud',
      level: 'Expert',
      proficiency: 95,
      years: '3+',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      color: '#FF9900',
      description: 'Certified Developer - Lambda, DynamoDB, S3, SQS, SNS, CloudWatch'
    },
     {
      name: 'DynamoDB',
      category: 'Database',
      level: 'Expert',
      proficiency: 95,
      years: '3+',
      logo: '/dynamodb.svg',
      color: '#4053D6',
      description: 'NoSQL data modeling, GSI/LSI, and capacity planning'
    },
    {
      name: 'MySQL',
      category: 'Database',
      level: 'Expert',
      proficiency: 95,
      years: '3+',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      color: '#4479A1',
      description: 'Complex queries, optimization, indexing, stored procedures'
    },
    {
      name: 'TypeScript',
      category: 'Frontend',
      level: 'Expert',
      proficiency: 95,
      years: '3+',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      color: '#3178C6',
      description: 'Type-safe development, advanced generics, and enterprise applications'
    },

    // Advanced Level
    {
      name: 'Git',
      category: 'DevOps',
      level: 'Advanced',
      proficiency: 90,
      years: '3+',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: '#F05032',
      description: 'Version control, branching strategies, code reviews'
    },
    {
      name: 'Angular',
      category: 'Frontend',
      level: 'Advanced',
      proficiency: 90,
      years: '3+',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
      color: '#DD0031',
      description: 'RxJS, Route Guards, Interceptors, RBAC implementation'
    },
    {
      name: 'Node.js',
      category: 'Backend',
      level: 'Advanced',
      proficiency: 85,
      years: '3+',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: '#339933',
      description: 'RESTful APIs, microservices, and serverless architectures'
    },
     {
      name: 'JavaScript',
      category: 'Frontend',
      level: 'Advanced',
      proficiency: 80,
      years: '3+',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: '#F7DF1E',
      description: 'ES6+, async programming, DOM manipulation'
    },
    {
      name: 'React',
      category: 'Frontend',
      level: 'Advanced',
      proficiency: 80,
      years: '2+',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: '#61DAFB',
      description: 'Expert in building scalable SPAs, state management, and performance optimization'
    },
     {
      name: 'PHP',
      category: 'Backend',
      level: 'Advanced',
      proficiency: 80,
      years: '3+',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      color: '#777BB4',
      description: 'Server-side scripting, MVC patterns, APIs'
    },
     {
      name: 'Laravel',
      category: 'Backend',
      level: 'Advanced',
      proficiency: 80,
      years: '3+',
      logo: '/laravel.svg',
      color: '#FF2D20',
      description: 'MVC architecture, Eloquent ORM, RESTful services'
    },
    {
      name: 'Docker',
      category: 'DevOps',
      level: 'Advanced',
      proficiency: 80,
      years: '2+',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      color: '#2496ED',
      description: 'Containerization, multi-stage builds, Docker Compose'
    },

    // Proficient Level
    {
      name: 'Terraform',
      category: 'DevOps',
      level: 'Proficient',
      proficiency: 75,
      years: '2+',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
      color: '#7B42BC',
      description: 'Infrastructure as Code, AWS provisioning, state management'
    },
    {
      name: 'Redis',
      category: 'Database',
      level: 'Proficient',
      proficiency: 75,
      years: '2+',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      color: '#DC382D',
      description: 'Caching strategies, pub/sub, session management'
    },
     {
      name: 'CSS3',
      category: 'Frontend',
      level: 'Proficient',
      proficiency: 75,
      years: '3+',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      color: '#1572B6',
      description: 'Flexbox, Grid, animations, responsive design'
    },
     {
      name: 'HTML5',
      category: 'Frontend',
      level: 'Proficient',
      proficiency: 75,
      years: '3+',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: '#E34F26',
      description: 'Semantic markup, accessibility, responsive design'
    },
    {
      name: 'Kafka',
      category: 'Backend',
      level: 'Proficient',
      proficiency: 70,
      years: '2+',
      logo: '/kafka.svg',
      color: '#624a50ff',
      description: 'Event streaming, message queues, distributed systems'
    },
    {
      name: 'Java',
      category: 'Backend',
      level: 'Proficient',
      proficiency: 70,
      years: '1+',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      color: '#007396',
      description: 'OOP principles, Spring framework basics, JVM'
    },
  ];

  const categories = ['all', 'Frontend', 'Backend', 'Cloud', 'Database', 'DevOps'];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const expertSkills = filteredSkills.filter(s => s.level === 'Expert');
  const advancedSkills = filteredSkills.filter(s => s.level === 'Advanced');
  const proficientSkills = filteredSkills.filter(s => s.level === 'Proficient');

  return (
    <section id="skills" className="technical-skills">
      <div className="skills-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "200px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-number">
            <span className="number-bracket">{'<'}</span>
            Skills
            <span className="number-bracket">{'/>'}</span>
          </div>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-description">
            Proven proficiency across the full technology stack, backed by real-world projects and certifications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Expert Level Skills */}
        {expertSkills.length > 0 && (
          <div className="skill-tier">
            <motion.div 
              className="tier-header"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="tier-badge expert">
                Expert
              </div>
              <div className="tier-description">Core technologies with advanced proficiency</div>
            </motion.div>

            <div className="skills-grid expert-grid">
              {expertSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Advanced Level Skills */}
        {advancedSkills.length > 0 && (
          <div className="skill-tier">
            <motion.div 
              className="tier-header"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="tier-badge advanced">
                Advanced
              </div>
              <div className="tier-description">Strong working knowledge and production experience</div>
            </motion.div>

            <div className="skills-grid advanced-grid">
              {advancedSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Proficient Level Skills */}
        {proficientSkills.length > 0 && (
          <div className="skill-tier">
            <motion.div 
              className="tier-header"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="tier-badge proficient">
                Proficient
              </div>
              <div className="tier-description">Solid understanding and practical application</div>
            </motion.div>

            <div className="skills-grid proficient-grid">
              {proficientSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Stats Summary */}
        <motion.div
          className="skills-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="stat-item">
            <div className="stat-number">{skills.length}</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{expertSkills.length + advancedSkills.length}</div>
            <div className="stat-label">Expert/Advanced</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Skill Card Component
const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`skill-card`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="card-background" style={{ background: `${skill.color}10` }}></div>
      
      <div className="skill-card-header">
        <div 
          className="skill-logo-container"
          style={{ 
            background: `linear-gradient(135deg, ${skill.color}22 0%, ${skill.color}11 100%)`,
            borderColor: `${skill.color}44`
          }}
        >
          <img src={skill.logo} alt={skill.name} className="skill-logo" />
        </div>
        
        <div className="skill-badges">
          <div className="experience-badge" style={{ background: `${skill.color}22`, color: skill.color }}>
            {skill.years} years
          </div>
        </div>
      </div>

      <div className="skill-card-content">
        <h4 className="skill-title">{skill.name}</h4>
        
        <div className="proficiency-bar">
          <div className="proficiency-label">
            <span>Proficiency</span>
            <span className="proficiency-value">{skill.proficiency}%</span>
          </div>
          <div className="progress-track">
            <motion.div 
              className="progress-fill"
              style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)` }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.proficiency}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 + index * 0.05 }}
            />
          </div>
        </div>

        {isHovered && (
          <motion.p 
            className="skill-description"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {skill.description}
          </motion.p>
        )}
      </div>

      <div className="card-glow" style={{ background: skill.color }}></div>
    </motion.div>
  );
};

export default TechnicalSkills;