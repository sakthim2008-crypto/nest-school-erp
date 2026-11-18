import React, { createContext, useContext, useState, useEffect } from 'react';
import { Award, Sparkles, Star, Trophy, X } from 'lucide-react';

export interface SchoolBadge {
  id: string;
  title: string;
  emoji: string;
  desc: string;
  unlocked: boolean;
  unlockedAt?: string;
}

interface GamificationContextType {
  stars: number;
  streakDays: number;
  level: number;
  levelTitle: string;
  soundEnabled: boolean;
  toggleSound: () => void;
  addStars: (amount: number, reason?: string) => void;
  celebrateBadge: (badgeId: string) => void;
  activeCelebrationBadge: SchoolBadge | null;
  closeCelebration: () => void;
  badges: SchoolBadge[];
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

const LEVEL_TITLES = ['Novice', 'Explorer', 'Scholar', 'Champion', 'Master', 'Grand Sage'];

export const GamificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stars, setStars] = useState<number>(() => {
    const saved = localStorage.getItem('nest_stars');
    return saved ? parseInt(saved, 10) : 1240;
  });
  const [streakDays] = useState<number>(7);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [activeCelebrationBadge, setActiveCelebrationBadge] = useState<SchoolBadge | null>(null);
  const [starToast, setStarToast] = useState<{ amount: number; reason: string } | null>(null);

  const [badges, setBadges] = useState<SchoolBadge[]>([
    {
      id: 'punctuality-ace',
      title: 'Punctuality Ace',
      emoji: '☀️',
      desc: '100% faculty and student leaves officially accounted for',
      unlocked: true,
      unlockedAt: 'Week 7'
    },
    {
      id: 'curriculum-champion',
      title: 'Curriculum Champion',
      emoji: '📚',
      desc: '85% curriculum planners completed with recommendations',
      unlocked: true,
      unlockedAt: 'Week 7'
    },
    {
      id: 'pastoral-guardian',
      title: 'Pastoral Guardian',
      emoji: '💖',
      desc: '100% pastoral and SEN issues resolved within 48-hour SLA',
      unlocked: true,
      unlockedAt: 'Week 7'
    },
    {
      id: 'pedagogy-pioneer',
      title: 'Pedagogy Pioneer',
      emoji: '🎓',
      desc: '68 of 68 classroom observations successfully achieved',
      unlocked: true,
      unlockedAt: 'Week 7'
    }
  ]);

  const level = Math.min(Math.floor(stars / 400) + 1, LEVEL_TITLES.length);
  const levelTitle = LEVEL_TITLES[level - 1];

  // Synthesize pleasant sound with Web Audio API (zero audio file dependency!)
  const playSound = (type: 'pop' | 'chime' | 'fanfare') => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      if (type === 'pop') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === 'chime') {
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.06 + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.06);
          osc.stop(ctx.currentTime + idx * 0.06 + 0.35);
        });
      } else if (type === 'fanfare') {
        [440, 554.37, 659.25, 880].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.1, ctx.currentTime + idx * 0.09);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.09 + 0.5);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.09);
          osc.stop(ctx.currentTime + idx * 0.09 + 0.5);
        });
      }
    } catch {
      // AudioContext unavailable or restricted by browser policy
    }
  };

  const addStars = (amount: number, reason: string = 'Metric Verified') => {
    setStars(prev => {
      const next = prev + amount;
      localStorage.setItem('nest_stars', next.toString());
      return next;
    });
    playSound('chime');
    setStarToast({ amount, reason });
    setTimeout(() => setStarToast(null), 2500);
  };

  const celebrateBadge = (badgeId: string) => {
    const badge = badges.find(b => b.id === badgeId);
    if (badge) {
      setActiveCelebrationBadge(badge);
      playSound('fanfare');
    }
  };

  const closeCelebration = () => {
    setActiveCelebrationBadge(null);
  };

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  return (
    <GamificationContext.Provider
      value={{
        stars,
        streakDays,
        level,
        levelTitle,
        soundEnabled,
        toggleSound,
        addStars,
        celebrateBadge,
        activeCelebrationBadge,
        closeCelebration,
        badges
      }}
    >
      {children}

      {/* Floating Star Toast Notification */}
      {starToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-white font-black text-xs shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-200">
          <Star className="w-4 h-4 fill-white text-white animate-spin" />
          <span>+{starToast.amount} Stars!</span>
          <span className="text-[11px] opacity-90 font-medium">({starToast.reason})</span>
        </div>
      )}

      {/* Celebration Modal Overlay */}
      {activeCelebrationBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white p-6 text-center shadow-2xl ring-4 ring-amber-300">
            {/* Background Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-gradient-to-r from-amber-400/20 via-pink-400/20 to-sky-400/20 blur-xl pointer-events-none"></div>

            <button
              onClick={closeCelebration}
              className="absolute top-4 right-4 p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-amber-100 to-amber-200 text-4xl shadow-inner mb-3">
                {activeCelebrationBadge.emoji}
              </div>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 mb-2">
                <Trophy className="w-3 h-3 text-amber-600" />
                Institutional Achievement
              </span>

              <h3 className="text-xl font-black text-slate-900 font-display">
                {activeCelebrationBadge.title}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {activeCelebrationBadge.desc}
              </p>

              <div className="mt-4 p-3 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs font-bold text-amber-900 flex items-center justify-center gap-2">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>+100 Institutional Merit Stars Awarded!</span>
              </div>

              <button
                onClick={closeCelebration}
                className="mt-5 w-full py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold text-xs shadow-md hover:shadow-lg transition-all pop-btn"
              >
                Continue Executive Review
              </button>
            </div>
          </div>
        </div>
      )}
    </GamificationContext.Provider>
  );
};

export const useGamification = () => {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
};
