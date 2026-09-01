import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link

export default function LandingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans flex flex-col selection:bg-[#d62300]/50">
      
      {/* Background Video Layer */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/solar.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Top Navbar */}
      <nav className="relative z-10 flex justify-between items-center p-6 sm:px-12">
        <div className="font-bold text-xl text-white flex items-center gap-2">
          <span className="text-2xl">🌍</span> Tomato
        </div>
        <div className="text-sm font-medium text-gray-300 hover:text-[#d62300] cursor-pointer transition-colors">
          Community Trips
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto -mt-16">
        
        {/* Avatar and Name */}
        <div className="flex items-center gap-3 mb-6">
          <img 
            src="https://ui-avatars.com/api/?name=Shivastu+Mishra&background=885133&color=fff&rounded=true" 
            alt="Avatar" 
            className="w-10 h-10 shadow-sm border border-white/20" 
          />
          <span className="text-2xl font-extrabold text-white">
            Tomato <span className="text-[#d62300] text-lg font-bold ml-1">by Shivastu</span>
          </span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
          AI Trip Planner
        </h1>
        
        {/* Subheadline */}
        <p className="text-gray-200 text-lg sm:text-xl mb-10 leading-relaxed drop-shadow-md">
          Smarter than endless tabs, a personalized trip builder and itinerary generator that saves you hours planning flights, hotels, and activities.
        </p>
        
        {/* Primary Action Button using React Router <Link> */}
        <Link
          to="/planner" // 2. Change this to whichever route path you want to open (e.g. "/login", "/signup", or a new route)
          className="bg-[#d62300] hover:bg-[#b51d00] text-white font-bold text-lg px-10 py-4 rounded-full transition-all shadow-[0_0_20px_rgba(214,35,0,0.4)] flex items-center gap-3 hover:scale-105 no-underline inline-flex"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Create a New Trip
        </Link>

        {/* Secondary Pill */}
        <div className="mt-6 border border-white/30 text-white font-bold text-sm px-6 py-2.5 rounded-full inline-flex items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-sm">
          🏨 Hey long time to see You
        </div>
      </main>
    </div>
  );
}