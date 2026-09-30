import React, { useState } from 'react';
import { Milestone, CheckCircle2, ArrowRight } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState<number>(0);
  const activeMilestone = JOURNEY_MILESTONES[selectedMilestoneIndex];

  return (
    <section id="journey" className="py-28 relative border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#a3e635] uppercase mb-3 flex items-center gap-2">
              <Milestone size={14} />
              <span>TRAJECTORY · CONNECTED EVOLUTION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)] leading-[1.08]">
              THE LEARNING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-[#a3e635] to-[#2dd4bf]">
                JOURNEY.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[var(--text-secondary)]">
            How disparate areas — marketing, games, code, and security — interconnect to form a well-rounded digital builder mindset.
          </p>
        </div>

        {/* Interactive Timeline Stepper */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex items-center min-w-[700px] border-b border-[var(--border-subtle)]">
            {JOURNEY_MILESTONES.map((m, idx) => {
              const isSelected = idx === selectedMilestoneIndex;
              return (
                <button
                  key={m.stage}
                  onClick={() => setSelectedMilestoneIndex(idx)}
                  className={`flex-1 py-4 px-3 text-center border-b-2 transition-all duration-200 relative ${
                    isSelected
                      ? 'border-[#a3e635] text-[var(--text-primary)] font-extrabold'
                      : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider mb-1">
                    STAGE {m.stage}
                  </div>
                  <div className="text-xs font-bold truncate">
                    {m.domain}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Milestone Detail Card */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 p-8 text-8xl sm:text-9xl font-black font-mono opacity-5 pointer-events-none">
            {activeMilestone.stage}
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#a3e635] mb-2 uppercase">
              <span>MILESTONE {activeMilestone.stage}</span>
              <span>·</span>
              <span>DOMAIN: {activeMilestone.domain}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight mb-4">
              Evolution into {activeMilestone.domain}
            </h3>

            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-8">
              {activeMilestone.narrative}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[var(--border-subtle)] mb-8">
              <div>
                <span className="text-xs font-mono uppercase text-[var(--text-muted)] block mb-2 font-bold">
                  SKILLS & PATTERNS INTERNALIZED
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeMilestone.skillsGained.map((sk, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)]"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-[#a3e635] block mb-2 font-bold">
                  KEY REALIZATION
                </span>
                <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] italic leading-relaxed">
                  "{activeMilestone.keyRealization}"
                </div>
              </div>
            </div>

            {/* Stepper Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-[var(--border-subtle)]">
              <button
                disabled={selectedMilestoneIndex === 0}
                onClick={() => setSelectedMilestoneIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-[var(--border-subtle)] text-[var(--text-secondary)] disabled:opacity-30 hover:border-[#a3e635] hover:text-[#a3e635] transition-colors"
              >
                Previous Stage
              </button>

              <button
                disabled={selectedMilestoneIndex === JOURNEY_MILESTONES.length - 1}
                onClick={() => setSelectedMilestoneIndex((prev) => Math.min(JOURNEY_MILESTONES.length - 1, prev + 1))}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-[#a3e635] text-black disabled:opacity-30 hover:bg-[#bef264] transition-colors flex items-center gap-1.5"
              >
                <span>Next Stage</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
