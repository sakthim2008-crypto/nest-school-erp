import React from 'react';

// Friendly Educational Mascot "Nestie" the Owl Scholar
export const NestieMascot: React.FC<{
  size?: number;
  className?: string;
  variant?: 'greeting' | 'celebrating' | 'reading' | 'curious';
}> = ({ size = 64, className = '', variant = 'greeting' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      {/* Background Soft Glow */}
      <circle cx="60" cy="64" r="48" fill="#F3EFFF" />
      <circle cx="60" cy="64" r="40" fill="#E5DEFF" />

      {/* Owl Body */}
      <ellipse cx="60" cy="72" rx="34" ry="32" fill="#7C3AED" />
      {/* Owl Belly (Soft Lavender) */}
      <ellipse cx="60" cy="76" rx="22" ry="22" fill="#FAF8FF" />
      
      {/* Belly Feather Marks */}
      <path d="M52 70 Q60 74 68 70" stroke="#C4B5FD" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M54 78 Q60 82 66 78" stroke="#C4B5FD" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M56 86 Q60 89 64 86" stroke="#C4B5FD" strokeWidth="2.5" strokeLinecap="round" />

      {/* Owl Wings */}
      <path
        d="M26 64 C22 74 26 88 38 90 C34 82 32 72 36 64 Z"
        fill="#6D28D9"
      />
      <path
        d="M94 64 C98 74 94 88 82 90 C86 82 88 72 84 64 Z"
        fill="#6D28D9"
      />

      {/* Owl Feet (Peach Pink) */}
      <ellipse cx="50" cy="103" rx="7" ry="4" fill="#FDBAAB" />
      <ellipse cx="70" cy="103" rx="7" ry="4" fill="#FDBAAB" />

      {/* Big Friendly Eyes */}
      <circle cx="46" cy="54" r="14" fill="#FFFFFF" stroke="#6D28D9" strokeWidth="2.5" />
      <circle cx="74" cy="54" r="14" fill="#FFFFFF" stroke="#6D28D9" strokeWidth="2.5" />

      {/* Eye Pupils with Sparkle */}
      <circle cx="48" cy="54" r="7" fill="#26334D" />
      <circle cx="72" cy="54" r="7" fill="#26334D" />
      <circle cx="46" cy="52" r="2.5" fill="#FFFFFF" />
      <circle cx="70" cy="52" r="2.5" fill="#FFFFFF" />

      {/* Cute Glasses Bridge & Rim */}
      <circle cx="46" cy="54" r="14" fill="none" stroke="#FDE68A" strokeWidth="3" />
      <circle cx="74" cy="54" r="14" fill="none" stroke="#FDE68A" strokeWidth="3" />
      <path d="M60 54 L60 54" stroke="#FDE68A" strokeWidth="4" strokeLinecap="round" />
      <path d="M59 54 Q60 51 61 54" stroke="#FDE68A" strokeWidth="3" fill="none" />

      {/* Little Beak (Sunshine Yellow) */}
      <path d="M57 60 L63 60 L60 67 Z" fill="#F59E0B" />

      {/* Cute Cheeks (Peach Pink) */}
      <circle cx="34" cy="62" r="4.5" fill="#FDBAAB" opacity="0.8" />
      <circle cx="86" cy="62" r="4.5" fill="#FDBAAB" opacity="0.8" />

      {/* Graduation Cap */}
      <path d="M60 20 L92 30 L60 40 L28 30 Z" fill="#26334D" />
      <path d="M44 35 L44 42 C44 47 76 47 76 42 L76 35 Z" fill="#1B2436" />
      {/* Golden Cap Button & Tassel */}
      <circle cx="60" cy="30" r="3" fill="#FDE68A" />
      <path d="M60 30 C72 32 78 38 78 46" stroke="#F59E0B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <ellipse cx="78" cy="48" rx="2.5" ry="4" fill="#F59E0B" />

      {/* Floating Sparkles for Celebrating variant */}
      {variant === 'celebrating' && (
        <>
          <path d="M18 36 L21 42 L27 45 L21 48 L18 54 L15 48 L9 45 L15 42 Z" fill="#FDE68A" />
          <path d="M102 32 L104 36 L108 38 L104 40 L102 44 L100 40 L96 38 L100 36 Z" fill="#7DD3FC" />
        </>
      )}
    </svg>
  );
};

// Books & Notebooks Illustration
export const IllustrationBooks: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="14" y="48" width="52" height="14" rx="4" fill="#7DD3FC" />
      <path d="M14 52 H66" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" />
      
      {/* Middle Book (Soft Lavender) */}
      <rect x="18" y="32" width="46" height="14" rx="4" fill="#C4B5FD" />
      <path d="M18 36 H64" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="3 3" />
      
      {/* Top Open Book (Pastel Mint & White Pages) */}
      <path d="M22 28 C30 24 38 24 40 26 C42 24 50 24 58 28 L58 16 C50 12 42 12 40 14 C38 12 30 12 22 16 Z" fill="#A7F3D0" />
      <path d="M24 26 C31 23 37 23 40 24 C43 23 49 23 56 26 L56 16 C49 13 43 13 40 14 C37 13 31 13 24 16 Z" fill="#FFFFFF" />
      <line x1="40" y1="14" x2="40" y2="25" stroke="#059669" strokeWidth="1.5" />
      
      {/* Floating Bookmark (Peach Pink) */}
      <path d="M38 14 L42 14 L42 22 L40 20 L38 22 Z" fill="#FDBAAB" />

      {/* Little Learning Sparkles */}
      <circle cx="68" cy="18" r="2.5" fill="#FDE68A" />
      <circle cx="12" cy="28" r="2" fill="#FDBAAB" />
      <circle cx="64" cy="44" r="1.5" fill="#A7F3D0" />
    </svg>
  );
};

