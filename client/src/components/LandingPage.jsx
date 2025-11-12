// File: LandingPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'AWS', icon: 'aws.svg' },
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'Laravel', icon: 'laravel.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'DynamoDB', icon: 'aws-dynamodb.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
];

const LandingPage = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row h-full items-center justify-center px-10 pt-30 md:pt-5 gap-10 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left - Full body image standing freely */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/3 flex justify-center"
      >
        <img
          src="profile.JPG"
          alt="Sudharshan Full Portrait"
          className="h-[450px] md:h-[500px] object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* Right - Text and Icons */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-2/3 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-white">
          Engineering seamless systems. <br className="hidden md:block" />
          Empowering innovation with Cloud & Code.
        </h1>

        <p className="max-w-2xl mx-auto md:mx-0 text-lg md:text-xl text-gray-300 leading-relaxed">
          I'm <span className="font-semibold text-white">Sudharshan Madhavan</span>,
          a backend engineer and cloud-native developer with over 4 years of experience building resilient and
          <span className="text-green-400 font-medium"> scalable APIs & platforms</span>.
        </p>

        <p className="mt-4 max-w-2xl mx-auto md:mx-0 text-lg md:text-xl text-gray-300 leading-relaxed">
          Currently pursuing my <span className="font-semibold text-white">Master’s in Software Engineering</span> at
          California State University, Fullerton – passionate about cloud-first systems and backend performance.
        </p>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              title={tech.name}
              whileHover={{ scale: 1.1 }}
              className="w-14 h-14 bg-white/90 dark:bg-slate-700 rounded-xl shadow-md flex items-center justify-center p-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;