import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Code,
  Database,
  Server,
  Terminal,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import profile from "../src/profile.jpeg";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const skills = {
    frontend: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
    ],
    backend: ["Node.js", ".NET Core", "ASP.NET Core", "C#"],
    database: ["SQL Server", "MySQL", "SAP HANA"],
    tools: ["Git", "GitHub", "Bitbucket", "Postman", "Docker", "Nginx"],
  };

  const projects = [
    {
      title: "Customer Portal Web App",
      description:
        "Built a comprehensive customer portal using React.js and Node.js to enhance customer feedback, scheduling, and banking workflows.",
      tech: ["React.js", "Node.js", "RESTful API"],
      impact: "Enhanced customer experience",
      color: "cyan",
    },
    {
      title: "Excel-to-ERP Journal Entry Tool",
      description:
        "Developed an automation tool using .NET Core that converts Excel data into ERP journal entries, reducing manual effort.",
      tech: [".NET Core", "C#", "SQL Server"],
      impact: "Reduced manual processing time",
      color: "blue",
    },
    {
      title: "ERP System Modules",
      description:
        "Developed and maintained critical modules across Finance, Inventory, Production, and Purchasing with RESTful APIs.",
      tech: ["Full-stack", "RESTful APIs", "Agile"],
      impact: "Improved system efficiency",
      color: "purple",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-100 overflow-x-hidden'>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-100px) translateX(50px); }
          50% { transform: translateY(-200px) translateX(-50px); }
          75% { transform: translateY(-100px) translateX(50px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.5); }
          50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.8); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-10px);
        }
      `}</style>

      {/* Floating particles */}
      <div className='fixed inset-0 pointer-events-none overflow-hidden z-0'>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Custom Cursor */}
      <div
        className='hidden md:block fixed w-8 h-8 border-2 border-cyan-400 rounded-full pointer-events-none z-50 transition-transform duration-100 opacity-50'
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-sm shadow-lg shadow-cyan-500/10"
            : "bg-transparent"
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse'>
              PI
            </div>

            <div className='hidden md:flex space-x-8'>
              {[
                "home",
                "about",
                "experience",
                "skills",
                "projects",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 hover:scale-110 ${
                    activeSection === item
                      ? "text-cyan-400 font-semibold"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className='md:hidden bg-gray-800 border-t border-gray-700'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {[
                "home",
                "about",
                "experience",
                "skills",
                "projects",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className='block w-full text-left px-3 py-2 capitalize hover:bg-gray-700 rounded transition-colors'
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id='home'
        className='min-h-screen flex items-center justify-center px-4 pt-16 relative'
      >
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse'></div>
          <div
            className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse'
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className='max-w-4xl text-center relative z-10'>
          <div className='mb-6 inline-block'>
            <div className='w-60 h-60 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 animate-glow gradient-animate p-2 overflow-hidden'>
              <div className='w-full h-full rounded-full overflow-hidden'>
                <img
                  src={profile}
                  alt='profile'
                  className='w-full h-auto min-h-full object-cover'
                  style={{
                    imageRendering: "-webkit-optimize-contrast",
                    transform: "translateY(10%) scale(1.8)",
                  }}
                />
              </div>
            </div>
          </div>
          <h1 className='text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent gradient-animate'>
            Prabath Ishanka
          </h1>
          <p className='text-2xl md:text-3xl text-gray-300 mb-6'>
            Software Engineer
          </p>
          <p className='text-lg text-gray-400 mb-8 max-w-2xl mx-auto'>
            Full-stack developer specializing in React.js, Node.js, and .NET
            Core. Building scalable solutions that make a difference.
          </p>
          <div className='flex flex-wrap justify-center gap-4 mb-12'>
            <a
              href='mailto:prabath.ishanka1@gmail.com'
              className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50'
            >
              <Mail size={20} /> Get in Touch
            </a>
            <button
              onClick={() => scrollToSection("projects")}
              className='flex items-center gap-2 px-6 py-3 border-2 border-cyan-600 hover:bg-cyan-600/10 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30'
            >
              <Code size={20} /> View Projects
            </button>
          </div>
          <button
            onClick={() => scrollToSection("about")}
            className='animate-bounce text-cyan-400 hover:scale-125 transition-transform'
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id='about'
        className='min-h-screen flex items-center justify-center px-4 py-20'
      >
        <div className='max-w-4xl'>
          <h2 className='text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
            About Me
          </h2>
          <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover-lift'>
            <div className='flex items-center gap-2 mb-6'>
              <Sparkles className='text-cyan-400 animate-pulse' />
              <p className='text-lg text-gray-300 leading-relaxed'>
                Results-oriented Software Engineer with 3+ years of experience
                in full-stack development.
              </p>
            </div>
            <p className='text-lg text-gray-300 mb-6 leading-relaxed'>
              I specialize in building scalable web applications, API
              integrations, and automation tools that streamline business
              processes. With a strong background in agile development,
              debugging, and performance optimization, I'm passionate about
              delivering clean, efficient, and maintainable code.
            </p>
            <div className='grid md:grid-cols-2 gap-6 mt-8'>
              <div className='flex items-start gap-3 group'>
                <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600/20 to-cyan-600/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform'>
                  <Code size={24} className='text-cyan-400' />
                </div>
                <div>
                  <h3 className='font-semibold text-lg mb-1'>
                    Full-Stack Development
                  </h3>
                  <p className='text-gray-400'>React.js, Node.js, .NET Core</p>
                </div>
              </div>
              <div className='flex items-start gap-3 group'>
                <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-blue-600/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform'>
                  <Server size={24} className='text-blue-400' />
                </div>
                <div>
                  <h3 className='font-semibold text-lg mb-1'>
                    API Development
                  </h3>
                  <p className='text-gray-400'>RESTful APIs & Integrations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id='experience'
        className='min-h-screen flex items-center justify-center px-4 py-20'
      >
        <div className='max-w-4xl w-full'>
          <h2 className='text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
            Experience
          </h2>
          <div className='relative'>
            <div className='absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600'></div>

            <div className='mb-12 md:flex md:items-center md:justify-end md:w-1/2 md:ml-auto md:pl-12'>
              <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 ml-8 md:ml-0 hover:border-cyan-500 transition-all duration-300 hover-lift'>
                <div className='absolute left-4 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full -ml-2 mt-2 animate-pulse'></div>
                <span className='text-cyan-400 text-sm font-semibold flex items-center gap-2'>
                  <div className='w-2 h-2 bg-cyan-400 rounded-full animate-ping'></div>
                  January 2022 - Present
                </span>
                <h3 className='text-2xl font-bold mt-2 mb-1 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
                  Software Engineer
                </h3>
                <p className='text-gray-400 mb-4'>
                  PBSS Group, Kelaniya, Sri Lanka
                </p>
                <ul className='space-y-2 text-gray-300'>
                  <li className='flex items-start gap-2 hover:text-cyan-400 transition-colors'>
                    <span className='text-cyan-400 mt-1'>▹</span>
                    <span>
                      Develop and maintain ERP system modules across Finance,
                      Inventory, Production, and Purchasing
                    </span>
                  </li>
                  <li className='flex items-start gap-2 hover:text-cyan-400 transition-colors'>
                    <span className='text-cyan-400 mt-1'>▹</span>
                    <span>
                      Build and integrate RESTful APIs using full-stack
                      development practices
                    </span>
                  </li>
                  <li className='flex items-start gap-2 hover:text-cyan-400 transition-colors'>
                    <span className='text-cyan-400 mt-1'>▹</span>
                    <span>
                      Collaborate with teams to optimize performance and ensure
                      quality
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='md:flex md:items-center md:justify-start md:w-1/2 md:pr-12'>
              <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 ml-8 md:ml-0 hover:border-blue-500 transition-all duration-300 hover-lift'>
                <div className='absolute left-4 md:left-1/2 w-4 h-4 bg-blue-400 rounded-full -ml-2 mt-2 animate-pulse'></div>
                <span className='text-blue-400 text-sm font-semibold'>
                  01/2023 - 05/2024
                </span>
                <h3 className='text-2xl font-bold mt-2 mb-1 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  BSc (Hons) Computing Science
                </h3>
                <p className='text-gray-400 mb-2'>Software Engineering</p>
                <p className='text-gray-400'>Kingston University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id='skills'
        className='min-h-screen flex items-center justify-center px-4 py-20'
      >
        <div className='max-w-6xl w-full'>
          <h2 className='text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
            Technical Skills
          </h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-600 transition-all duration-300 hover-lift group'>
              <div className='flex items-center gap-3 mb-4'>
                <Code
                  className='text-cyan-400 group-hover:scale-125 transition-transform'
                  size={28}
                />
                <h3 className='text-xl font-bold'>Frontend</h3>
              </div>
              <div className='flex flex-wrap gap-2'>
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-lg text-sm hover:bg-cyan-600/30 hover:scale-110 transition-all cursor-pointer'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-600 transition-all duration-300 hover-lift group'>
              <div className='flex items-center gap-3 mb-4'>
                <Server
                  className='text-blue-400 group-hover:scale-125 transition-transform'
                  size={28}
                />
                <h3 className='text-xl font-bold'>Backend</h3>
              </div>
              <div className='flex flex-wrap gap-2'>
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-sm hover:bg-blue-600/30 hover:scale-110 transition-all cursor-pointer'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-600 transition-all duration-300 hover-lift group'>
              <div className='flex items-center gap-3 mb-4'>
                <Database
                  className='text-purple-400 group-hover:scale-125 transition-transform'
                  size={28}
                />
                <h3 className='text-xl font-bold'>Database</h3>
              </div>
              <div className='flex flex-wrap gap-2'>
                {skills.database.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 bg-purple-600/20 text-purple-400 rounded-lg text-sm hover:bg-purple-600/30 hover:scale-110 transition-all cursor-pointer'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-600 transition-all duration-300 hover-lift group'>
              <div className='flex items-center gap-3 mb-4'>
                <Terminal
                  className='text-green-400 group-hover:scale-125 transition-transform'
                  size={28}
                />
                <h3 className='text-xl font-bold'>Tools & Platforms</h3>
              </div>
              <div className='flex flex-wrap gap-2'>
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 bg-green-600/20 text-green-400 rounded-lg text-sm hover:bg-green-600/30 hover:scale-110 transition-all cursor-pointer'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className='mt-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover-lift'>
            <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
              <Sparkles className='text-cyan-400' />
              Practices & Methodologies
            </h3>
            <div className='flex flex-wrap gap-2'>
              {[
                "RESTful API Development",
                "Agile (Scrum)",
                "Debugging",
                "Code Review",
                "CI/CD",
                "Teamwork",
                "Problem-Solving",
              ].map((skill) => (
                <span
                  key={skill}
                  className='px-3 py-1 bg-gray-700 text-gray-300 rounded-lg text-sm hover:bg-cyan-600/20 hover:text-cyan-400 hover:scale-110 transition-all cursor-pointer'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id='projects'
        className='min-h-screen flex items-center justify-center px-4 py-20'
      >
        <div className='max-w-6xl w-full'>
          <h2 className='text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
            Featured Projects
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project, idx) => (
              <div
                key={idx}
                className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-600 transition-all duration-300 hover-lift relative overflow-hidden group'
              >
                <div className='absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'></div>
                <div className='relative z-10'>
                  <div className='flex items-center justify-between mb-3'>
                    <h3 className='text-xl font-bold'>{project.title}</h3>
                    <ExternalLink
                      className='text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity'
                      size={20}
                    />
                  </div>
                  <p className='text-gray-400 mb-4 text-sm leading-relaxed'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className='px-2 py-1 bg-cyan-600/20 text-cyan-400 rounded text-xs hover:scale-110 transition-transform'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className='text-sm text-green-400 flex items-center gap-1'>
                    ✓ {project.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='min-h-screen flex items-center justify-center px-4 py-20'
      >
        <div className='max-w-4xl w-full text-center'>
          <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
            Get In Touch
          </h2>
          <p className='text-xl text-gray-400 mb-12 max-w-2xl mx-auto'>
            I'm currently open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi, feel free to
            reach out!
          </p>
          <div className='grid md:grid-cols-3 gap-6 mb-12'>
            <a
              href='mailto:prabath.ishanka1@gmail.com'
              className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-600 transition-all duration-300 hover-lift group'
            >
              <Mail
                className='mx-auto mb-3 text-cyan-400 group-hover:scale-125 group-hover:rotate-12 transition-all'
                size={32}
              />
              <h3 className='font-semibold mb-2'>Email</h3>
              <p className='text-sm text-gray-400 break-all'>
                prabath.ishanka1@gmail.com
              </p>
            </a>
            <a
              href='tel:+94701448937'
              className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-600 transition-all duration-300 hover-lift group'
            >
              <Phone
                className='mx-auto mb-3 text-blue-400 group-hover:scale-125 group-hover:rotate-12 transition-all'
                size={32}
              />
              <h3 className='font-semibold mb-2'>Phone</h3>
              <p className='text-sm text-gray-400'>+94 70 1448937</p>
            </a>
            <a
              href='https://linkedin.com/in/prabath-ishanka0'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-600 transition-all duration-300 hover-lift group'
            >
              <Linkedin
                className='mx-auto mb-3 text-purple-400 group-hover:scale-125 group-hover:rotate-12 transition-all'
                size={32}
              />
              <h3 className='font-semibold mb-2'>LinkedIn</h3>
              <p className='text-sm text-gray-400'>prabath-ishanka0</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 border-t border-gray-800 py-8 px-4'>
        <div className='max-w-6xl mx-auto text-center'>
          <p className='text-gray-400'>
            © 2024 Prabath Ishanka. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import {
//   Mail,
//   Phone,
//   Linkedin,
//   Code,
//   Database,
//   Server,
//   Terminal,
//   ChevronDown,
//   Menu,
//   X,
//   Sparkles,
// } from "lucide-react";

// export default function Portfolio() {
//   const [activeSection, setActiveSection] = useState("home");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//       const windowHeight = window.innerHeight;
//       const documentHeight =
//         document.documentElement.scrollHeight - windowHeight;
//       const scrollY = window.scrollY;
//       const progress = Math.min(scrollY / documentHeight, 1);
//       setScrollProgress(progress);

//       const sections = [
//         "home",
//         "about",
//         "experience",
//         "skills",
//         "projects",
//         "contact",
//       ];
//       const current = sections.find((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
//       if (current) setActiveSection(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     element?.scrollIntoView({ behavior: "smooth" });
//     setActiveSection(id);
//     setIsMenuOpen(false);
//   };

//   const getTreeStage = () => {
//     if (scrollProgress < 0.15) return 1;
//     if (scrollProgress < 0.3) return 2;
//     if (scrollProgress < 0.5) return 3;
//     if (scrollProgress < 0.7) return 4;
//     if (scrollProgress < 0.85) return 5;
//     return 6;
//   };

//   const treeStage = getTreeStage();
//   const trunkHeight = Math.min(scrollProgress * 200, 200);

//   return (
//     <div className='min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-100'>
//       {/* Growing Tree - Fixed on right side */}
//       <div className='fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 pointer-events-none'>
//         <svg width='120' height='400' viewBox='0 0 120 400'>
//           <ellipse
//             cx='60'
//             cy='390'
//             rx='40'
//             ry='8'
//             fill='#2d3748'
//             opacity='0.5'
//           />
//           <rect
//             x='50'
//             y={390 - trunkHeight}
//             width='20'
//             height={trunkHeight}
//             fill='#8b5a3c'
//             rx='2'
//           />

//           {treeStage >= 1 && (
//             <circle cx='60' cy='380' r='6' fill='#86efac' opacity='0.8' />
//           )}
//           {treeStage >= 2 && (
//             <g>
//               <path
//                 d='M60 360 Q55 350 60 340'
//                 stroke='#22c55e'
//                 strokeWidth='3'
//                 fill='none'
//               />
//               <circle cx='60' cy='340' r='4' fill='#86efac' />
//             </g>
//           )}
//           {treeStage >= 3 && (
//             <g>
//               <circle cx='35' cy='265' r='15' fill='#22c55e' opacity='0.8' />
//               <circle cx='85' cy='265' r='15' fill='#22c55e' opacity='0.8' />
//               <circle cx='60' cy='250' r='18' fill='#22c55e' opacity='0.9' />
//             </g>
//           )}
//           {treeStage >= 4 && (
//             <g>
//               <circle cx='30' cy='220' r='20' fill='#22c55e' opacity='0.85' />
//               <circle cx='90' cy='220' r='20' fill='#22c55e' opacity='0.85' />
//               <ellipse
//                 cx='60'
//                 cy='210'
//                 rx='35'
//                 ry='30'
//                 fill='#22c55e'
//                 opacity='0.9'
//               />
//             </g>
//           )}
//           {treeStage >= 5 && (
//             <g>
//               <circle cx='40' cy='200' r='25' fill='#16a34a' opacity='0.8' />
//               <circle cx='80' cy='200' r='25' fill='#16a34a' opacity='0.8' />
//               <ellipse
//                 cx='60'
//                 cy='190'
//                 rx='40'
//                 ry='35'
//                 fill='#16a34a'
//                 opacity='0.9'
//               />
//             </g>
//           )}
//           {treeStage >= 6 && (
//             <g>
//               <circle cx='50' cy='210' r='5' fill='#f59e0b' />
//               <circle cx='70' cy='205' r='5' fill='#f59e0b' />
//               <circle cx='45' cy='235' r='5' fill='#f59e0b' />
//             </g>
//           )}
//           <text x='60' y='410' textAnchor='middle' fill='#22d3ee' fontSize='10'>
//             {Math.round(scrollProgress * 100)}%
//           </text>
//         </svg>
//         <div className='text-center mt-2'>
//           <p className='text-xs text-cyan-400 font-semibold'>
//             {treeStage === 1 && "🌱 Seed"}
//             {treeStage === 2 && "🌿 Sprout"}
//             {treeStage === 3 && "🌳 Young"}
//             {treeStage === 4 && "🌲 Growing"}
//             {treeStage === 5 && "🌴 Mature"}
//             {treeStage === 6 && "🎄 Full"}
//           </p>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav
//         className={`fixed top-0 w-full z-40 transition-all ${
//           scrolled
//             ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
//             : "bg-transparent"
//         }`}
//       >
//         <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
//           <div className='flex justify-between items-center h-16'>
//             <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
//               PI
//             </div>
//             <div className='hidden md:flex space-x-8'>
//               {[
//                 "home",
//                 "about",
//                 "experience",
//                 "skills",
//                 "projects",
//                 "contact",
//               ].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item)}
//                   className={`capitalize transition-all hover:text-cyan-400 ${
//                     activeSection === item
//                       ? "text-cyan-400 font-semibold"
//                       : "text-gray-300"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className='md:hidden'
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//         {isMenuOpen && (
//           <div className='md:hidden bg-gray-800 border-t border-gray-700'>
//             <div className='px-2 pt-2 pb-3 space-y-1'>
//               {[
//                 "home",
//                 "about",
//                 "experience",
//                 "skills",
//                 "projects",
//                 "contact",
//               ].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item)}
//                   className='block w-full text-left px-3 py-2 capitalize hover:bg-gray-700 rounded'
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero */}
//       <section
//         id='home'
//         className='min-h-screen flex items-center justify-center px-4 pt-16'
//       >
//         <div className='max-w-4xl text-center'>
//           <div className='w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-5xl font-bold mx-auto mb-4'>
//             PI
//           </div>
//           <h1 className='text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
//             Prabath Ishanka
//           </h1>
//           <p className='text-2xl md:text-3xl text-gray-300 mb-6'>
//             Software Engineer
//           </p>
//           <p className='text-lg text-gray-400 mb-8 max-w-2xl mx-auto'>
//             Full-stack developer specializing in React.js, Node.js, and .NET
//             Core.
//           </p>
//           <div className='flex flex-wrap justify-center gap-4 mb-12'>
//             <a
//               href='mailto:prabath.ishanka1@gmail.com'
//               className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg transition-all'
//             >
//               <Mail size={20} /> Get in Touch
//             </a>
//             <button
//               onClick={() => scrollToSection("projects")}
//               className='flex items-center gap-2 px-6 py-3 border-2 border-cyan-600 hover:bg-cyan-600/10 rounded-lg transition-all'
//             >
//               <Code size={20} /> View Projects
//             </button>
//           </div>
//           <button
//             onClick={() => scrollToSection("about")}
//             className='animate-bounce text-cyan-400'
//           >
//             <ChevronDown size={32} />
//           </button>
//         </div>
//       </section>

