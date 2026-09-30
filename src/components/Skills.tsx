import React, { useState } from 'react';
import { Code, Cpu, TrendingUp, ShieldCheck, Palette, Wrench, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Code,
  Cpu,
  TrendingUp,
  ShieldCheck,
  Palette
};

export const Skills: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(SKILL_CATEGORIES[0].id);
  const [selectedSkillName, setSelectedSkillName] = useState<string | null>(null);

  const activeCategory = SKILL_CATEGORIES.find((c) => c.id === activeCategoryId) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-28 relative border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#a3e635] uppercase mb-3 flex items-center gap-2">
              <Layers size={14} />
              <span>MY EXPERTISE · INTERACTIVE SKILL EXPLORER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)] leading-[1.08]">
              REAL COMPETENCY. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] via-[#2dd4bf] to-[var(--text-primary)]">
                ZERO FAKE METRICS.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[var(--text-secondary)]">
            I don't use arbitrary 90% progress bars. Instead, explore my genuine toolkit organized by how I actually solve problems across code, business, and security.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.iconName] || Code;
            const isSelected = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategoryId(cat.id);
                  setSelectedSkillName(null);
                }}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                  isSelected
                    ? 'bg-[var(--bg-surface)] border-[#a3e635] shadow-md -translate-y-1'
                    : 'bg-[var(--bg-surface)]/60 border-[var(--border-subtle)] hover:border-[var(--text-muted)] opacity-85 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#a3e635] text-black' : 'bg-[var(--bg-card)] text-[var(--text-secondary)]'}`}>
                    <Icon size={18} />
                  </div>
                  <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
                    {cat.skills.length} SKILLS
                  </span>
                </div>
                <div className={`text-sm font-extrabold tracking-tight ${isSelected ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                  {cat.title}
                </div>
                <div className="text-[11px] text-[var(--text-muted)] mt-1 truncate">
                  {cat.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Matrix */}
        <div className="p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[var(--border-subtle)]">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#a3e635] uppercase">
                  ACTIVE DOMAIN:
                </span>
                <span className="text-lg font-bold text-[var(--text-primary)]">
                  {activeCategory.title}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                {activeCategory.subtitle} — Click any card to inspect hands-on application and toolchain.
              </p>
            </div>
            <span className="text-xs font-mono text-[var(--text-muted)] shrink-0">
              STATUS: PRODUCTION & PRACTICE READY
            </span>
          </div>

          {/* Grid of skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeCategory.skills.map((skill) => {
              const isCardSelected = selectedSkillName === skill.name;
              return (
                <div
                  key={skill.name}
                  onClick={() => setSelectedSkillName(isCardSelected ? null : skill.name)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                    isCardSelected
                      ? 'border-[#a3e635] bg-[var(--bg-card)] shadow-md ring-1 ring-[#a3e635]'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-card)]/70 hover:border-[#a3e635]/40 hover:bg-[var(--bg-card)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-bold text-[var(--text-primary)]">
                      {skill.name}
                    </h4>
                    <Wrench size={14} className={isCardSelected ? 'text-[#a3e635]' : 'text-[var(--text-muted)]'} />
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                    {skill.description}
                  </p>

                  {/* Tools badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {skill.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Practical Application */}
                  <div className="pt-3 border-t border-[var(--border-subtle)]">
                    <span className="text-[10px] font-mono text-[#a3e635] uppercase block mb-1">
                      PRACTICAL APPLICATION
                    </span>
                    <p className="text-xs text-[var(--text-secondary)] font-medium">
                      {skill.practicalApplication}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
