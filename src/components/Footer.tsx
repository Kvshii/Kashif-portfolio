import React from 'react';
import { Sun, Moon, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, setDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'JOURNEY', href: '#journey' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-2xl font-black tracking-tight text-[var(--text-primary)] hover:text-[#a3e635] transition-colors"
            >
              KASHIF
            </a>
            <p className="text-xs font-mono text-[#a3e635] mt-1 mb-3">
              DIGITAL BUILDER · CREATOR · TECHNOLOGY EXPLORER
            </p>
            <p className="text-xs text-[var(--text-secondary)] max-w-sm leading-relaxed">
              Bridging modern web engineering, commercial e-commerce, influencer sponsorships, and cybersecurity exploration.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-3 font-bold">
              NAVIGATION
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[var(--text-secondary)] hover:text-[#a3e635] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Theme Switcher */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-3">
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block font-bold">
              EXTERNAL & PREFERENCES
            </span>
            <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-secondary)]">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-[#a3e635] transition-colors"
              >
                GITHUB
              </a>
              <span>·</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-[#a3e635] transition-colors"
              >
                LINKEDIN
              </a>
              <span>·</span>
              <a
                href="mailto:earthmusical7@gmail.com"
                className="hover:text-[#a3e635] transition-colors"
              >
                EMAIL
              </a>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-xs text-[var(--text-primary)] hover:border-[#a3e635] hover:text-[#a3e635] transition-colors"
            >
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span>BUILT WITH CURIOSITY, CODE & CAFFEINE.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} KASHIF. ALL RIGHTS RESERVED.</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-1.5 rounded-lg border border-[var(--border-subtle)] hover:border-[#a3e635] hover:text-[#a3e635] transition-colors"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
