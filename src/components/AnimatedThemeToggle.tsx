import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const AnimatedThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className={`relative inline-flex items-center h-9 w-[78px] rounded-full p-1 transition-colors duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-purple-400/50 shadow-inner select-none flex-shrink-0 pop-btn ${
        isDark
          ? 'bg-slate-800/90 border border-slate-700 shadow-glow-lavender/10'
          : 'bg-gradient-to-r from-amber-100 to-sky-100 border border-amber-200/90 shadow-2xs'
      }`}
    >
      {/* Background Decorative Icons (Embedded in track) */}
      <div className="absolute inset-0 flex items-center justify-between px-2 text-[10px] pointer-events-none font-black">
        {/* Sun side */}
        <span
          className={`transition-all duration-300 transform ${
            isDark ? 'opacity-30 scale-75 translate-x-1' : 'opacity-90 scale-100 text-amber-600'
          }`}
        >
          ☀️
        </span>
        {/* Moon side */}
        <span
          className={`transition-all duration-300 transform ${
            isDark ? 'opacity-90 scale-100 text-purple-300' : 'opacity-30 scale-75 -translate-x-1'
          }`}
        >
          🌙
        </span>
      </div>

      {/* Floating Animated Thumb Knob */}
      <div
        className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 shadow-md ${
          isDark
            ? 'translate-x-[42px] bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-purple-900/40 ring-1 ring-purple-400/30'
            : 'translate-x-0 bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-200 text-amber-900 shadow-amber-300/50 ring-1 ring-amber-300/50'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {isDark ? (
          /* Animated Moon Icon with Sparkle */
          <svg
            className="w-4 h-4 text-purple-100 animate-in spin-in-180 duration-500"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            {/* Crater dots */}
            <circle cx="10" cy="12" r="1" fill="#C4B5FD" opacity="0.6" />
            <circle cx="14" cy="15" r="0.8" fill="#C4B5FD" opacity="0.6" />
          </svg>
        ) : (
          /* Animated Sun Icon with Spinning Rays */
          <svg
            className="w-4 h-4 text-amber-900 animate-in spin-in-90 duration-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" fill="#FDE68A" />
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="2" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
      </div>
    </button>
  );
};
