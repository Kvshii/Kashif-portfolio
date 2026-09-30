import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Workflow } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-28 relative border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#a3e635] uppercase mb-3 flex items-center gap-2">
              <Workflow size={14} />
              <span>HOW I WORK · METHODICAL PIPELINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)] leading-[1.08]">
              STRUCTURED EXECUTION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-[#a3e635] to-[#2dd4bf]">
                FROM CONCEPTION TO SHIP.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[var(--text-secondary)]">
            A disciplined, iterative framework designed to minimize wasted effort, solve the true root problem, and deliver rock-solid digital artifacts.
          </p>
        </div>

        {/* Step Progression Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10 p-2 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-xl text-left transition-all duration-200 ${
                  isActive
                    ? 'bg-[#a3e635] text-black font-extrabold shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)]'
                }`}
              >
                <div className="text-[10px] font-mono tracking-wider opacity-80">
                  STEP {step.number}
                </div>
                <div className="text-xs sm:text-sm font-bold tracking-tight">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-8xl sm:text-9xl font-black font-mono opacity-5 pointer-events-none">
            {currentStep.number}
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#a3e635] uppercase mb-2">
              <span>STAGE {currentStep.number}</span>
              <span>·</span>
              <span>{currentStep.shortDesc}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] tracking-tight mb-4">
              {currentStep.title}: {currentStep.shortDesc}
            </h3>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              {currentStep.detail}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[var(--border-subtle)] mb-8">
              <div>
                <span className="text-xs font-mono uppercase text-[var(--text-muted)] block mb-2 font-bold">
                  CORE DELIVERABLES
                </span>
                <div className="space-y-2">
                  {currentStep.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-primary)]">
                      <CheckCircle2 size={15} className="text-[#a3e635]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-[var(--text-muted)] block mb-2 font-bold">
                  KASHIF'S REAL-WORLD INSTINCT
                </span>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {currentStep.kashifApproach}
                </p>
              </div>
            </div>

            {/* Stepper Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-[var(--border-subtle)]">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-[var(--border-subtle)] text-[var(--text-secondary)] disabled:opacity-30 hover:border-[#a3e635] hover:text-[#a3e635] transition-colors"
              >
                Previous Step
              </button>

              <button
                disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-[#a3e635] text-black disabled:opacity-30 hover:bg-[#bef264] transition-colors flex items-center gap-1.5"
              >
                <span>Next Step</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