// Pencil & Stationery Illustration
export const IllustrationPencilStationery: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Ruler in background (Sky Blue) */}
      <rect x="12" y="52" width="56" height="12" rx="3" fill="#7DD3FC" opacity="0.9" />
      <path d="M20 52 V56 M28 52 V58 M36 52 V56 M44 52 V58 M52 52 V56 M60 52 V58" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Diagonal Pencil */}
      <g transform="rotate(-35 40 40)">
        {/* Pencil Eraser (Peach Pink) */}
        <rect x="20" y="34" width="10" height="12" rx="2" fill="#FDBAAB" />
        {/* Metal Ferrule */}
        <rect x="30" y="34" width="5" height="12" fill="#CBD5E1" />
        {/* Pencil Body (Sunshine Yellow) */}
        <rect x="35" y="34" width="28" height="12" fill="#FDE68A" />
        <line x1="35" y1="38" x2="63" y2="38" stroke="#F59E0B" strokeWidth="1.5" />
        <line x1="35" y1="42" x2="63" y2="42" stroke="#F59E0B" strokeWidth="1.5" />
        {/* Wood Sharpened Tip */}
        <polygon points="63,34 74,40 63,46" fill="#FED7AA" />
        {/* Graphite Tip */}
        <polygon points="70,38 74,40 70,42" fill="#26334D" />
      </g>

      {/* Learning Stars */}
      <path d="M62 16 L64 20 L68 21 L64 22 L62 26 L60 22 L56 21 L60 20 Z" fill="#C4B5FD" />
      <circle cx="18" cy="22" r="3" fill="#A7F3D0" />
    </svg>
  );
};

// Graduation Cap & Diploma Illustration
export const IllustrationGraduationCap: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Soft Circle */}
      <circle cx="40" cy="40" r="32" fill="#FAF8FF" />
      
      {/* Graduation Cap Diamond (Soft Lavender & Deep Navy) */}
      <polygon points="40,16 68,26 40,36 12,26" fill="#26334D" />
      <polygon points="40,18 64,26 40,34 16,26" fill="#475569" />
      <path d="M26,31 L26,42 C26,48 54,48 54,42 L54,31" fill="#1E293B" />
      
      {/* Golden Button & Tassel */}
      <circle cx="40" cy="26" r="3" fill="#FDE68A" />
      <path d="M40 26 C52 28 58 35 58 45" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      <rect x="56" y="45" width="4" height="6" rx="1.5" fill="#F59E0B" />

      {/* Rolled Diploma Scroll (Light Cream with Peach Ribbon) */}
      <rect x="24" y="54" width="32" height="10" rx="3" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1.5" />
      <rect x="37" y="53" width="6" height="12" rx="1" fill="#FDBAAB" />
      
      {/* Sparkles */}
      <circle cx="20" cy="18" r="2.5" fill="#7DD3FC" />
      <circle cx="66" cy="56" r="2" fill="#A7F3D0" />
    </svg>
  );
};

// Achievement Trophy & Star Illustration
export const IllustrationTrophy: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Trophy Cup (Sunshine Yellow & Gold) */}
      <path d="M26 22 H54 V36 C54 44 46 48 40 48 C34 48 26 44 26 36 V22 Z" fill="#FDE68A" stroke="#F59E0B" strokeWidth="2" />
      <path d="M30 26 H50 V34 C50 40 45 44 40 44 C35 44 30 40 30 34 V26 Z" fill="#FEF08A" />
      
      {/* Handles */}
      <path d="M26 26 C16 26 16 38 26 40" stroke="#F59E0B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M54 26 C64 26 64 38 54 40" stroke="#F59E0B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      
      {/* Stem & Base */}
      <rect x="37" y="48" width="6" height="8" fill="#F59E0B" />
      <rect x="28" y="56" width="24" height="8" rx="2" fill="#26334D" />
      <rect x="32" y="58" width="16" height="4" rx="1" fill="#C4B5FD" />

      {/* Star Symbol on Cup */}
      <path d="M40 28 L42 32 L46 33 L43 36 L44 40 L40 38 L36 40 L37 36 L34 33 L38 32 Z" fill="#F59E0B" />

      {/* Floating Confetti */}
      <circle cx="16" cy="20" r="2.5" fill="#7DD3FC" />
      <circle cx="64" cy="18" r="2.5" fill="#FDBAAB" />
      <circle cx="68" cy="46" r="2" fill="#A7F3D0" />
    </svg>
  );
};

// Creative Wavy Section Separator with Pastel Gradients
export const PastelWaveSeparator: React.FC<{
  className?: string;
  colorFrom?: string;
  colorTo?: string;
}> = ({ className = '', colorFrom = '#C4B5FD', colorTo = '#7DD3FC' }) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-8 sm:h-10 opacity-70"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colorFrom} stopOpacity="0.4" />
            <stop offset="50%" stopColor={colorTo} stopOpacity="0.3" />
            <stop offset="100%" stopColor="#A7F3D0" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path
          d="M0,25 C150,55 350,0 500,25 C650,50 850,5 1000,25 C1100,38 1160,15 1200,25 L1200,60 L0,60 Z"
          fill="url(#waveGradient)"
        />
      </svg>
    </div>
  );
};
