import React, { useState } from 'react';
import { Compass, Terminal, Shield, Sparkles, Database, Server, Code2, ArrowUpRight } from 'lucide-react';
import { EXPLORING_TOPICS } from '../data/portfolioData';

const iconByTopic: Record<string, React.ElementType> = {
  CYBERSECURITY: Shield,
  PYTHON: Code2,
  'AI DEVELOPMENT': Sparkles,
  'DATA ANALYSIS': Database,
  'CLOUD & INFRASTRUCTURE': Server,
  'ADVANCED WEB DEVELOPMENT': Terminal,
};

export const CurrentlyExploring: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>(EXPLORING_TOPICS[0].title);
  const activeTopic = EXPLORING_TOPICS.find((t) => t.title === selectedTopic) || EXPLORING_TOPICS[0];

  return (
    <section id="exploring" className="py-28 relative border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#a3e635] uppercase mb-3 flex items-center gap-2">
              <Compass size={14} />
              <span>FRONTIER LABS · ACTIVE RESEARCH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)] leading-[1.08]">
              CURRENTLY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] via-[#2dd4bf] to-[var(--text-primary)]">
                EXPLORING.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[var(--text-secondary)]">
            A transparent snapshot of what I am actively studying, coding, and testing right now. Real progress without inflated claims or fake percentages.
          </p>
        </div>

        {/* 6 Exploratory Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {EXPLORING_TOPICS.map((topic) => {
            const Icon = iconByTopic[topic.title] || Terminal;
            const isSelected = selectedTopic === topic.title;

            return (
              <div
                key={topic.title}
                onClick={() => setSelectedTopic(topic.title)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? 'border-[#a3e635] bg-[var(--bg-surface)] shadow-lg -translate-y-1 ring-1 ring-[#a3e635]'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-surface)]/60 hover:border-[var(--text-muted)] hover:bg-[var(--bg-surface)]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-[#a3e635] text-black' : 'bg-[var(--bg-card)] text-[#a3e635]'}`}>
                    <Icon size={20} />
                  </div>
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] font-bold">
                    {topic.status}
                  </span>
                </div>

                <h3 className="text-lg font-black text-[var(--text-primary)] mb-1">
                  {topic.title}
                </h3>
                <div className="text-xs font-mono text-[#a3e635] mb-3">
                  {topic.domain}
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                  {topic.description}
                </p>

                <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                  <span>TAP TO INSPECT LAB</span>
                  <ArrowUpRight size={13} className={isSelected ? 'text-[#a3e635]' : ''} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Exploration Inspection Deep-Dive Card */}
        <div className="p-6 sm:p-8 rounded-3xl border border-[#a3e635]/40 bg-[var(--bg-surface)] relative overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-6 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#a3e635] text-black">
                {React.createElement(iconByTopic[activeTopic.title] || Terminal, { size: 24 })}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#a3e635] uppercase">
                    SELECTED LAB
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    · {activeTopic.status}
                  </span>
                </div>
                <h4 className="text-2xl font-black text-[var(--text-primary)]">
                  {activeTopic.title} — {activeTopic.domain}
                </h4>
              </div>
            </div>

            <div className="px-4 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--text-secondary)]">
              <span>EXPLORATION CADENCE: </span>
              <span className="text-[#a3e635] font-bold">DAILY HANDS-ON</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <span className="text-xs font-mono uppercase text-[var(--text-muted)] font-bold block mb-2">
                ACTIVE LAB CONCEPTS
              </span>
              <div className="flex flex-wrap gap-2">
                {activeTopic.keyConcepts.map((kc, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] font-medium"
                  >
                    {kc}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono uppercase text-[#a3e635] font-bold block mb-2">
                CURRENT WORKING MILESTONE
              </span>
              <p className="text-sm text-[var(--text-primary)] leading-relaxed font-medium bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border-subtle)]">
                {activeTopic.currentMilestone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
