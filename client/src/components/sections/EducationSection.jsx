import { motion } from 'framer-motion';

const educationData = [
    {
        degree: 'Masters in Software Engineering',
        institution: 'California State University Fullerton',
        duration: 'August 2024 – Dec 2025',
        gpa: '4.0',
        coursework: [
            'Object-Oriented Programming',
            'Web Development',
            'Software Architecture',
            'Agile Methodologies'
        ],
        skills: ['AWS', 'Python', 'Java', 'Spring Boot', 'FastAPI', 'Angular', 'React', 'UML', 'Scrum', 'REST APIs'],
        icon: '🎓'
    },
    {
        degree: 'B.Tech in Computer Science & Engineering',
        institution: 'SASTRA University',
        duration: 'July 2016 – May 2020',
        coursework: [
            'Data Structures & Algorithms',
            'Operating Systems',
            'Database Management',
            'Computer Networks',
            'Cloud Computing'
        ],
        skills: ['C++', 'MySQL', 'Linux', 'HTML', 'Javascript', 'DBMS'],
        icon: '🏫'
    }
];

const EducationSection = () => {
    return (
        <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                    Education
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6 rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
                {educationData.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 hover:bg-white/8 transition-all duration-300"
                    >
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg">
                                {edu.icon}
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="text-blue-300 font-bold text-xl sm:text-2xl lg:text-3xl mb-2 leading-tight">
                                    {edu.degree}
                                </h3>
                                <p className="text-base sm:text-lg lg:text-xl text-white font-medium mb-1">
                                    {edu.institution}
                                </p>
                                <p className="text-sm sm:text-base lg:text-lg text-slate-400 font-medium">
                                    {edu.duration}  {edu.gpa && <span>| GPA: {edu.gpa}</span>}
                                </p>
                            </div>
                        </div>

                        {/* Coursework */}
                        <div className="mb-6">
                            <h4 className="text-purple-300 font-bold text-lg sm:text-xl lg:text-2xl mb-4 flex items-center gap-3">
                                Coursework
                            </h4>
                            <ul className="list-disc pl-6 text-slate-300 text-sm sm:text-base lg:text-lg space-y-2">
                                {edu.coursework.map((course, i) => (
                                    <li key={i}>{course}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Skills */}
                        <div>
                            <h4 className="text-yellow-300 font-bold text-lg sm:text-xl lg:text-2xl mb-3">
                                Skills Gained
                            </h4>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {edu.skills.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: (idx * 0.2) + (i * 0.05) }}
                                        viewport={{ once: true }}
                                        className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-400/30 rounded-full text-xs sm:text-sm lg:text-base text-indigo-200 font-medium hover:from-indigo-500/30 hover:to-violet-500/30 hover:scale-105 transition-all duration-200 cursor-default"
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

export default EducationSection;