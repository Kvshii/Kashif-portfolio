import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../types/portfolio';
import { FumanceCalculator, AiDebuggerDemo, LunaLupaPlayable, RacingSimulator } from './InteractiveDemos';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] shadow-2xl z-10 flex flex-col my-auto">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#a3e635] bg-[#a3e635]/10 px-2 py-0.5 rounded">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase hidden sm:inline">
              CASE STUDY & LAB AUDIT
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#a3e635] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-10">
          {/* Header & Hero Image */}
          <div>
            <div className="text-xs font-mono text-[var(--text-muted)] uppercase mb-2">
              {project.category}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] mb-6 font-medium">
              {project.tagline}
            </p>

            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] aspect-video max-h-[380px] bg-[var(--bg-surface)]">
              <img
                src={project.heroImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Key Metrics / Highlights if present */}
          {caseStudy.metricsOrOutcomes && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.metricsOrOutcomes.map((m, i) => (
                <div key={i} className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-center">
                  <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase">{m.label}</div>
                  <div className="text-xl font-black text-[#a3e635] mt-1">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Interactive Demo Component embed */}
          <div>
            <div className="text-xs font-mono uppercase text-[#a3e635] mb-2 flex items-center gap-1.5">
              <span>● LIVE DEMO & TOOL SANDBOX</span>
            </div>
            {project.liveDemoType === 'campaign-calc' && <FumanceCalculator />}
            {project.liveDemoType === 'ai-debugger' && <AiDebuggerDemo />}
            {project.liveDemoType === 'luna-physics' && <LunaLupaPlayable />}
            {project.liveDemoType === 'racing-canvas' && <RacingSimulator />}
            {project.liveDemoType === 'store-preview' && (
              <div className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-mono font-bold text-[var(--text-primary)]">
                    E-COMMERCE CHECKOUT AUDIT MATRIX
                  </div>
                  <span className="text-[11px] font-mono text-[#a3e635]">100% MOBILE RESPONSIVE</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                  <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                    <div className="font-mono text-[var(--text-muted)]">LOAD TIME</div>
                    <div className="text-base font-bold text-[#a3e635] mt-1">&lt; 1.2s</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                    <div className="font-mono text-[var(--text-muted)]">CHECKOUT STEPS</div>
                    <div className="text-base font-bold text-[var(--text-primary)] mt-1">1-Page Flow</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                    <div className="font-mono text-[var(--text-muted)]">MOBILE SCORE</div>
                    <div className="text-base font-bold text-[#a3e635] mt-1">96/100</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                    <div className="font-mono text-[var(--text-muted)]">PIXEL EVENTS</div>
                    <div className="text-base font-bold text-[var(--text-primary)] mt-1">Active CAPI</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Structured 9-Chapter Case Study */}
          <div className="space-y-8 pt-4 border-t border-[var(--border-subtle)]">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--text-muted)]">
              DETAILED ARCHITECTURAL BREAKDOWN (01 - 09)
            </h3>

            {/* 01 Overview */}
            <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              <div className="text-xs font-mono text-[#a3e635] font-bold mb-1">01 — OVERVIEW</div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">What is it?</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{caseStudy.overview}</p>
            </div>

            {/* 02 The Idea */}
            <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              <div className="text-xs font-mono text-[#a3e635] font-bold mb-1">02 — THE IDEA</div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">Why was it created?</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{caseStudy.theIdea}</p>
            </div>

            {/* 03 My Role */}
            <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              <div className="text-xs font-mono text-[#a3e635] font-bold mb-1">03 — MY ROLE</div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">What did Kashif actually do?</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{caseStudy.myRole}</p>
            </div>

            {/* 04 Technology */}
            <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              <div className="text-xs font-mono text-[#a3e635] font-bold mb-1">04 — TECHNOLOGY</div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3">What was used?</h4>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 05 Build */}
            <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              <div className="text-xs font-mono text-[#a3e635] font-bold mb-1">05 — BUILD</div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">How was it developed?</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{caseStudy.build}</p>
            </div>

            {/* 06 & 07 Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-red-500/20 bg-[var(--bg-surface)]">
                <div className="text-xs font-mono text-red-400 font-bold mb-1">06 — CHALLENGES</div>
                <h4 className="text-base font-bold text-[var(--text-primary)] mb-2">What problems appeared?</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{caseStudy.challenges}</p>
              </div>

              <div className="p-5 rounded-2xl border border-[#a3e635]/30 bg-[var(--bg-surface)]">
                <div className="text-xs font-mono text-[#a3e635] font-bold mb-1">07 — SOLUTIONS</div>
                <h4 className="text-base font-bold text-[var(--text-primary)] mb-2">How were they solved?</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{caseStudy.solutions}</p>
              </div>
            </div>

            {/* 08 Result */}
            <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              <div className="text-xs font-mono text-[#a3e635] font-bold mb-1">08 — RESULT</div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">Real Outcomes & Artifacts</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{caseStudy.result}</p>
            </div>

            {/* 09 Next Steps */}
            <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              <div className="text-xs font-mono text-[#a3e635] font-bold mb-1">09 — NEXT</div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">What could be improved?</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{caseStudy.nextSteps}</p>
            </div>
          </div>

          {/* Modal Bottom CTA */}
          <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-[var(--text-muted)]">
              INTERESTED IN DISCUSSING THIS CASE STUDY?
            </span>
            <button
              onClick={() => {
                onClose();
                const contactEl = document.getElementById('contact');
                if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs bg-[#a3e635] text-black hover:bg-[#bef264] transition-colors flex items-center justify-center gap-2"
            >
              <span>CONNECT WITH KASHIF</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
