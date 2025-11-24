import React from 'react';
import { FocusTerm } from './FocusTerm';

export const PlantHierarchy: React.FC = () => {
  return (
    <div className="my-12 p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100">
      <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-6 text-center">Plant Kingdom Evolution</h3>
      
      <div className="flex flex-col items-center gap-6 relative">
        
        {/* Branch 1 */}
        <div className="w-full flex flex-col md:flex-row gap-4 justify-center items-start">
            <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border-l-4 border-emerald-300 w-full">
                <h4 className="font-bold text-emerald-800">Non-Vascular</h4>
                <p className="text-sm text-slate-600 mt-1">Live in moist environments. No roots/stems.</p>
                <div className="mt-2 text-xs font-semibold bg-emerald-100 inline-block px-2 py-1 rounded text-emerald-800">
                    Mosses, Liverworts
                </div>
            </div>
            
            <div className="hidden md:block text-4xl text-emerald-200">→</div>
            
            <div className="flex-[2] bg-white p-4 rounded-xl shadow-sm border-l-4 border-emerald-600 w-full">
                <h4 className="font-bold text-emerald-800">Vascular Plants</h4>
                <p className="text-sm text-slate-600 mt-1">
                    Developed <FocusTerm term="Xylem" definition="Moves water and minerals UP from soil." /> and <FocusTerm term="Phloem" definition="Distributes photosynthetic products." />.
                </p>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-3 rounded border border-slate-200">
                        <span className="font-bold text-slate-700 block mb-1">Primitive (Seedless)</span>
                        <span className="text-xs text-slate-500">Reproduce via spores.</span>
                        <div className="mt-1 text-xs font-bold text-emerald-700">Ferns</div>
                    </div>
                    
                    <div className="bg-emerald-50 p-3 rounded border border-emerald-200">
                        <span className="font-bold text-emerald-900 block mb-1">Seed Plants</span>
                        <span className="text-xs text-slate-500">Most advanced group.</span>
                        <div className="mt-2 space-y-2">
                             <div className="text-xs border-l-2 border-emerald-400 pl-2">
                                <strong>Gymnosperms:</strong> "Naked seeds" (Cones).
                                <br/><span className="italic text-slate-400">Pines, Spruce.</span>
                             </div>
                             <div className="text-xs border-l-2 border-pink-400 pl-2">
                                <strong>Angiosperms:</strong> Flowering Plants.
                                <br/><span className="italic text-slate-400">Divided into Monocots & Dicots.</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="text-xs text-center text-slate-400 italic mt-2">
            "Reasons for mosses living in water: Reproductive cycle dependent on abundant moisture."
        </div>
      </div>
    </div>
  );
};