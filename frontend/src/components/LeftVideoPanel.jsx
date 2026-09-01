import React from 'react';

export default function LeftVideoPanel({ onBack }) {
  return (
    <div className="w-full md:w-[420px] lg:w-[480px] h-[300px] md:h-screen sticky top-0 z-30 bg-slate-950 overflow-hidden shadow-2xl flex-shrink-0 relative">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover opacity-90"
      >
        <source src="/solar.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-between p-6">
        <button 
          onClick={onBack} 
          className="self-start text-xs font-bold text-white/90 bg-black/40 hover:bg-black/60 px-3.5 py-2 rounded-full backdrop-blur-md transition-all border border-white/10 cursor-pointer shadow-md"
        >
          ← Back to Home
        </button>
        
        <div className="space-y-1">
          <span className="text-xs font-bold text-[#d62300] uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-md backdrop-blur-md">
            📍 Visual Companion
          </span>
          <h2 className="text-white text-xl font-extrabold drop-shadow-md">
            Exploring Destinations Visually
          </h2>
        </div>
      </div>
    </div>
  );
}