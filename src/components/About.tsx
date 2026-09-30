import React, { useState } from 'react';
import { Terminal, CheckCircle2, ArrowRight } from 'lucide-react';

interface StageProgression {
  key: string;
  label: string;
  tagline: string;
  description: string;
  handsOnEvidence: string;
  takeaway: string;
}

const STAGES: StageProgression[] = [
  {
    key: 'web',
    label: 'WEB',
    tagline: 'The First Spark of Digital Creation',
    description: 'Began exploring how websites function under the hood. Writing HTML and styling with CSS provided the foundational intuition that digital interfaces are built brick by brick.',
    handsOnEvidence: 'Constructing responsive layouts, debugging CSS box models, and ensuring clean rendering across viewports.',
    takeaway: 'Code gives you the power to translate mental thoughts into interactive reality.'
  },
  {
    key: 'ecommerce',
    label: 'E-COMMERCE',
    tagline: 'Bridging Design & Commercial Conversion',
    description: 'Moved quickly from static pages into digital storefronts. Configured Shopify environments, customized WordPress / Elementor themes, and studied how customers behave on purchase pages.',
    handsOnEvidence: 'Customizing checkout funnels, product page visual hierarchy, and solving theme plugin conflicts.',
    takeaway: 'User friction kills transactions; smooth interfaces create commercial confidence.'
  },
  {
    key: 'marketing',
    label: 'MARKETING',
    tagline: 'Connecting Creations with Real Audiences',
    description: 'Recognized that building a product is half the journey; distribution is the other. Co-founded Fumance to handle creator outreach and YouTube sponsorships, pairing brands with engaged audiences.',
    handsOnEvidence: 'Structuring creator media kits, cold email frameworks, CPM pricing models, and Meta Ads targeting.',
    takeaway: 'Creators hold audience trust; partnering with them requires genuine mutual value.'
  },
  {
    key: 'ai',
    label: 'AI & ACCELERATION',
    tagline: 'Leveraging Intelligence as a Co-pilot',
    description: 'Rather than fearing AI or viewing it as a novelty, I integrated it directly into my workflow. Learning prompt architectures to troubleshoot code, refactor snippets, and brainstorm architecture.',
    handsOnEvidence: 'Designing the AI Builder studio concept, formulating system prompts, and automating repetitive research.',
    takeaway: 'AI rewards practitioners who understand problem domains well enough to steer the model.'
  },
  {
    key: 'development',
    label: 'DEVELOPMENT & GAMING',
    tagline: 'Algorithmic Thinking & Physics in the Browser',
    description: 'Pushed deeper into programming with TypeScript, Next.js, and browser game development. Building Luna Lupa and Browser Racer required understanding frame loops, vectors, velocity drag, and state machines.',
    handsOnEvidence: 'Canvas 2D rendering, delta-time physics calculations, and collision resolution math.',
    takeaway: 'Game development is the ultimate stress test for algorithmic clarity and performance discipline.'
  },
  {
    key: 'cybersecurity',
    label: 'CYBERSECURITY',
    tagline: 'Foundations of Defense & System Hardening',
    description: 'Currently deepening knowledge of Linux systems, terminal environments via PuTTY / SSH, the CIA Triad, and solving OverTheWire Bandit wargame challenges to understand security from the ground up.',
    handsOnEvidence: 'Linux CLI navigation, file permission management (chmod/chown), SSH configuration, and threat analysis.',
    takeaway: 'Building systems reliably requires understanding how they can be broken or breached.'
  }
];

export const About: React.FC = () => {
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);
  const activeStage = STAGES[selectedStageIndex];

  return (
    <section id="about" className="py-28 relative border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#a3e635] uppercase mb-3">
              ABOUT · PHILOSOPHY & EVOLUTION
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)] max-w-3xl leading-[1.1]">
              I DON'T JUST LEARN TECHNOLOGY — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] to-[#2dd4bf]">
                I BUILD WITH IT.
              </span>
            </h2>
          </div>

          <div className="max-w-md text-sm sm:text-base text-[var(--text-secondary)]">
            My development as a builder is defined by an authentic loop:
            <span className="block font-mono text-xs text-[var(--text-primary)] mt-1.5 font-bold">
              BUILD → EXPERIMENT → LEARN → IMPROVE
            </span>
          </div>
        </div>

        {/* Editorial Layout: Left Narrative & Right Interactive Stage Progression */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Personal Narrative Statement */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-7 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-4">
                <Terminal size={14} className="text-[#a3e635]" />
                <span>KASHIF.PROFILE.MANIFESTO</span>
              </div>

              <p className="text-base text-[var(--text-primary)] font-medium leading-relaxed mb-4">
                I am not a theorist. I am a hands-on digital builder who believes that the only genuine way to understand technology is to get your hands dirty building real projects.
              </p>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                Over the years, my curiosity has naturally migrated across disciplines. When I needed to present ideas, I learned modern web design and responsive HTML/CSS. When I wanted to sell, I mastered Shopify and WordPress. When I wanted to generate demand, I launched Fumance and coordinated influencer partnerships.
              </p>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                When AI tools emerged, I learned prompt engineering and AI-assisted debugging. When I wanted to understand performance and math, I wrote browser games. And now, I am exploring cybersecurity and Linux systems to understand the underlying infrastructure that powers it all.
              </p>

              <div className="mt-6 pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span>APPROACH: PRACTICAL EXECUTION</span>
                <span className="text-[#a3e635]">NO SHORTCUTS</span>
              </div>
            </div>

            {/* Quick Principles Banner */}
            <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] flex flex-col gap-3">
              <span className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase">
                GUIDING ATTITUDE
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-[var(--text-primary)] font-medium">
                  <CheckCircle2 size={14} className="text-[#a3e635]" />
                  <span>Curiosity-driven</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--text-primary)] font-medium">
                  <CheckCircle2 size={14} className="text-[#a3e635]" />
                  <span>Pragmatic problem solver</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--text-primary)] font-medium">
                  <CheckCircle2 size={14} className="text-[#a3e635]" />
                  <span>Iterative mindset</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--text-primary)] font-medium">
                  <CheckCircle2 size={14} className="text-[#a3e635]" />
                  <span>Authentic progress</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Progression Flow (WEB ↓ E-COMMERCE ↓ MARKETING ↓ AI ↓ DEV ↓ CYBERSECURITY) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2 mb-1">
              <span className="text-xs font-mono uppercase text-[var(--text-muted)]">
                CHRONOLOGICAL EVOLUTION PROGRESSION
              </span>
              <span className="text-xs font-mono text-[#a3e635]">
                STAGE 0{selectedStageIndex + 1} OF 0{STAGES.length}
              </span>
            </div>

            {/* Stage Selector Pills */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              {STAGES.map((stg, idx) => {
                const isCurrent = idx === selectedStageIndex;
                return (
                  <button
                    key={stg.key}
                    onClick={() => setSelectedStageIndex(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                      isCurrent
                        ? 'bg-[#a3e635] text-black shadow-sm'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)]'
                    }`}
                  >
                    <span>0{idx + 1}</span>
                    <span>{stg.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Detailed Card */}
            <div className="p-7 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none text-7xl font-black font-mono">
                0{selectedStageIndex + 1}
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#a3e635] mb-2 uppercase">
                <span>STAGE 0{selectedStageIndex + 1}</span>
                <span>·</span>
                <span>{activeStage.label}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] mb-3">
                {activeStage.tagline}
              </h3>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                {activeStage.description}
              </p>

              <div className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--text-muted)] block mb-1">
                    PRACTICAL APPLICATION & LABS
                  </span>
                  <p className="text-xs sm:text-sm text-[var(--text-primary)] font-medium">
                    {activeStage.handsOnEvidence}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                  <span className="text-[11px] font-mono text-[#a3e635] uppercase block mb-1">
                    KEY DISCOVERY
                  </span>
                  <p className="text-xs sm:text-sm italic text-[var(--text-secondary)]">
                    "{activeStage.takeaway}"
                  </p>
                </div>
              </div>

              {/* Navigation between stages */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-[var(--border-subtle)]">
                <button
                  disabled={selectedStageIndex === 0}
                  onClick={() => setSelectedStageIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold border border-[var(--border-subtle)] text-[var(--text-secondary)] disabled:opacity-30 hover:border-[#a3e635] hover:text-[#a3e635] transition-colors"
                >
                  Previous Stage
                </button>

                <button
                  disabled={selectedStageIndex === STAGES.length - 1}
                  onClick={() => setSelectedStageIndex((prev) => Math.min(STAGES.length - 1, prev + 1))}
                  className="px-4 py-1.5 rounded-lg text-xs font-bold bg-[#a3e635] text-black disabled:opacity-30 hover:bg-[#bef264] transition-colors flex items-center gap-1.5"
                >
                  <span>Next Stage</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
