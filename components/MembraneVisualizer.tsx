import React, { useState } from 'react';

type Tonicity = 'hypertonic' | 'isotonic' | 'hypotonic';

export const MembraneVisualizer: React.FC = () => {
  const [concentration, setConcentration] = useState(50);

  const getTonicity = (val: number): Tonicity => {
    if (val < 35) return 'hypotonic';
    if (val > 65) return 'hypertonic';
    return 'isotonic';
  };

  const tonicity = getTonicity(concentration);

  const descriptions = {
    hypertonic: {
      title: "Hypertonic Solution (High Salt)",
      desc: "Free water is less outside. Water moves OUT. Cell shrinks (Plasmolysis).",
      cellClass: "scale-75 skew-x-12 opacity-80",
      bgOpacity: "opacity-80"
    },
    isotonic: {
      title: "Isotonic Solution (Equal)",
      desc: "Dynamic equilibrium. Water moves equally in and out. Normal cell shape.",
      cellClass: "scale-100",
      bgOpacity: "opacity-30"
    },
    hypotonic: {
      title: "Hypotonic Solution (Low/No Salt)",
      desc: "Free water is more outside. Water moves IN. Cell swells and may explode (Lysis).",
      cellClass: "scale-125",
      bgOpacity: "opacity-10"
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden my-8">
      <div className="p-6 border-b border-slate-100 bg-slate-50">
        <h3 className="text-2xl font-serif font-bold text-slate-800">Osmosis Lab</h3>
        <p className="text-slate-600 mt-2">
          Adjust the <span className="font-bold text-blue-600">Salt Concentration</span> to observe the effect on the Red Blood Cell.
        </p>
      </div>

      <div className="p-8">
        <div className="mb-8 px-4">
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={concentration} 
              onChange={(e) => setConcentration(Number(e.target.value))}
              className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span>0% (Distilled)</span>
                <span>50% (Saline)</span>
                <span>100% (Salty)</span>
            </div>
        </div>

        <div className="relative h-64 w-full bg-blue-50 rounded-xl border-4 border-blue-200 overflow-hidden flex items-center justify-center transition-colors duration-500">
          {/* Solution Particles (Salt) */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${descriptions[tonicity].bgOpacity} pointer-events-none`}>
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMzM0MTU1IiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] opacity-50"></div>
          </div>

          {/* Red Blood Cell */}
          <div className={`relative w-32 h-32 bg-red-500 rounded-full flex items-center justify-center shadow-inner transition-all duration-700 ease-in-out border-4 border-red-400 ${descriptions[tonicity].cellClass}`}>
            <div className="w-24 h-24 bg-red-400 rounded-full opacity-50 blur-sm"></div>
            
            {/* Lysis Effect */}
            {tonicity === 'hypotonic' && concentration < 15 && (
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-1 bg-red-800 absolute rotate-45"></div>
                    <div className="w-full h-1 bg-red-800 absolute -rotate-45"></div>
                 </div>
            )}
            
            <span className="absolute text-white font-bold text-xs opacity-80 z-10">RBC</span>
            
            {/* Arrows */}
            {tonicity === 'hypertonic' && (
              <>
                <div className="absolute -top-10 text-2xl animate-bounce text-blue-600 font-bold">↑ H₂O</div>
              </>
            )}
             {tonicity === 'hypotonic' && (
              <>
                <div className="absolute -left-12 text-2xl animate-pulse text-blue-600 font-bold">→ H₂O</div>
                <div className="absolute -right-12 text-2xl animate-pulse text-blue-600 font-bold">← H₂O</div>
              </>
            )}
          </div>
        </div>

        <div className="mt-6 text-center">
          <h4 className="text-xl font-bold text-slate-800 mb-2 transition-all">{descriptions[tonicity].title}</h4>
          <p className="text-slate-600">{descriptions[tonicity].desc}</p>
        </div>
      </div>
    </div>
  );
};