//       {/* About */}
//       <section
//         id='about'
//         className='min-h-screen flex items-center justify-center px-4 py-20'
//       >
//         <div className='max-w-4xl'>
//           <h2 className='text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
//             About Me
//           </h2>
//           <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all'>
//             <p className='text-lg text-gray-300 mb-6'>
//               Results-oriented Software Engineer with 3+ years of experience in
//               full-stack development. I specialize in building scalable web
//               applications, API integrations, and automation tools.
//             </p>
//             <div className='grid md:grid-cols-2 gap-6 mt-8'>
//               <div className='flex items-start gap-3'>
//                 <div className='w-12 h-12 rounded-lg bg-cyan-600/20 flex items-center justify-center'>
//                   <Code size={24} className='text-cyan-400' />
//                 </div>
//                 <div>
//                   <h3 className='font-semibold text-lg mb-1'>
//                     Full-Stack Development
//                   </h3>
//                   <p className='text-gray-400'>React.js, Node.js, .NET Core</p>
//                 </div>
//               </div>
//               <div className='flex items-start gap-3'>
//                 <div className='w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center'>
//                   <Server size={24} className='text-blue-400' />
//                 </div>
//                 <div>
//                   <h3 className='font-semibold text-lg mb-1'>
//                     API Development
//                   </h3>
//                   <p className='text-gray-400'>RESTful APIs & Integrations</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Experience */}
//       <section
//         id='experience'
//         className='min-h-screen flex items-center justify-center px-4 py-20'
//       >
//         <div className='max-w-4xl w-full'>
//           <h2 className='text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
//             Experience
//           </h2>
//           <div className='space-y-8'>
//             <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500 transition-all'>
//               <span className='text-cyan-400 text-sm font-semibold'>
//                 January 2022 - Present
//               </span>
//               <h3 className='text-2xl font-bold mt-2 mb-1'>
//                 Software Engineer
//               </h3>
//               <p className='text-gray-400 mb-4'>
//                 PBSS Group, Kelaniya, Sri Lanka
//               </p>
//               <ul className='space-y-2 text-gray-300'>
//                 <li className='flex items-start gap-2'>
//                   <span className='text-cyan-400 mt-1'>▹</span>
//                   <span>Develop and maintain ERP system modules</span>
//                 </li>
//                 <li className='flex items-start gap-2'>
//                   <span className='text-cyan-400 mt-1'>▹</span>
//                   <span>Build and integrate RESTful APIs</span>
//                 </li>
//                 <li className='flex items-start gap-2'>
//                   <span className='text-cyan-400 mt-1'>▹</span>
//                   <span>Collaborate with teams to optimize performance</span>
//                 </li>
//               </ul>
//             </div>
//             <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all'>
//               <span className='text-blue-400 text-sm font-semibold'>
//                 01/2023 - 05/2024
//               </span>
//               <h3 className='text-2xl font-bold mt-2 mb-1'>
//                 BSc (Hons) Computing Science
//               </h3>
//               <p className='text-gray-400'>
//                 Software Engineering - Kingston University
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills */}
//       <section
//         id='skills'
//         className='min-h-screen flex items-center justify-center px-4 py-20'
//       >
//         <div className='max-w-6xl w-full'>
//           <h2 className='text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
//             Technical Skills
//           </h2>
//           <div className='grid md:grid-cols-2 gap-6'>
//             <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-600 transition-all'>
//               <div className='flex items-center gap-3 mb-4'>
//                 <Code className='text-cyan-400' size={28} />
//                 <h3 className='text-xl font-bold'>Frontend</h3>
//               </div>
//               <div className='flex flex-wrap gap-2'>
//                 {["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind"].map(
//                   (s) => (
//                     <span
//                       key={s}
//                       className='px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-lg text-sm'
//                     >
//                       {s}
//                     </span>
//                   )
//                 )}
//               </div>
//             </div>
//             <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-600 transition-all'>
//               <div className='flex items-center gap-3 mb-4'>
//                 <Server className='text-blue-400' size={28} />
//                 <h3 className='text-xl font-bold'>Backend</h3>
//               </div>
//               <div className='flex flex-wrap gap-2'>
//                 {["Node.js", ".NET Core", "C#", "ASP.NET"].map((s) => (
//                   <span
//                     key={s}
//                     className='px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-sm'
//                   >
//                     {s}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-600 transition-all'>
//               <div className='flex items-center gap-3 mb-4'>
//                 <Database className='text-purple-400' size={28} />
//                 <h3 className='text-xl font-bold'>Database</h3>
//               </div>
//               <div className='flex flex-wrap gap-2'>
//                 {["SQL Server", "MySQL", "SAP HANA"].map((s) => (
//                   <span
//                     key={s}
//                     className='px-3 py-1 bg-purple-600/20 text-purple-400 rounded-lg text-sm'
//                   >
//                     {s}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-600 transition-all'>
//               <div className='flex items-center gap-3 mb-4'>
//                 <Terminal className='text-green-400' size={28} />
//                 <h3 className='text-xl font-bold'>Tools</h3>
//               </div>
//               <div className='flex flex-wrap gap-2'>
//                 {["Git", "Docker", "Postman", "VS Code"].map((s) => (
//                   <span
//                     key={s}
//                     className='px-3 py-1 bg-green-600/20 text-green-400 rounded-lg text-sm'
//                   >
//                     {s}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects */}
//       <section
//         id='projects'
//         className='min-h-screen flex items-center justify-center px-4 py-20'
//       >
//         <div className='max-w-6xl w-full'>
//           <h2 className='text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
//             Featured Projects
//           </h2>
//           <div className='grid md:grid-cols-3 gap-6'>
//             {[
//               {
//                 title: "Customer Portal",
//                 desc: "React.js and Node.js portal for customer feedback and scheduling",
//                 tech: ["React", "Node.js"],
//               },
//               {
//                 title: "ERP Tool",
//                 desc: ".NET Core automation tool for journal entries",
//                 tech: [".NET Core", "SQL"],
//               },
//               {
//                 title: "ERP Modules",
//                 desc: "Finance, Inventory, and Production modules",
//                 tech: ["Full-stack", "APIs"],
//               },
//             ].map((p, i) => (
//               <div
//                 key={i}
//                 className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-600 transition-all'
//               >
//                 <h3 className='text-xl font-bold mb-3'>{p.title}</h3>
//                 <p className='text-gray-400 mb-4 text-sm'>{p.desc}</p>
//                 <div className='flex flex-wrap gap-2'>
//                   {p.tech.map((t) => (
//                     <span
//                       key={t}
//                       className='px-2 py-1 bg-cyan-600/20 text-cyan-400 rounded text-xs'
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section
//         id='contact'
//         className='min-h-screen flex items-center justify-center px-4 py-20'
//       >
//         <div className='max-w-4xl w-full text-center'>
//           <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
//             Get In Touch
//           </h2>
//           <p className='text-xl text-gray-400 mb-12'>
//             I'm open to new opportunities. Feel free to reach out!
//           </p>
//           <div className='grid md:grid-cols-3 gap-6'>
//             <a
//               href='mailto:prabath.ishanka1@gmail.com'
//               className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-600 transition-all'
//             >
//               <Mail className='mx-auto mb-3 text-cyan-400' size={32} />
//               <h3 className='font-semibold mb-2'>Email</h3>
//               <p className='text-sm text-gray-400 break-all'>
//                 prabath.ishanka1@gmail.com
//               </p>
//             </a>
//             <a
//               href='tel:+94701448937'
//               className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-600 transition-all'
//             >
//               <Phone className='mx-auto mb-3 text-blue-400' size={32} />
//               <h3 className='font-semibold mb-2'>Phone</h3>
//               <p className='text-sm text-gray-400'>+94 70 1448937</p>
//             </a>
//             <a
//               href='https://linkedin.com/in/prabath-ishanka0'
//               target='_blank'
//               rel='noopener noreferrer'
//               className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-600 transition-all'
//             >
//               <Linkedin className='mx-auto mb-3 text-purple-400' size={32} />
//               <h3 className='font-semibold mb-2'>LinkedIn</h3>
//               <p className='text-sm text-gray-400'>prabath-ishanka0</p>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className='bg-gray-900 border-t border-gray-800 py-8 px-4'>
//         <div className='max-w-6xl mx-auto text-center'>
//           <p className='text-gray-400'>
//             © 2024 Prabath Ishanka.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }
