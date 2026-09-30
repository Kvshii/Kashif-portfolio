import React from 'react';
import { Heart, Sparkles, Coffee, Code2, Zap } from 'lucide-react';

export const BeyondTheCode: React.FC = () => {
  return (
    <section id="beyond" className="py-28 relative border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Big Editorial Statement */}
          <div className="lg:col-span-6">
            <div className="text-xs font-mono font-semibold tracking-wider text-[#a3e635] uppercase mb-3 flex items-center gap-2">
              <Heart size={14} />
              <span>CULTURE & PHILOSOPHY</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[var(--text-primary)] leading-[1.05] mb-6">
              BEYOND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] via-[#2dd4bf] to-[var(--text-primary)]">
                THE CODE.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed mb-6">
              A portfolio shouldn't just be an itemized list of syntax tokens or framework logos. Behind every line of code, config file, and outreach email is a core human impulse: curiosity.
            </p>

            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-[#a3e635]/20 text-[#a3e635] shrink-0 mt-0.5">
                  <Zap size={14} />
                </div>
                <div>
                  <strong className="text-[var(--text-primary)]">I learn by building:</strong>
                  {" "}Reading documentation is useful, but nothing compares to wrestling with an unexpected bug at 2 AM until it finally clicks.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-[#a3e635]/20 text-[#a3e635] shrink-0 mt-0.5">
                  <Sparkles size={14} />
                </div>
                <div>
                  <strong className="text-[var(--text-primary)]">I experiment with new technology:</strong>
                  {" "}Whether it is exploring prompt chaining in developer tools or setting up SSH pipelines on Linux, I lean into the unknown with genuine excitement.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-[#a3e635]/20 text-[#a3e635] shrink-0 mt-0.5">
                  <Code2 size={14} />
                </div>
                <div>
                  <strong className="text-[var(--text-primary)]">I solve practical problems:</strong>
                  {" "}Fancy code that solves no real pain point is just digital sculpture. I build tools that connect people, automate friction, and empower creators.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Personal Notes & Principles */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div className="p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-[#a3e635] font-bold">
                  THE BUILDER'S CREED
                </span>
                <Coffee size={16} className="text-[var(--text-muted)]" />
              </div>

              <blockquote className="text-base sm:text-lg font-medium text-[var(--text-primary)] leading-relaxed italic mb-6">
                "Don't wait for permission or the perfect textbook. Pick an interesting question, assemble a minimal prototype, break it, fix it, and ship the result."
              </blockquote>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span>KASHIF · PERSONAL ETHOS</span>
                <span className="text-[#a3e635]">CONSTANT ITERATION</span>
              </div>
            </div>

            {/* Quick Stats & Authentic Facts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                <div className="text-2xl sm:text-3xl font-black text-[#a3e635] mb-1">0%</div>
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase">Fake Pretension</div>
                <div className="text-[11px] text-[var(--text-secondary)] mt-1">Honest representation of real skills & ongoing study.</div>
              </div>

              <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                <div className="text-2xl sm:text-3xl font-black text-[#2dd4bf] mb-1">100%</div>
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase">Hands-On Curiosity</div>
                <div className="text-[11px] text-[var(--text-secondary)] mt-1">Every project is built, tested, and iterated by me.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
