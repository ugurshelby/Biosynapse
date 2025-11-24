import React, { useState } from 'react';
import { FocusTerm } from './FocusTerm';

export const MoleculeBuilder: React.FC = () => {
  const [isBonded, setIsBonded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden my-12">
      <div className="p-6 border-b border-slate-100 bg-slate-50">
        <h3 className="text-2xl font-serif font-bold text-slate-800">Molecule Builder</h3>
        <p className="text-slate-600 mt-2">
          Visualize <FocusTerm term="Dehydration Synthesis" definition="Linking monomers by removing water." /> vs. <FocusTerm term="Hydrolysis" definition="Breaking bonds by adding water." />.
        </p>
      </div>

      <div className="p-8 flex flex-col items-center">
        <div className="relative h-64 w-full max-w-lg flex items-center justify-center">
          
          {/* Monomer 1 */}
          <div className={`transition-all duration-700 transform ${isBonded ? 'translate-x-4' : '-translate-x-8'}`}>
            <svg width="100" height="110" viewBox="0 0 100 110" className="drop-shadow-lg">
               <polygon points="50,5 95,27 95,73 50,95 5,73 5,27" fill="#E0F2FE" stroke="#0284C7" strokeWidth="3" />
               <text x="50" y="55" textAnchor="middle" fill="#0369A1" fontSize="14" fontWeight="bold">Glucose</text>
               {!isBonded && <text x="90" y="60" className="text-xs" fill="#EF4444" fontWeight="bold">OH</text>}
            </svg>
          </div>

          {/* Linkage / Water */}
          <div className="h-20 w-20 flex items-center justify-center z-10">
            {isBonded ? (
               <div className="animate-pulse text-slate-400 font-bold text-xl">
                 — O —
               </div>
            ) : (
              <div className="opacity-0"></div>
            )}
          </div>

          {/* Monomer 2 */}
          <div className={`transition-all duration-700 transform ${isBonded ? '-translate-x-4' : 'translate-x-8'}`}>
             <svg width="100" height="110" viewBox="0 0 100 110" className="drop-shadow-lg">
               <polygon points="50,5 95,27 95,73 50,95 5,73 5,27" fill="#E0F2FE" stroke="#0284C7" strokeWidth="3" />
               <text x="50" y="55" textAnchor="middle" fill="#0369A1" fontSize="14" fontWeight="bold">Glucose</text>
               {!isBonded && <text x="10" y="60" className="text-xs" fill="#EF4444" fontWeight="bold">H</text>}
            </svg>
          </div>

          {/* Water Droplet Animation */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${isBonded ? 'opacity-100 mt-24' : 'opacity-0 mt-0'}`}>
            <div className="flex flex-col items-center">
              <span className="text-3xl">💧</span>
              <span className="text-xs font-bold text-blue-500">H₂O Released</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => setIsBonded(true)}
            disabled={isBonded}
            className={`px-6 py-3 rounded-lg font-bold shadow-sm transition-all ${isBonded ? 'bg-slate-100 text-slate-400' : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}
          >
            Dehydrate (Join)
          </button>
          <button
             onClick={() => setIsBonded(false)}
             disabled={!isBonded}
             className={`px-6 py-3 rounded-lg font-bold shadow-sm transition-all ${!isBonded ? 'bg-slate-100 text-slate-400' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Hydrolyze (Break)
          </button>
        </div>
        
        <div className="mt-4 text-sm text-slate-500 italic">
          Note: Glucose ring form is called the "Haworth projection".
        </div>
      </div>
    </div>
  );
};