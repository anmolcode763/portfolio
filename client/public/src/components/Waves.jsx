import React from 'react';

export function TopWave() {
  return (
    <div className="absolute top-0 left-0 w-full z-10" style={{ pointerEvents: 'none' }}>
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
        <path fill="url(#waveGradientTop)" d="M0,80 C480,160 960,0 1440,80 L1440,0 L0,0 Z" />
        <defs>
          <linearGradient id="waveGradientTop" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3A3A8C" />
            <stop offset="0.6" stopColor="#A084E8" />
            <stop offset="1" stopColor="#F7CA18" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function BottomWave() {
  return (
    <div className="absolute bottom-0 left-0 w-full z-10" style={{ pointerEvents: 'none' }}>
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
        <path fill="url(#waveGradientBottom)" d="M0,40 C480,120 960,0 1440,40 L1440,120 L0,120 Z" />
        <defs>
          <linearGradient id="waveGradientBottom" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3A3A8C" />
            <stop offset="0.6" stopColor="#A084E8" />
            <stop offset="1" stopColor="#F7CA18" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
