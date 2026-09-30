import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, Radio } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'JOURNEY', href: '#journey' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-panel border-b border-[var(--border-subtle)] py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a3e635]"
          >
            <span className="font-extrabold text-xl sm:text-2xl tracking-tighter text-[var(--text-primary)] transition-colors group-hover:text-[#a3e635]">
              KASHIF
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/70 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection.toLowerCase() === link.label.toLowerCase();
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 text-xs font-semibold tracking-wider transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-[#0a0b0e] bg-[#a3e635] font-bold shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Live Status indicator */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 text-[var(--text-secondary)]">
              <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-ping" />
              <span>BUILDING + LEARNING</span>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[#a3e635] hover:text-[#a3e635] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a3e635]"
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-wider rounded-lg bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[#a3e635] hover:text-black transition-all duration-200"
            >
              <span>CONNECT</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)]"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-[var(--bg-primary)]/95 backdrop-blur-xl pt-24 px-6 pb-10 flex flex-col justify-between animate-fadeIn">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 px-3 py-2 mb-2 rounded-lg bg-[var(--bg-surface)] text-xs font-mono text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              <Radio size={14} className="text-[#a3e635] animate-pulse" />
              <span>STATUS: BUILDING & EXPERIMENTING</span>
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection.toLowerCase() === link.label.toLowerCase();
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-2xl font-bold tracking-tight py-3 px-4 rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#a3e635] text-black font-extrabold'
                      : 'text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col gap-3">
            <div className="text-xs text-[var(--text-muted)] font-mono">
              KASHIF · DIGITAL BUILDER & TECHNOLOGY EXPLORER
            </div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full py-3 text-center text-sm font-bold rounded-xl bg-[#a3e635] text-black"
            >
              LET'S CONNECT
            </a>
          </div>
        </div>
      )}
    </>
  );
};
