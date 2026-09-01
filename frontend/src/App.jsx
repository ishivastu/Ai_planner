import React from 'react';
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PlannerPage from "./pages/PlannerPage"; 

const App = () => {
  return (
    <div className="min-h-screen bg-[#fcfbfa] text-slate-800 font-sans">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      
        <Route path="/planner" element={<PlannerPage />} />
      </Routes>
    </div>
  );
};

export default App;