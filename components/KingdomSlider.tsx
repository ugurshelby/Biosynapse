import React, { useState } from 'react';
import { PROTISTA_PAIRS } from '../constants';
import { FocusTerm } from './FocusTerm';

export const KingdomSlider: React.FC = () => {
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [selectedOrganism, setSelectedOrganism] = useState<string | null>(null);

  const handleOrganismClick = (org: string) => {
    if (matches[org]) return; 
    setSelectedOrganism(org);
  };

  const handleMethodClick = (method: string) => {
    if (!selectedOrganism) return;
    
    // Check correctness
    const correctPair = PROTISTA_PAIRS.find(p => p.organism === selectedOrganism && p.method === method);
    
    if (correctPair) {
      setMatches(prev => ({ ...prev, [selectedOrganism]: method }));
      setSelectedOrganism(null);
    } else {
      alert("Incorrect matching! Try again.");
      setSelectedOrganism(null);
    }
  };

  const isComplete = Object.keys(matches).length === PROTISTA_PAIRS.length;

  return (
    <div className="py-8 space-y-4">
      <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-4 px-4">The 5 Kingdoms</h3>
      
      <div className="flex overflow-x-auto pb-8 px-4 gap-6 snap-x w-full">
        {/* Monera Card */}
        <div className="min-w-[300px] md:min-w-[350px] bg-white rounded-xl shadow-lg border border-slate-100 p-6 snap-center flex flex-col">
          <div className="h-40 bg-emerald-100 rounded-lg mb-4 flex items-center justify-center text-4xl">🦠</div>
          <h4 className="text-xl font-bold mb-2 text-slate-800">Monera</h4>
          <p className="text-slate-600 leading-relaxed">
            Unicellular and <FocusTerm term="Prokaryotic" definition="Lacking a membrane-enclosed nucleus." />. 
            Includes bacteria and <FocusTerm term="Cyanobacteria" definition="Photosynthetic bacteria containing chlorophyll." />.
          </p>
        </div>

        {/* Protista Card (Interactive) */}
        <div className="min-w-[320px] md:min-w-[400px] bg-blue-50 rounded-xl shadow-lg border-2 border-blue-200 p-6 snap-center flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-bl">Interactive</div>
          <h4 className="text-xl font-bold mb-4 text-slate-800">Protista: Locomotion Lab</h4>
          <p className="text-sm text-slate-600 mb-4">Match the organism to its movement tool.</p>
          
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-2">
              {PROTISTA_PAIRS.map(p => (
                <button
                  key={p.organism}
                  disabled={!!matches[p.organism]}
                  onClick={() => handleOrganismClick(p.organism)}
                  className={`px-3 py-2 rounded text-sm font-semibold transition-all ${
                    matches[p.organism] 
                      ? 'bg-green-100 text-green-700 border-green-300' 
                      : selectedOrganism === p.organism 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white border border-slate-200 hover:border-blue-400'
                  }`}
                >
                  {p.organism} {matches[p.organism] && '✓'}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {PROTISTA_PAIRS.map(p => (
                 <button
                 key={p.method}
                 disabled={Object.values(matches).includes(p.method)}
                 onClick={() => handleMethodClick(p.method)}
                 className={`px-3 py-2 rounded text-sm transition-all border ${
                   Object.values(matches).includes(p.method)
                     ? 'bg-slate-100 text-slate-400'
                     : 'bg-white border-dashed border-slate-400 hover:bg-blue-50'
                 }`}
               >
                 {p.method}
               </button>
              ))}
            </div>
          </div>
          {isComplete && <div className="mt-4 p-2 bg-green-100 text-green-800 text-center text-sm font-bold rounded">All Matched! Correct.</div>}
        </div>

        {/* Fungi Card */}
        <div className="min-w-[300px] md:min-w-[350px] bg-white rounded-xl shadow-lg border border-slate-100 p-6 snap-center flex flex-col">
          <div className="h-40 bg-orange-50 rounded-lg mb-4 flex items-center justify-center text-4xl">🍄</div>
          <h4 className="text-xl font-bold mb-2 text-slate-800">Fungi</h4>
          <p className="text-slate-600 leading-relaxed">
            Heterotrophic organisms that feed by <FocusTerm term="Absorption" definition="Secreting enzymes externally and absorbing nutrients. NOT ingestion." />. 
            Note: Yeast is the only unicellular fungus.
          </p>
        </div>
      </div>
    </div>
  );
};