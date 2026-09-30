import React, { useState } from 'react';
import { Mail, Check, Copy, Send, ArrowUpRight, MessageSquare, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Web Development');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'earthmusical7@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please provide a valid email address so I can reply.');
      return;
    }

    if (message.trim().length < 10) {
      setErrorMessage('Please include a brief message (at least 10 characters).');
      return;
    }

    setLoading(true);

    // Simulate real network submission with realistic latency
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-28 relative border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#a3e635] uppercase mb-3 flex items-center gap-2">
            <MessageSquare size={14} />
            <span>LET'S COLLABORATE · INQUIRIES & PARTNERSHIPS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[var(--text-primary)] leading-[1.05] mb-6">
            HAVE AN IDEA? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] via-[#bef264] to-[#2dd4bf]">
              LET'S BUILD IT.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Websites, digital products, AI concepts, e-commerce projects, marketing collaborations, and creative technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              <span className="text-xs font-mono uppercase text-[var(--text-muted)] font-bold block mb-2">
                DIRECT INBOX
              </span>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Get in touch directly
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                Whether you want to discuss a YouTube sponsorship through Fumance, collaborate on a web application, or talk tech exploration.
              </p>

              {/* Copy Email Button */}
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                <div className="flex items-center gap-2.5 truncate mr-2">
                  <Mail size={16} className="text-[#a3e635] shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-[var(--text-primary)] truncate font-semibold">
                    {contactEmail}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#a3e635] text-black hover:bg-[#bef264] transition-all flex items-center gap-1.5 shrink-0"
                >
                  {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
                <span className="text-xs font-mono text-[var(--text-muted)] block mb-3 uppercase">
                  EXTERNAL PROFILES
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[#a3e635] hover:text-[#a3e635] transition-colors flex items-center gap-1"
                  >
                    <span>GITHUB</span>
                    <ArrowUpRight size={13} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[#a3e635] hover:text-[#a3e635] transition-colors flex items-center gap-1"
                  >
                    <span>LINKEDIN</span>
                    <ArrowUpRight size={13} />
                  </a>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[#a3e635] hover:text-[#a3e635] transition-colors flex items-center gap-1"
                  >
                    <span>MAIL APP</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick response note */}
            <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#a3e635] shrink-0 animate-pulse" />
              <div className="text-xs text-[var(--text-secondary)]">
                Typical reply turnaround is within 24 hours. No spam, ever.
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-[#a3e635]/20 text-[#a3e635] flex items-center justify-center">
                    <Check size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-[var(--text-primary)]">
                    Message Dispatched!
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] max-w-md">
                    Thank you, <strong className="text-[var(--text-primary)]">{name}</strong>. Your note regarding <strong className="text-[#a3e635]">{projectType}</strong> has been received. I'll get back to you at <strong className="text-[var(--text-primary)]">{email}</strong> promptly.
                  </p>
                  <button
                    onClick={handleResetForm}
                    className="mt-4 px-6 py-2.5 rounded-xl font-bold text-xs border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[#a3e635] hover:text-[#a3e635] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle size={15} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="text-xs font-mono font-bold text-[var(--text-primary)] block mb-2 uppercase">
                        YOUR NAME *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#a3e635] text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="text-xs font-mono font-bold text-[var(--text-primary)] block mb-2 uppercase">
                        YOUR EMAIL *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. alex@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#a3e635] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="project-type" className="text-xs font-mono font-bold text-[var(--text-primary)] block mb-2 uppercase">
                      PROJECT OR INQUIRY TYPE
                    </label>
                    <select
                      id="project-type"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] focus:outline-none focus:border-[#a3e635] text-sm"
                    >
                      <option value="Web Development">Web Development & Next.js</option>
                      <option value="Influencer Marketing / Fumance">Influencer Marketing / Fumance Sponsorships</option>
                      <option value="E-Commerce Storefront">E-Commerce & Shopify / WordPress</option>
                      <option value="AI Concept or Prototype">AI Tooling or Developer Prototype</option>
                      <option value="Cybersecurity Collaboration">Cybersecurity & Linux Exploration</option>
                      <option value="General Conversation">General Conversation & Curiosity</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-xs font-mono font-bold text-[var(--text-primary)] block mb-2 uppercase">
                      MESSAGE *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about what you're building, the goals of the project, or what you'd like to collaborate on..."
                      className="w-full p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#a3e635] text-sm resize-none leading-relaxed"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <span className="text-xs font-mono text-[var(--text-muted)] order-2 sm:order-1">
                      NO AUTOMATED NEWSLETTERS OR SALES FUNNELS.
                    </span>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs tracking-wider bg-[#a3e635] text-black hover:bg-[#bef264] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 order-1 sm:order-2"
                    >
                      {loading ? (
                        <span>DISPATCHING...</span>
                      ) : (
                        <>
                          <span>DISPATCH MESSAGE</span>
                          <Send size={14} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
