import React, { useState } from 'react';
import { Cpu, Terminal, Filter } from 'lucide-react';
import { TECH_ITEMS } from '../data/portfolioData';

export const TechWall: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = [
    'All',
    'Development',
    'Data & Python',
    'Systems & Security',
    'E-Commerce',
    'Design & Media',
    'AI Tools'
  ];

  const filteredTech = activeFilter === 'All'
    ? TECH_ITEMS
    : TECH_ITEMS.filter((t) => t.category === activeFilter);

  return (
    <section id="tech-wall" className="py-28 relative border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#a3e635] uppercase mb-3 flex items-center gap-2">
              <Cpu size={14} />
              <span>STACK INVENTORY · PRACTICAL INSTRUMENTATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)] leading-[1.08]">
              TECHNOLOGY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-[#a3e635] to-[#2dd4bf]">
                WALL.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[var(--text-secondary)]">
            A curated inventory of the languages, runtimes, platforms, and security utilities I actually operate in day-to-day practice.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-2 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
          <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[var(--text-muted)] uppercase">
            <Filter size={13} />
            <span>FILTER:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-[#a3e635] text-black shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[#a3e635]/50 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                    {tech.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#a3e635] bg-[#a3e635]/10 px-2 py-0.5 rounded">
                    {tech.level}
                  </span>
                </div>

                <h4 className="text-lg font-black text-[var(--text-primary)] group-hover:text-[#a3e635] transition-colors mb-2">
                  {tech.name}
                </h4>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {tech.usage}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center gap-1.5 text-[10px] font-mono text-[var(--text-muted)]">
                <Terminal size={12} className="text-[#a3e635]" />
                <span>PRACTICAL IMPLEMENTATION</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
