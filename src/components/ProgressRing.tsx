import React from 'react';

interface ProgressRingProps {
  progress: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  color?: string; // hex or tailwind class
  trackColor?: string;
  showText?: boolean;
  textSize?: string;
  subtext?: string;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
  progress,
  size = 64,
  strokeWidth = 6,
  color = '#16B8A6', // Aqua Teal default
  trackColor = '#E2E8F0',
  showText = true,
  textSize = 'text-xs font-bold',
  subtext
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const validProgress = Math.min(Math.max(progress, 0), 100);
  const strokeDashoffset = circumference - (validProgress / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center flex-shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      {showText && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className={`${textSize} text-midnight leading-none`}>
            {Math.round(validProgress)}%
          </span>
          {subtext && (
            <span className="text-[9px] text-slate-400 mt-0.5 leading-none">
              {subtext}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
