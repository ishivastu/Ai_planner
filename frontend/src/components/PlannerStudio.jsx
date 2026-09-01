import React, { useState } from 'react';
import DayCard from './DayCard';

export default function PlannerStudio() {
  const [prompt, setPrompt] = useState('');
  const [Trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTrip(null);

    try {
      const response = await fetch('/api/plan-trip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Something went wrong');

      setTrip(result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // C++ style element swapping function
  const moveActivityUp = (dayIndex, actIndex) => {
    if (actIndex === 0) return; 
    
    const newData = { ...Trip };
    const activities = newData.days[dayIndex].activities;
    
    const temp = activities[actIndex - 1];
    activities[actIndex - 1] = activities[actIndex];
    activities[actIndex] = temp;

    setTrip(newData);
  };


  const removeActivity = (dayIndex, activityId) => {
    const newData = { ...Trip };
    const activities = newData.days[dayIndex].activities;
    
    const updatedActivities = [];
    for (let i = 0; i < activities.length; i++) {
      if (activities[i].id !== activityId) {
        updatedActivities.push(activities[i]); 
      }
    }
    
    newData.days[dayIndex].activities = updatedActivities;
    setTrip(newData);
  };

  let dayCardElements = [];
  if (Trip && Trip.days) {
    for (let dIndex = 0; dIndex < Trip.days.length; dIndex++) {
      const day = Trip.days[dIndex];
      
      dayCardElements.push(
        <DayCard 
          key={day.dayNumber} 
          day={day} 
          dayIndex={dIndex} 
          onMoveUp={moveActivityUp} 
          onRemove={removeActivity} 
        />
      );
    }
  }

  return (
    <div className="flex-1 min-h-screen p-6 sm:p-12 overflow-y-auto">
      <div className="max-w-2xl mx-auto space-y-8">
        
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
           Tomato Studio
          </h1>
          <div className="text-xs font-bold uppercase tracking-wider text-[#d62300] bg-red-50 px-3 py-1 rounded-full border border-red-100">
            AI Trip Builder
          </div>
        </div>

        <form onSubmit={handleGenerate} className="bg-white border border-[#f0e6d7] p-3 sm:p-4 rounded-3xl shadow-lg flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            className="flex-1 bg-[#fcfbfa] border border-[#f4f0ec] text-slate-800 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d62300]/50 placeholder-slate-400 font-medium text-sm transition-all"
            placeholder="e.g., 3 days in Manali on a budget..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
          <button 
            type="submit" 
            disabled={loading}
            className="bg-[#d62300] hover:bg-[#b51d00] text-white font-bold px-8 py-4 rounded-2xl disabled:opacity-50 transition-all shadow-md flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Planning...
              </>
            ) : (
              'Generate Trip'
            )}
          </button>
        </form>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-5 rounded-2xl text-center shadow-sm font-semibold text-sm">
            <p>{error}</p>
            <button onClick={handleGenerate} className="mt-2 text-xs underline hover:text-red-800 font-bold cursor-pointer">
              Click to Retry
            </button>
          </div>
        )}

        {Trip && (
          <div className="space-y-6 animate-fade-in pt-4">
            
            <div className="bg-gradient-to-r from-[#885133] to-[#6d4027] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-3">
              <div className="inline-block bg-white/10 text-amber-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-xs">
                Generated Trip
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{Trip.title}</h2>
              <div className="inline-flex items-center gap-2 bg-black/20 px-4 py-2 rounded-xl backdrop-blur-xs border border-white/10">
                <span className="text-slate-300 text-xs font-medium">Estimated Budget:</span>
                <span className="font-bold text-amber-300 text-sm">{Trip.budget}</span>
              </div>
            </div>

            <div className="space-y-4">
              {dayCardElements}
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}

// no