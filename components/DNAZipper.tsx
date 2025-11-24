import React, { useState } from 'react';

const SEQUENCE = [
  { base: 'A', pair: 'T', bonds: 2 },
  { base: 'C', pair: 'G', bonds: 3 },
  { base: 'G', pair: 'C', bonds: 3 },
  { base: 'T', pair: 'A', bonds: 2 },
  { base: 'A', pair: 'T', bonds: 2 },
];

export const DNAZipper: React.FC = () => {
  const [userSequence, setUserSequence] = useState<string[]>([]);
  const [complete, setComplete] = useState(false);

  const handleBaseClick = (base: string) => {
    if (complete) return;
    
    const currentIndex = userSequence.length;
    const correctBase = SEQUENCE[currentIndex].pair;

    if (base === correctBase) {
      const newSeq = [...userSequence, base];
      setUserSequence(newSeq);
      if (newSeq.length === SEQUENCE.length) {
        setComplete(true);
      }
    } else {
      // Shake effect logic could go here, for now simple alert/feedback via UI
      const btn = document.getElementById(`btn-${base}`);
      if(btn) {
        btn.classList.add('bg-red-500');
        setTimeout(() => btn.classList.remove('bg-red-500'), 200);
      }
    }
  };

  const reset = () => {
    setUserSequence([]);
    setComplete(false);
  };

  return (
    <div className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden my-12 text-white">
      <div className="p-6 border-b border-slate-700">
        <h3 className="text-2xl font-serif font-bold text-blue-400">DNA Replication: The Zipper</h3>
        <p className="text-slate-400 mt-2 text-sm">
          Match the bases to zip the strands. Remember: <span className="text-white font-bold">A=T (2 bonds)</span> and <span className="text-white font-bold">G≡C (3 bonds)</span>.
        </p>
      </div>

      <div className="p-8 flex flex-col items-center">
        {/* DNA Visualization */}
        <div className="flex gap-8 mb-8 relative">
           
           {/* Left Strand (Template) */}
           <div className="flex flex-col gap-2">
             {SEQUENCE.map((item, idx) => (
               <div key={`L-${idx}`} className="w-16 h-12 flex items-center justify-center bg-blue-600 rounded-l-lg font-bold border-r-4 border-blue-800">
                 {item.base}
               </div>
             ))}
           </div>

           {/* Hydrogen Bonds & Zipper Effect */}
           <div className="flex flex-col gap-2 items-center w-16">
             {SEQUENCE.map((item, idx) => (
               <div key={`B-${idx}`} className="h-12 flex items-center justify-center">
                 {idx < userSequence.length ? (
                   <div className="flex flex-col gap-[2px] opacity-0 animate-fade-in" style={{opacity: 1}}>
                     {/* Render 2 or 3 lines for H-bonds */}
                     {Array.from({ length: item.bonds }).map((_, i) => (
                       <div key={i} className="w-8 h-[2px] bg-white/50"></div>
                     ))}
                   </div>
                 ) : (
                   <span className="text-slate-700 text-xs">...</span>
                 )}
               </div>
             ))}
           </div>

           {/* Right Strand (Building) */}
           <div className="flex flex-col gap-2">
             {SEQUENCE.map((item, idx) => (
               <div 
                key={`R-${idx}`} 
                className={`w-16 h-12 flex items-center justify-center rounded-r-lg font-bold transition-all duration-300 border-l-4
                  ${idx < userSequence.length ? 'bg-emerald-600 border-emerald-800 scale-100' : 'bg-slate-800 border-slate-700 scale-90 opacity-50'}
                `}
               >
                 {idx < userSequence.length ? userSequence[idx] : '?'}
               </div>
             ))}
           </div>
        </div>

        {/* Controls */}
        {!complete ? (
          <div className="grid grid-cols-4 gap-4">
            {['A', 'T', 'C', 'G'].map(base => (
              <button
                key={base}
                id={`btn-${base}`}
                onClick={() => handleBaseClick(base)}
                className="w-14 h-14 rounded-full bg-slate-700 hover:bg-slate-600 border-2 border-slate-500 font-bold text-xl transition-all active:scale-95"
              >
                {base}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center animate-fade-in">
            <div className="text-emerald-400 font-bold text-xl mb-4">Replication Complete!</div>
            <button onClick={reset} className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 font-semibold">
              Replay
            </button>
          </div>
        )}
      </div>
    </div>
  );
};