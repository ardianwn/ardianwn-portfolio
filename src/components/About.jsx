import { motion } from 'framer-motion';
import { FaCloud, FaDatabase, FaLaptopCode, FaServer } from 'react-icons/fa';
import { FiAward } from 'react-icons/fi';

const About = ({ _darkMode }) => {
  const isDark = _darkMode;
  
  const skills = [
    { name: 'Python/FastAPI', icon: <FaServer className="text-teal-500" /> },
    { name: 'AI & RAG Systems', icon: <FaLaptopCode className="text-purple-500" /> },
    { name: 'Next.js/React', icon: <FaLaptopCode className="text-sky-400" /> },
    { name: 'Docker', icon: <FaServer className="text-blue-500" /> },
    { name: 'OpenAI API', icon: <FaCloud className="text-green-600" /> },
    { name: 'TypeScript', icon: <FaLaptopCode className="text-blue-600" /> },
    { name: 'Laravel/PHP', icon: <FaServer className="text-red-500" /> },
    { name: 'PostgreSQL/MySQL', icon: <FaDatabase className="text-blue-600" /> },
    { name: 'Cloud & VPS', icon: <FaCloud className="text-blue-400" /> },
    { name: 'Solidity', icon: <FaLaptopCode className="text-gray-600" /> },
    { name: 'WordPress', icon: <FaServer className="text-blue-700" /> },
    { name: 'Git & DevOps', icon: <FaCloud className="text-orange-600" /> },
  ];

const experience = [
  {
    role: 'Freelance Programmer / Full Stack Developer',
    company: 'Self-Employed | Remote',
    period: 'Des 2023 - Present · 2 thn 1 bln',
    description: 'Full-stack web development and system architecture for various clients',
    achievements: [
      'Project Tracker System – Built a project tracking web application with GitHub OAuth, admin dashboard, student activity analytics, data visualization using Chart.js, optimized MySQL database, and deployment on DigitalOcean VPS',
      'Indonesia Vocational Olympiad (OLIVIA) 2025 Registration System – Developed a national-scale event registration platform with Google OAuth, real-time live chat, automated notifications, file management, and PDF/Excel export, deployed on DigitalOcean VPS',
      'Nawasena Company Profile – Developed a multilingual (English–Japanese) company profile website with a modern responsive design and deployment on a cPanel hosting environment'
    ]
  },
  {
    role: 'ITSM Staff Intern',
    company: 'Paiton Operation & Maintenance Indonesia',
    period: 'Jul 2025 - Des 2025 · 6 bln',
    description: 'IT Service Management and full-stack development at Jl. Raya Surabaya-Situbondo No.Km. 141, Paiton, Probolinggo',
    achievements: [
      'Developed DocAI, an Intelligent Document Query system based on Hybrid RAG, OpenAI Assistants API, Qdrant, and Ollama BGE-M3',
      'Built a full-stack application (FastAPI & Next.js) from backend, frontend, to AI integration',
      'Deploying DocAI to the company\'s internal server using Docker & Docker Compose',
      'Compiling technical documentation, user manuals, and deployment guides',
      'Creating IoT temperature and humidity sensor simulations for server room monitoring',
      'Designing an Asset Management Handbook for standardizing IT asset management',
      'Developing a mobile application prototype using FlutterFlow',
      'Involvement in ITIL processes such as Incident Management, Problem Management, and Change Management'
    ]
  },
  {
    role: 'Web Developer, Internship',
    company: 'PSIK Fakultas Vokasi Universitas Brawijaya Malang',
    period: 'Aug 2024 - Jul 2025',
    description: 'Website development and management for the university',
    achievements: [
      'Managed and developed the Brawijaya University Vocational Faculty website using WordPress',
      'Created a PSIK Employee Management Website for Vocational Faculty using CodeIgniter 4 and Bootstrap'
    ]
  },
  {
    role: 'Assistant Lecturer',
    company: 'Faculty of Vocational Studies, Universitas Brawijaya Malang',
    period: 'Feb 2025 - Mei 2025',
    description: 'Supporting academic activities and faculty projects',
    achievements: [
      'Assisted with student assignment grading and evaluation',
      'Assisted with preparation of faculty journal publications',
      'Contributed to various faculty projects and initiatives'
    ]
  },
  {
    role: 'Technical Support, Internship',
    company: 'GAOTek Inc., Toronto, Canada',
    period: 'Oct 2023 - Dec 2024',
    description: 'Technical support and digital content development',
    achievements: [
      'Technical writing and documentation for various products',
      'Provided tech support and developed webpages and datasheets',
      'Implemented digital marketing strategies and SEO optimization',
      'Created compelling content for online stores such as Amazon'
    ]
  }
];

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-b from-white/70 to-indigo-50/70'} relative overflow-hidden`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className={`absolute -top-20 -left-20 w-64 h-64 rounded-full ${isDark ? 'bg-indigo-700/10' : 'bg-indigo-300/10'} blur-3xl`}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className={`absolute -bottom-32 -right-20 w-80 h-80 rounded-full ${isDark ? 'bg-purple-700/10' : 'bg-purple-300/10'} blur-3xl`}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div 
              className="space-y-7"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-25"></div>
                <div className={`relative p-6 ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-900'} rounded-lg shadow-xl`}>
                  <p className="text-lg leading-relaxed">
                    I'm a passionate <span className={`font-semibold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Full Stack Developer & AI Engineer</span> specializing in building intelligent, scalable web applications. My expertise spans from AI-powered systems with RAG architecture to modern full-stack development, with a strong focus on creating efficient, maintainable, and cutting-edge solutions.
                  </p>
                </div>
              </div>
              
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-900'} leading-relaxed`}>
                I specialize in <span className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>AI/ML systems</span> using <span className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Python (FastAPI)</span>, <span className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>OpenAI API</span>, <span className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>RAG architecture</span>, and vector databases. For full-stack development, I excel in <span className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>TypeScript/Next.js</span>, <span className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>React.js</span>, and <span className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>PHP frameworks</span> (Laravel/CodeIgniter). I leverage <span className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Docker</span> for containerization and deploy on cloud platforms like <span className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>DigitalOcean VPS</span>.
              </p>
              
              <div>
                <h3 className={`text-xl font-semibold mb-5 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>Technical Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                      className={`flex items-center gap-2 px-3 py-3 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm hover:shadow-md transition-all duration-300`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <div className={`p-2 rounded-md flex-shrink-0 ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        {skill.icon}
                      </div>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-900'} font-medium text-sm`}>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-900'} leading-relaxed pt-4`}>
                Currently expanding my expertise into <span className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>blockchain development</span> and <span className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Solidity smart contracts</span>, exploring the future of decentralized applications. When I'm not coding, you can find me hiking in nature or experimenting with new cooking recipes. I believe in continuous learning and staying updated with the latest industry trends.
              </p>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-1 rounded-2xl shadow-xl">
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 h-full`}>
                  <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    <FiAward className="text-indigo-500" />
                    <span>Professional Experience</span>
                  </h3>
                  
                  <div className="space-y-8">
                    {experience.map((exp, index) => (
                      <motion.div 
                        key={index}
                        whileHover={{ x: 5 }}
                        className="border-l-4 border-indigo-500 pl-5 py-1 relative group"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.2 }}
                      >
                        <div className="absolute -left-[18px] top-0 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                          {index + 1}
                        </div>
                        <h4 className={`font-bold text-lg ${isDark ? 'text-gray-200 group-hover:text-indigo-400' : 'text-gray-800 group-hover:text-indigo-600'} transition-colors`}>
                          {exp.role}
                        </h4>
                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm font-medium`}>
                          {exp.company} • {exp.period}
                        </p>
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mt-2`}>
                          {exp.description}
                        </p>
                        {exp.achievements && (
                          <ul className="mt-3 space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li 
                                key={i} 
                                className={`flex items-start gap-3 text-sm ${isDark ? 'text-gray-400' : 'text-gray-800'}`}
                                whileHover={{ x: 2 }}
                                transition={{ duration: 0.2 }}
                              >
                                <span className="text-indigo-500 mt-0.5 flex-shrink-0 font-bold">•</span>
                                <span className="flex-1">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className={`absolute -bottom-8 -left-8 w-20 h-20 rounded-full ${isDark ? 'bg-indigo-400/20' : 'bg-indigo-400/10'} -z-10`}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className={`absolute -top-8 -right-8 w-16 h-16 rounded-full ${isDark ? 'bg-purple-400/20' : 'bg-purple-400/10'} -z-10`}
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;