import React from 'react';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0f0b17] to-[#1a1730]">
      <div className="flex flex-col items-center">
        <div className="relative w-36 h-36">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2b2650] to-[#3a3760] opacity-40 blur-lg" />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4">
            <div className="w-6 h-6 rounded-full bg-[#A084E8] animate-pulse-slow"></div>
            <div className="w-6 h-6 rounded-full bg-[#F7CA18] animate-pulse-slow delay-200"></div>
            <div className="w-6 h-6 rounded-full bg-[#3A3A8C] animate-pulse-slow delay-400"></div>
          </div>
        </div>
        <span className="mt-6 text-lg font-bold premium-gradient animate-text-gradient">Preparing the experience...</span>
      </div>
    </div>
  );
}
