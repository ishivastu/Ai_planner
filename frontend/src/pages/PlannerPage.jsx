import React from 'react';
import { useNavigate } from 'react-router-dom';
import LeftVideoPanel from '../components/LeftVideoPanel';
import PlannerStudio from '../components/PlannerStudio';

export default function PlannerPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fcfbfa] text-slate-800 font-sans flex flex-col md:flex-row selection:bg-[#d62300]/30">
      
      {/* Left Sticky Video Panel (Passes navigation back to home route) */}
      <LeftVideoPanel onBack={() => navigate('/')} />

      {/* Right Search & Itinerary Studio */}
      <PlannerStudio />

    </div>
  );
}