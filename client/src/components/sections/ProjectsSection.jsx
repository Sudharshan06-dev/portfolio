import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Aivina (AI-powered Agile Tool) - In Progress',
    highlights: [
      'Automates user story creation and epic breakdown using AI',
      'Uses microservices for story management, notifications, payments, and epic breakdown',
      'Integrates real-time notifications and premium feature access with payment gateway',
    ],
    learning: 'Learning event-driven design using AWS Lambda, and applied AI to Agile workflows.',
    skills: [
      'Laravel', 'Python', 'Java', 'Node.js', 'AWS Lambda', 'API Gateway', 'RDS', 'SES', 'SNS', 'DynamoDB',
    ]
  },
  {
    name: 'URL Shortener',
    highlights: [
      'Built a scalable URL shortener using microservices architecture',
      'Implemented Redis caching and MongoDB persistence for fast and reliable lookups',
      'Containerized with Docker and deployed using Kubernetes for orchestration',
      'Used Zookeeper for coordination between services',
    ],
    learning: 'Learned service coordination with Zookeeper and orchestration with Kubernetes.',
    skills: [
      'Spring Boot', 'MongoDB', 'Redis', 'React', 'Zookeeper', 'Docker', 'Kubernetes', 'Maven',
    ]
  },
  {
    name: 'Portfolio OS',
    highlights: [
      'An OS-simulated portfolio built with React and TailwindCSS',
      'Supports window-based navigation, theme control, and animated sections',
      'Integrated experience, projects, education, and contact in modular tabs',
    ],
    learning: 'Explored framer-motion for interactive UIs and CSS layering for OS UI simulation.',
    skills: [
      'React', 'TailwindCSS', 'Framer Motion', 'Component Design', 'SVG Animations',
    ]
  }
];

const ProjectsSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h1>
        <p className="text-slate-400 text-lg sm:text-xl">Showcasing what I've built and learned</p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300"
          >
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">{project.name}</h3>
            </div>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="text-cyan-400 font-semibold text-lg sm:text-xl mb-2">Key Highlights</h4>
              <ul className="list-disc pl-6 text-slate-300 text-sm sm:text-base space-y-2">
                {project.highlights.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>

            {/* Learnings */}
            <div className="mb-6">
              <h4 className="text-blue-400 font-semibold text-lg sm:text-xl mb-2">What I Learned</h4>
              <p className="text-slate-300 text-sm sm:text-base">{project.learning}</p>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-indigo-400 font-semibold text-lg sm:text-xl mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (idx * 0.2) + (i * 0.05) }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-slate-700/80 to-slate-600/80 border border-slate-600/50 px-3 py-1 rounded-full text-sm text-slate-200 font-medium hover:from-cyan-600/20 hover:to-blue-600/20 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;