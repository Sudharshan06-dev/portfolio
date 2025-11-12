import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'My Digital (Startup)',
    duration: 'Mar 2022 - Sep 2024',
    keyResponsibilities: [
      'Led development of distributed systems handling 5000+ daily emails with 70% improved reliability',
      'Architected automated ETL pipelines reducing processing time from 48 hours to 2 hours',
      'Implemented enterprise-level security with SSO, OAuth2.0, and MFA for 8000+ users'
    ],
    skillsUsed: [
      'AWS (SQS, Lambda, SES, SNS, ECS, DynamoDB, CloudWatch)',
      'Python', 'MySQL', 'Pentaho', 'Laravel', 'Angular 14',
      'Single SPA', 'OAuth2.0', 'Google2FA'
    ],
    highlights: [
      'Architected and led the development of a distributed email processing system handling 5000+ daily emails using AWS SQS, Lambda, SES, SNS, ECS, DynamoDB, improving delivery reliability by 70%.',
      'Engineered an automated ETL pipeline using Pentaho and Python (Company) that processed 10,000+ records, reducing processing time from 48 hours to 2 hours and eliminating 95% of manual work.',
      'Optimized SQL queries with MySQL window functions, eliminating seamless export of datasets (up to 50,000 records) in seconds.',
      'Designed a serverless bulk import tool using AWS Lambda, DynamoDB & MySQL, streamlining onboarding workflows by 70%.',
      'Contributed to Angular JS → Angular 14 migration using Single SPA, boosting UX by 70% and performance by 55%.',
      'Led implementation of SSO using Azure AD + OAuth2.0 and MFA with Google2FA in Laravel for 8000+ user accounts.',
      'Reduced Lambda deployment size by 50% by modularizing shared libraries as Lambda Layers.',
      'Created automated log analysis pipeline with AWS Lambda and CloudWatch, cutting manual checks by 50%.',
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'My Digital',
    duration: 'Jan 2022 - Aug 2022',
    keyResponsibilities: [
      'Developed backend prototype for flagship product using modern web technologies',
      'Enhanced system stability and performance through legacy code refactoring',
      'Streamlined user onboarding processes and workflows'
    ],
    skillsUsed: [
      'Laravel', 'MySQL', 'PHP', 'Backend Development',
      'System Architecture', 'Database Design'
    ],
    highlights: [
      'Developed backend prototype for the flagship product using Laravel + MySQL, streamlining user onboarding.',
      'Refactored and upgraded legacy systems, boosting stability and reducing errors by 15%.'
    ]
  }
];

const Experience = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-400 mb-4">
          Professional Journey
        </h1>
        <div className="w-24 h-1 bg-blue-400 mx-auto mt-6 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 hover:bg-white/8 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg">
                <img src="my_digital.jpeg" className='text-white text-lg sm:text-2xl' />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-blue-300 font-bold text-xl sm:text-2xl lg:text-3xl mb-2 leading-tight">
                  {exp.role}
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-white font-medium mb-1">
                  {exp.company}
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-slate-400 font-medium">
                  {exp.duration}
                </p>
              </div>
            </div>

            {/* Detailed Achievements */}
            <div>
              <h4 className="text-purple-300 font-bold text-lg sm:text-xl lg:text-2xl mb-4 flex items-center gap-3">
                <span className="w-2 h-2"></span>
                Detailed Achievements
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {exp.highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (idx * 0.2) + (i * 0.1) }}
                    viewport={{ once: true }}
                    className="relative pl-6 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed hover:text-slate-200 transition-colors duration-200"
                  >
                    <span className="absolute left-0 top-1 text-purple-400 font-bold text-base">
                      ▶
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Skills Used */}
            <div className="mb-10 mt-5">
              <h4 className="text-yellow-300 font-bold text-lg sm:text-xl lg:text-2xl mb-4 flex items-center gap-3">
                <span className="w-2 h-2"></span>
                Skills Used
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {exp.skillsUsed.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (idx * 0.2) + (i * 0.05) }}
                    viewport={{ once: true }}
                    className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full text-xs sm:text-sm lg:text-base text-blue-200 font-medium hover:from-blue-500/30 hover:to-cyan-500/30 hover:scale-105 transition-all duration-200 cursor-default"
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

export default Experience;