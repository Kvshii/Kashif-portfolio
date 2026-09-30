import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Bug, CheckCircle, Calculator, Zap, Gauge } from 'lucide-react';

/* ---------------- 1. FUMANCE CAMPAIGN CALCULATOR ---------------- */
export const FumanceCalculator: React.FC = () => {
  const [views, setViews] = useState<number>(65000);
  const [cpm, setCpm] = useState<number>(24);
  const [category, setCategory] = useState<string>('Tech & Development');

  const estimatedBudget = Math.round((views / 1000) * cpm);
  const estimatedClicks = Math.round(views * 0.032);
  const estimatedConversions = Math.round(estimatedClicks * 0.045);

  return (
    <div className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calculator size={18} className="text-[#a3e635]" />
          <span className="text-xs font-mono font-bold text-[var(--text-primary)] uppercase">
            INTERACTIVE YOUTUBE SPONSORSHIP ESTIMATOR
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#a3e635] bg-[#a3e635]/10 px-2 py-0.5 rounded">
          AGENCY WORKFLOW
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">
            ESTIMATED VIEWS: <span className="text-[var(--text-primary)] font-bold">{views.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="10000"
            max="300000"
            step="5000"
            value={views}
            onChange={(e) => setViews(Number(e.target.value))}
            className="w-full accent-[#a3e635]"
          />
        </div>

        <div>
          <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">
            TARGET CPM: <span className="text-[var(--text-primary)] font-bold">${cpm}</span>
          </label>
          <input
            type="range"
            min="15"
            max="60"
            step="1"
            value={cpm}
            onChange={(e) => setCpm(Number(e.target.value))}
            className="w-full accent-[#a3e635]"
          />
        </div>

        <div>
          <label className="text-[11px] font-mono text-[var(--text-muted)] block mb-1">
            NICHE CATEGORY
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-2.5 py-1 text-xs rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)]"
          >
            <option value="Tech & Development">Tech & Dev ($20-$45 CPM)</option>
            <option value="Gaming & Streaming">Gaming ($15-$28 CPM)</option>
            <option value="Lifestyle & Productivity">Productivity ($25-$40 CPM)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center">
        <div>
          <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">SPONSORSHIP FLAT DEAL</div>
          <div className="text-lg font-black text-[#a3e635] tabular-nums">${estimatedBudget.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">EST. QUALIFIED CLICKS</div>
          <div className="text-lg font-black text-[var(--text-primary)] tabular-nums">{estimatedClicks.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">EST. CONVERSIONS</div>
          <div className="text-lg font-black text-[var(--text-primary)] tabular-nums">{estimatedConversions.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- 2. AI BUILDER CODE ANALYZER SANDBOX ---------------- */
export const AiDebuggerDemo: React.FC = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const [code, setCode] = useState(
`// Sample Cart Calculator with Logic Bug
function calculateTotal(items) {
  let total; // ❌ Bug: uninitialized accumulator causes NaN
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total.toFixed(2);
}`
  );

  const handleRunAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
    }, 700);
  };

  const handleApplyFix = () => {
    setCode(
`// ✅ AI Builder Auto-Fixed Version
function calculateTotal(items = []) {
  // Initialized accumulator to 0 to prevent NaN arithmetic
  const total = items.reduce((sum, item) => sum + (Number(item?.price) || 0), 0);
  return total.toFixed(2);
}`
    );
  };

  return (
    <div className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] font-mono text-xs">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Bug size={16} className="text-[#a3e635]" />
          <span className="font-bold text-[var(--text-primary)] uppercase">
            AI BUILDER · LIVE CODE INSPECTOR DEMO
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleRunAnalysis}
            disabled={analyzing}
            className="px-3 py-1 rounded bg-[#a3e635] text-black font-bold text-[11px] hover:bg-[#bef264] transition-colors flex items-center gap-1"
          >
            {analyzing ? <Zap size={13} className="animate-spin" /> : <Play size={13} />}
            <span>{analyzing ? 'Scanning AST...' : 'Analyze Snippet'}</span>
          </button>
        </div>
      </div>

      <div className="relative mb-3">
        <textarea
          rows={6}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[#a3e635] font-mono resize-none text-[11px] leading-relaxed"
        />
      </div>

      {analyzed && (
        <div className="p-3.5 rounded-lg bg-[#a3e635]/10 border border-[#a3e635]/30 animate-fadeIn">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-bold text-[#a3e635] flex items-center gap-1.5 text-xs">
              <CheckCircle size={14} /> Diagnostic Result: Uninitialized Variable
            </span>
            <button
              onClick={handleApplyFix}
              className="text-[10px] px-2 py-0.5 rounded bg-[#a3e635] text-black font-bold hover:bg-[#bef264]"
            >
              Apply AI Refactor
            </button>
          </div>
          <p className="text-[11px] text-[var(--text-secondary)] font-sans">
            Variable <code className="text-[#a3e635]">let total;</code> starts as <code className="text-[#a3e635]">undefined</code>. In JS, <code className="text-[#a3e635]">undefined + number</code> evaluates to <code className="text-[#a3e635]">NaN</code>, corrupting return value.
          </p>
        </div>
      )}
    </div>
  );
};

/* ---------------- 3. LUNA LUPA PLAYABLE MINI CANVAS ---------------- */
export const LunaLupaPlayable: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let player = { x: 50, y: 150, vy: 0, width: 22, height: 22, onGround: false };
    let platforms = [
      { x: 20, y: 220, w: 100, h: 10 },
      { x: 150, y: 190, w: 90, h: 10 },
      { x: 280, y: 160, w: 90, h: 10 },
      { x: 410, y: 140, w: 90, h: 10 },
      { x: 540, y: 180, w: 90, h: 10 }
    ];
    let cameraX = 0;
    let localScore = 0;

    const gravity = 0.45;

    const jump = () => {
      if (player.onGround) {
        player.vy = -9.2;
        player.onGround = false;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        jump();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const update = () => {
      // Move player forward continuously
      player.x += 2.2;
      player.vy += gravity;
      player.y += player.vy;

      cameraX = player.x - 70;

      // Platform collision
      player.onGround = false;
      platforms.forEach((p) => {
        if (
          player.x + player.width > p.x &&
          player.x < p.x + p.w &&
          player.y + player.height >= p.y &&
          player.y + player.height <= p.y + p.h + player.vy &&
          player.vy >= 0
        ) {
          player.y = p.y - player.height;
          player.vy = 0;
          player.onGround = true;
        }
      });

      // Spawn next platforms dynamically
      const lastPlatform = platforms[platforms.length - 1];
      if (lastPlatform.x - cameraX < canvas.width + 100) {
        const nextY = Math.max(120, Math.min(230, lastPlatform.y + (Math.random() * 80 - 40)));
        platforms.push({
          x: lastPlatform.x + 110 + Math.random() * 40,
          y: nextY,
          w: 80 + Math.random() * 40,
          h: 10
        });
        localScore += 10;
        setScore(localScore);
      }

      // Check fall
      if (player.y > canvas.height + 40) {
        setIsGameOver(true);
        setIsPlaying(false);
        return;
      }

      // Render
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Star particles background
      ctx.fillStyle = '#181b24';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Platforms
      platforms.forEach((p) => {
        ctx.fillStyle = '#a3e635';
        ctx.fillRect(p.x - cameraX, p.y, p.w, p.h);
        ctx.fillStyle = '#4ade80';
        ctx.fillRect(p.x - cameraX, p.y + 2, p.w, 2);
      });

      // Luna Player (Geometric Wolf Avatar)
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      const px = player.x - cameraX;
      ctx.arc(px + 11, player.y + 11, 10, 0, Math.PI * 2);
      ctx.fill();
      // Wolf ear accent
      ctx.fillStyle = '#a3e635';
      ctx.beginPath();
      ctx.moveTo(px + 14, player.y + 2);
      ctx.lineTo(px + 20, player.y - 6);
      ctx.lineTo(px + 18, player.y + 5);
      ctx.fill();

      animationFrameId = requestAnimationFrame(update);
    };

    if (isPlaying) {
      animationFrameId = requestAnimationFrame(update);
    } else {
      // Draw idle preview
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#181b24';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#a3e635';
      ctx.fillRect(40, 200, 140, 10);
      ctx.fillRect(220, 170, 120, 10);
      ctx.fillStyle = '#ffffff';
      ctx.arc(100, 190, 10, 0, Math.PI * 2);
      ctx.fill();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying]);

  const restartGame = () => {
    setScore(0);
    setIsGameOver(false);
    setIsPlaying(true);
  };

  return (
    <div className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--text-primary)]">
          <Zap size={16} className="text-[#a3e635]" />
          <span>LUNA LUPA — WILD IMPACT · 60FPS PHYSICS SIMULATOR</span>
        </div>
        <div className="text-xs font-mono text-[#a3e635]">SCORE: {score}</div>
      </div>

      <div className="relative rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[#0d0f14] mb-3">
        <canvas ref={canvasRef} width={580} height={260} className="w-full h-[200px] block" />

        {!isPlaying && !isGameOver && (
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2">
            <button
              onClick={() => setIsPlaying(true)}
              className="px-5 py-2.5 rounded-lg bg-[#a3e635] text-black font-bold text-xs flex items-center gap-2 hover:bg-[#bef264] transition-transform hover:scale-105"
            >
              <Play size={14} /> Launch Playable Demo
            </button>
            <span className="text-[11px] font-mono text-zinc-300">Spacebar or Tap to Jump</span>
          </div>
        )}

        {isGameOver && (
          <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center gap-2">
            <div className="text-sm font-bold text-red-400 font-mono">Fell into the Void</div>
            <div className="text-xs font-mono text-zinc-300">Final Score: {score}</div>
            <button
              onClick={restartGame}
              className="px-4 py-2 rounded-lg bg-[#a3e635] text-black font-bold text-xs flex items-center gap-1.5 hover:bg-[#bef264]"
            >
              <RotateCcw size={14} /> Retry Jump
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
        <span>Controls: Spacebar / Click canvas to jump</span>
        <button
          onClick={() => {
            const canvas = canvasRef.current;
            if (canvas && isPlaying) {
              const evt = new KeyboardEvent('keydown', { code: 'Space' });
              window.dispatchEvent(evt);
            }
          }}
          className="px-3 py-1 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[#a3e635] font-bold sm:hidden"
        >
          TAP JUMP
        </button>
      </div>
    </div>
  );
};

/* ---------------- 4. RACING GAME SPEEDOMETER & DRIFT ---------------- */
export const RacingSimulator: React.FC = () => {
  const [speed, setSpeed] = useState<number>(142);
  const [rpm, setRpm] = useState<number>(6800);
  const [gear, setGear] = useState<number>(4);

  const accelerate = () => {
    setSpeed((prev) => Math.min(265, prev + 18));
    setRpm((prev) => Math.min(8500, prev + 600));
  };

  const brake = () => {
    setSpeed((prev) => Math.max(0, prev - 25));
    setRpm((prev) => Math.max(1000, prev - 1200));
  };

  return (
    <div className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] font-mono">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-primary)]">
          <Gauge size={16} className="text-[#a3e635]" />
          <span>BROWSER RACER · TELEMETRY HUD</span>
        </div>
        <span className="text-[11px] text-[#a3e635]">KINEMATIC DRAG: 0.94</span>
      </div>

      <div className="grid grid-cols-3 gap-3 p-4 rounded-lg bg-[#0d0f14] border border-[var(--border-subtle)] text-center mb-3">
        <div>
          <div className="text-[10px] text-zinc-400">SPEED</div>
          <div className="text-2xl font-black text-[#a3e635] tabular-nums">{speed} <span className="text-xs">KM/H</span></div>
        </div>
        <div>
          <div className="text-[10px] text-zinc-400">ENGINE TACHOMETER</div>
          <div className="text-2xl font-black text-white tabular-nums">{rpm} <span className="text-xs">RPM</span></div>
        </div>
        <div>
          <div className="text-[10px] text-zinc-400">GEAR RATIO</div>
          <div className="text-2xl font-black text-[#2dd4bf] tabular-nums">{speed === 0 ? 'N' : gear}</div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={accelerate}
          className="px-5 py-2 rounded-lg bg-[#a3e635] text-black font-bold text-xs hover:bg-[#bef264] transition-transform active:scale-95"
        >
          THROTTLE (ACCELERATE)
        </button>
        <button
          onClick={brake}
          className="px-5 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-bold text-xs hover:border-red-400 hover:text-red-400 transition-colors"
        >
          HYDRAULIC BRAKE
        </button>
      </div>
    </div>
  );
};
