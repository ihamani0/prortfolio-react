import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, User, FileText, Briefcase, Mail, Github, Linkedin } from 'lucide-react';

// Mock Data (Replace with your actual data)
const portfolioData = {
  about: {
    name: "Your Name",
    title: "Full-Stack Web Developer",
    description: "Passionate web developer with experience in building dynamic web applications using technologies like React, Laravel, and Express.js. Currently exploring Flutter for mobile development and interested in integrating mindset approaches into e-commerce ventures. Always eager to learn and apply new technologies, including animation libraries like GSAP and backend solutions like Appwrite. Currently developing a platform for secure cryptographic key distribution in IoT networks.",
    imageUrl: "https://placehold.co/300x300/E2E8F0/4A5568?text=Profile+Pic" // Replace with your image URL
  },
  resume: {
    summary: "Detail-oriented developer skilled in front-end and back-end development. Proven ability to learn quickly and adapt to new frameworks and challenges. Seeking opportunities to contribute to innovative projects.",
    experience: [
      { title: "Freelance Web Developer", duration: "Year - Present", description: "Developed various web applications for clients using Laravel, Express.js, and React. Managed projects from conception to deployment." },
      // Add more experience
    ],
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Laravel", "PHP", "Express.js", "Node.js", "Appwrite", "Git", "REST APIs", "Basic Cryptography Concepts", "Flutter (Learning)", "GSAP (Exploring)"],
    education: [
      { degree: "Your Degree/Training", institution: "Your Institution", duration: "Year - Year" },
      // Add more education
    ]
  },
  portfolio: [
    { id: 1, title: "E-commerce Platform (Concept)", description: "Planning and conceptualizing a simple e-commerce platform, focusing on user experience and potentially integrating GSAP animations.", imageUrl: "https://placehold.co/600x400/E2E8F0/4A5568?text=Project+1", link: "#" },
    { id: 2, title: "IoT Key Distribution Platform", description: "Developing a web platform for secure cryptographic key distribution tailored for resource-constrained IoT devices.", imageUrl: "https://placehold.co/600x400/D1FAE5/10B981?text=Project+2", link: "#" },
    { id: 3, title: "Portfolio Website (This one!)", description: "Built using React and Tailwind CSS, featuring dark/light mode and responsive design.", imageUrl: "https://placehold.co/600x400/DBEAFE/3B82F6?text=Project+3", link: "#" },
    // Add more projects
  ],
  contact: {
    email: "your.email@example.com",
    phone: "+123 456 7890", // Optional
    social: [
        { name: "GitHub", url: "https://github.com/yourusername", icon: <Github size={24} /> },
        { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: <Linkedin size={24} /> },
        // Add other social links
    ]
  }
};

// --- Components ---

// Sidebar Navigation
function Sidebar({ activePage, setActivePage, isSidebarOpen, closeSidebar }) {
  const navItems = [
    { name: 'About Me', id: 'about', icon: <User size={20} /> },
    { name: 'Resume', id: 'resume', icon: <FileText size={20} /> },
    { name: 'Portfolio', id: 'portfolio', icon: <Briefcase size={20} /> },
    { name: 'Contact', id: 'contact', icon: <Mail size={20} /> },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    closeSidebar(); // Close sidebar on navigation click (mobile)
  };

  return (
    <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700`}>
       {/* Close button for mobile */}
       <button
            onClick={closeSidebar}
            className="absolute top-4 right-4 p-2 text-gray-500 rounded-lg sm:hidden hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-label="Close sidebar"
        >
            <X size={24} />
        </button>
      <div className="h-full px-3 py-4 overflow-y-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6 mt-8 sm:mt-2">
          {portfolioData.about.name.split(' ')[0]}'s Portfolio {/* Use first name */}
        </h2>
        <ul className="space-y-2 font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center p-2 rounded-lg w-full text-left transition duration-75 group ${
                  activePage === item.id
                    ? 'bg-blue-500 text-white dark:bg-blue-600'
                    : 'text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

// Theme Toggle Button
function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

// --- Page Sections ---

function AboutSection({ data }) {
  return (
    <section id="about" className="p-6 md:p-10 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <img
          src={data.imageUrl}
          alt={data.name}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-blue-500 dark:border-blue-600"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x300/E2E8F0/4A5568?text=Error'; }}
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">{data.name}</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">{data.title}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
}

function ResumeSection({ data }) {
  return (
    <section id="resume" className="p-6 md:p-10 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">Resume</h2>

        {/* Summary */}
        <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Summary</h3>
          <p className="text-gray-700 dark:text-gray-300">{data.summary}</p>
        </div>

        {/* Experience */}
        <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Experience</h3>
          {data.experience.map((job, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{job.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{job.duration}</p>
              <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

         {/* Education */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Education</h3>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-3 last:mb-0">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{edu.degree}</h4>
              <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection({ projects }) {
  return (
    <section id="portfolio" className="p-6 md:p-10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CBD5E0/4A5568?text=Image+Error'; }}
               />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition duration-200"
                >
                  View Project &rarr; {/* Or 'View Demo', 'Learn More' */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ data }) {
  return (
    <section id="contact" className="p-6 md:p-10 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Feel free to reach out if you'd like to collaborate, discuss a project, or just say hi!
        </p>
        <div className="space-y-4 mb-8">
          <p className="text-lg text-gray-800 dark:text-gray-200">
            <strong className="text-blue-600 dark:text-blue-400">Email:</strong>{' '}
            <a href={`mailto:${data.email}`} className="hover:underline">{data.email}</a>
          </p>
          {data.phone && (
            <p className="text-lg text-gray-800 dark:text-gray-200">
              <strong className="text-blue-600 dark:text-blue-400">Phone:</strong> {data.phone}
            </p>
          )}
        </div>
        <div className="flex justify-center space-x-6">
          {data.social.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-200"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


// --- Main App Component ---

function App() {
  // State for active page and theme
  const [activePage, setActivePage] = useState('about'); // Default page
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar

  // Effect to apply the theme class and save preference
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Function to toggle sidebar on mobile
   const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };


  // Render the active page component
  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <AboutSection data={portfolioData.about} />;
      case 'resume':
        return <ResumeSection data={portfolioData.resume} />;
      case 'portfolio':
        return <PortfolioSection projects={portfolioData.portfolio} />;
      case 'contact':
        return <ContactSection data={portfolioData.contact} />;
      default:
        return <AboutSection data={portfolioData.about} />;
    }
  };

  return (
    <div className={`font-sans ${theme}`}> {/* Apply theme class */}
      {/* Overlay for mobile sidebar */}
       {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 sm:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        ></div>
      )}

      {/* Sidebar */}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
       />

      {/* Main Content Area */}
      <main className="sm:ml-64 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
         {/* Hamburger Menu Button (Mobile) */}
        <button
            onClick={toggleSidebar}
            className="fixed top-4 left-4 z-50 p-2 text-gray-600 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-lg sm:hidden hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-label="Open sidebar"
        >
            <Menu size={24} />
        </button>

        {/* Theme Toggle Button */}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

        {/* Render the selected page */}
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
