import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Terminal, Code2, Shield, ShoppingBag, Megaphone, Palette, ArrowRight } from 'lucide-react';

interface Pillar {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  focus: string;
  badge: string;
}

const PILLARS: Pillar[] = [
  {
    id: 'web',
    title: 'WEB',
    icon: Code2,
    description: 'Modern responsive architecture & interactive frontend systems.',
    focus: 'Next.js · TypeScript · Semantic HTML & CSS',
    badge: 'Core Foundation'
  },
  {
    id: 'ai',
    title: 'AI',
    icon: Sparkles,
    description: 'AI-assisted development, prompt engineering & smart tool concepts.',
    focus: 'Code Generation · Bug Checking · System Prompts',
    badge: 'Acceleration'
  },
  {
    id: 'ecommerce',
    title: 'E-COMMERCE',
    icon: ShoppingBag,
    description: 'High-conversion storefront design and checkout optimizations.',
    focus: 'Shopify · WordPress · Elementor · Store UX',
    badge: 'Commercial'
  },
  {
    id: 'marketing',
    title: 'MARKETING',
    icon: Megaphone,
    description: 'Creator sponsorships, influencer outreach & growth campaigns.',
    focus: 'Fumance Agency · YouTube Deals · Meta Ads',
    badge: 'Audience'
  },
  {
    id: 'cybersecurity',
    title: 'CYBERSECURITY',
    icon: Shield,
    description: 'Security fundamentals, remote Linux systems & threat modeling.',
    focus: 'CIA Triad · Linux / SSH · OverTheWire Bandit',
    badge: 'Active Exploration'
  },
  {
    id: 'creative',
    title: 'CREATIVE TECH',
    icon: Palette,
    description: 'Digital asset craft, social media creatives & visual identity.',
    focus: 'Canva · Photoshop · UI Design · Branding',
    badge: 'Design Layer'
  }
];

export const Hero: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>('web');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse offset (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const selectedPillar = PILLARS.find((p) => p.id === activePillar) || PILLARS[0];

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#a3e635]/10 rounded-full blur-[140px] opacity-60 dark:opacity-40 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mousePosition.x * 1.5}px), ${mousePosition.y * 1.5}px)`,
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 right-10 w-[500px] h-[400px] bg-[#2dd4bf]/10 rounded-full blur-[120px] opacity-50 dark:opacity-30 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        {/* Top Eyebrow & Status */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
            DIGITAL BUILDER · CREATOR · TECHNOLOGY EXPLORER
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border border-[var(--border-subtle)] bg-[var(--bg-surface)]/60 text-[#a3e635]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#a3e635] animate-ping" />
            <span>● BUILDING + LEARNING</span>
          </div>
        </div>

        {/* Main Editorial Headline */}
        <div className="max-w-5xl mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-[var(--text-primary)]">
            I BUILD DIGITAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-[#a3e635] to-[var(--text-primary)]">
              EXPERIENCES
            </span>
            , <br />
            PRODUCTS & IDEAS.
          </h1>
        </div>

        {/* Supporting Copy */}
        <div className="max-w-2xl mb-10">
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] font-normal leading-relaxed">
            I explore web development, e-commerce, digital marketing, AI, cybersecurity, and creative technology by turning ideas into practical digital projects.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <button
            onClick={() => scrollToSection('work')}
            className="group px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide bg-[#a3e635] text-black hover:bg-[#bef264] transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[#a3e635] hover:text-[#a3e635] transition-all duration-200 flex items-center gap-2"
          >
            <span>LET'S CONNECT</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 ml-4 text-xs font-mono text-[var(--text-muted)]">
            <Terminal size={14} className="text-[#a3e635]" />
            <span>BUILD → EXPERIMENT → LEARN → IMPROVE</span>
          </div>
        </div>

        {/* Interactive Visual System: 6 Core Pillars */}
        <div className="pt-8 border-t border-[var(--border-subtle)]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-semibold tracking-wider text-[var(--text-muted)] uppercase">
              INTERACTIVE DOMAIN MATRIX · TAP TO INSPECT FOCUS
            </span>
            <span className="text-xs font-mono text-[#a3e635]">
              ACTIVE: {selectedPillar.title}
            </span>
          </div>

          {/* Grid of 6 interactive nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = activePillar === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  onMouseEnter={() => setActivePillar(pillar.id)}
                  className={`text-left p-3.5 rounded-xl transition-all duration-200 border ${
                    isSelected
                      ? 'bg-[var(--bg-surface)] border-[#a3e635] shadow-sm -translate-y-1'
                      : 'bg-[var(--bg-surface)]/50 border-[var(--border-subtle)] hover:border-[var(--text-muted)] opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon size={18} className={isSelected ? 'text-[#a3e635]' : 'text-[var(--text-secondary)]'} />
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
                      {pillar.badge}
                    </span>
                  </div>
                  <div className={`text-sm font-extrabold tracking-tight ${isSelected ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                    {pillar.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Expanded Pillar Snapshot Panel */}
          <div className="p-4 sm:p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/70 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#a3e635]/15 text-[#a3e635] shrink-0">
                {React.createElement(selectedPillar.icon, { size: 22 })}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold text-[var(--text-primary)]">
                    {selectedPillar.title}
                  </h2>
                  <span className="text-xs font-mono text-[#a3e635]">
                    · {selectedPillar.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  {selectedPillar.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-[var(--border-subtle)]">
              <div className="text-left md:text-right">
                <div className="text-[11px] font-mono uppercase text-[var(--text-muted)]">Current Focus & Tools</div>
                <div className="text-xs font-semibold text-[var(--text-primary)]">{selectedPillar.focus}</div>
              </div>
              <button
                onClick={() => scrollToSection('skills')}
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-black bg-[#a3e635] hover:bg-[#bef264] transition-colors shrink-0"
              >
                View Skills
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator prompt */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to About section"
            className="group flex flex-col items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[#a3e635] transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
