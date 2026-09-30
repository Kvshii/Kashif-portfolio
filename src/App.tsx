import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { TechWall } from './components/TechWall';
import { Journey } from './components/Journey';
import { BeyondTheCode } from './components/BeyondTheCode';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types/portfolio';

export default function App() {
  // Theme state: dark mode by default, support saved preference or system preference
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('kashif_theme');
    if (saved) return saved === 'dark';
    return true; // Default dark graphite
  });

  const [activeSection, setActiveSection] = useState<string>('work');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sync theme with document element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('kashif_theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('kashif_theme', 'light');
    }
  }, [darkMode]);

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = ['hero', 'work', 'about', 'skills', 'process', 'exploring', 'journey', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Top Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Skills />
        <Process />
        <CurrentlyExploring />
        <TechWall />
        <Journey />
        <BeyondTheCode />
        <Contact />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
