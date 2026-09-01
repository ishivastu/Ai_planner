import React from 'react';

export default function DayCard({ day, dayIndex, onMoveUp, onRemove }) {
  
  const activityElements = [];
  
  for (let aIndex = 0; aIndex < day.activities.length; aIndex++) {
    const act = day.activities[aIndex];
    
    activityElements.push(
      <div key={act.id} className="bg-[#fcfbfa] border border-[#f4f0ec] p-4 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-[#885133]/20 transition-all">
        
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white bg-[#885133] px-2.5 py-1 rounded-lg">
              {act.time}
            </span>
            <span className="font-bold text-slate-800 text-base">{act.title}</span>
          </div>
          <p className="text-sm font-medium text-slate-500 pl-1">
            Estimated Cost: <span className="text-[#d62300] font-bold">{act.cost}</span>
          </p>
        </div>
        
        <div className="flex items-center gap-2 self-end sm:self-center">
          <button 
            onClick={() => onMoveUp(dayIndex, aIndex)}
            disabled={aIndex === 0} 
            className="text-[#885133] bg-[#f4f0ec] hover:bg-[#f0e6d7] px-3 py-1.5 rounded-xl text-xs font-bold transition-all disabled:opacity-30 disabled:hover:bg-[#f4f0ec]"
          >
            ⬆ Move Up
          </button>
          <button 
            onClick={() => onRemove(dayIndex, act.id)}
            className="text-red-600 bg-red-50 border border-red-100 hover:bg-red-100 px-3 py-1.5 rounded-xl text-xs font-bold transition-all"
          >
            Remove
          </button>
        </div>
        
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#f0e6d7] rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
      
      {/* Day Header */}
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#f4f0ec]">
        <div className="bg-[#f0e6d7] text-[#d62300] font-extrabold px-3.5 py-1.5 rounded-xl text-sm">
          Day {day.dayNumber}
        </div>
        <h3 className="font-extrabold text-lg text-[#885133]">{day.theme}</h3>
      </div>
      
      <div className="space-y-3.5">
        {activityElements}
        
        {day.activities.length === 0 && (
          <div className="text-center p-6 border-2 border-dashed border-[#f4f0ec] rounded-2xl bg-white">
            <p className="text-sm font-medium text-slate-400">No stops scheduled for this day.</p>
          </div>
        )}
      </div>
    </div>
  );
}