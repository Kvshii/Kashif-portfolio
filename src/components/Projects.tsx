import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { Project } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = [
    'All',
    'Agency & Marketing',
    'AI & Systems',
    'Interactive & Gaming',
    'E-Commerce & Web'
  ];

  const filteredProjects = filterCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filterCategory);

  return (
    <section id="work" className="py-28 relative border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#a3e635] uppercase mb-3 flex items-center gap-2">
              <Sparkles size={14} />
              <span>FEATURED WORK · IMMERSIVE SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)] leading-[1.08]">
              SELECTED PROJECTS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-[#a3e635] to-[#2dd4bf]">
                & TECHNICAL BUILDS.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[var(--text-secondary)]">
            Explore authentic case studies spanning influencer sponsorship management, AI developer workflows, browser game mechanics, and conversion-optimized e-commerce.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12 p-2 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-md">
          <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[var(--text-muted)] uppercase">
            <Filter size={13} />
            <span>FILTER:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                filterCategory === cat
                  ? 'bg-[#a3e635] text-black shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Large Immersive Project Showcase List */}
        <div className="space-y-16">
          {filteredProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={project.id}
                className="group p-6 sm:p-10 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[#a3e635]/40 transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Left Column: Visual Media Showcase */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div
                      onClick={() => onSelectProject(project)}
                      className="relative cursor-pointer rounded-2xl overflow-hidden border border-[var(--border-subtle)] group-hover:border-[#a3e635]/50 transition-all aspect-video bg-[var(--bg-card)] shadow-lg"
                    >
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                      {/* Number badge on image */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-[#a3e635]">
                        {project.number}
                      </div>

                      {/* Quick Inspect Hover Banner */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                        <span className="font-mono text-zinc-300">{project.category}</span>
                        <span className="flex items-center gap-1 font-bold text-[#a3e635]">
                          <span>Read Full Case Study</span>
                          <ArrowUpRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Project Context & Highlights */}
                  <div className={`lg:col-span-5 flex flex-col justify-between ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono font-bold text-[#a3e635]">
                          PROJECT {project.number}
                        </span>
                        <span className="text-zinc-500 font-mono text-xs">/</span>
                        <span className="text-xs font-mono text-[var(--text-muted)] uppercase">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--text-primary)] tracking-tight mb-2">
                        {project.title}
                      </h3>

                      <div className="text-sm font-semibold text-[#a3e635] mb-4">
                        {project.tagline}
                      </div>

                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-[11px] font-mono rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2 mb-8 pt-4 border-t border-[var(--border-subtle)]">
                        {project.keyHighlights.map((hl, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                            <CheckCircle2 size={14} className="text-[#a3e635] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="px-6 py-3 rounded-xl font-bold text-xs tracking-wider bg-[#a3e635] text-black hover:bg-[#bef264] transition-all flex items-center gap-2 shadow-sm"
                      >
                        <span>EXPLORE CASE STUDY</span>
                        <ArrowUpRight size={15} />
                      </button>

                      {project.liveDemoType && (
                        <button
                          onClick={() => onSelectProject(project)}
                          className="px-4 py-3 rounded-xl font-bold text-xs border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[#a3e635] hover:text-[#a3e635] transition-colors"
                        >
                          Try Interactive Demo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
