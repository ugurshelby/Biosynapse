import React, { useState } from 'react';
import { DragItem } from '../types';
import { MONOCOT_DICOT_ITEMS } from '../constants';

export const MonocotDicot: React.FC = () => {
  const [items, setItems] = useState<DragItem[]>(MONOCOT_DICOT_ITEMS);
  const [monocotBin, setMonocotBin] = useState<DragItem[]>([]);
  const [dicotBin, setDicotBin] = useState<DragItem[]>([]);
  const [lastFeedback, setLastFeedback] = useState<string | null>(null);

  const handleItemClick = (item: DragItem, target: 'monocot' | 'dicot') => {
    if (item.type === target) {
      // Correct
      setLastFeedback("Correct! ✅");
      if (target === 'monocot') {
        setMonocotBin([...monocotBin, item]);
      } else {
        setDicotBin([...dicotBin, item]);
      }
      setItems(items.filter(i => i.id !== item.id));
      
      // Clear feedback after delay
      setTimeout(() => setLastFeedback(null), 1500);
    } else {
      // Incorrect
      setLastFeedback("Try again! ❌");
      setTimeout(() => setLastFeedback(null), 1000);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-slate-50 rounded-2xl border border-slate-200 my-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-serif font-bold text-slate-800">Comparison Engine</h3>
        <p className="text-slate-600">Sort the characteristics into the correct group.</p>
        {lastFeedback && (
          <div className={`mt-2 font-bold ${lastFeedback.includes('Correct') ? 'text-green-600' : 'text-red-500'} animate-bounce`}>
            {lastFeedback}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Monocot Zone */}
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4 min-h-[300px]">
          <h4 className="text-emerald-800 font-bold text-center mb-4 border-b border-emerald-200 pb-2">MONOCOTS</h4>
          <div className="space-y-2">
            {monocotBin.map(item => (
              <div key={item.id} className="bg-emerald-100 text-emerald-800 p-2 rounded text-sm text-center font-medium animate-fade-in">
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Source Pool */}
        <div className="flex flex-col gap-3 justify-center">
          {items.length > 0 ? (
            items.map(item => (
              <div key={item.id} className="relative group">
                <div className="bg-white border border-slate-300 shadow-sm p-3 rounded-lg text-center font-medium cursor-pointer hover:shadow-md transition-shadow">
                  {item.label}
                </div>
                {/* Mobile/Desktop controls overlay on hover/focus */}
                <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                  <button 
                    onClick={() => handleItemClick(item, 'monocot')}
                    className="bg-emerald-600 text-white text-xs px-2 py-1 rounded hover:bg-emerald-700"
                  >
                    Monocot
                  </button>
                  <button 
                    onClick={() => handleItemClick(item, 'dicot')}
                    className="bg-blue-600 text-white text-xs px-2 py-1 rounded hover:bg-blue-700"
                  >
                    Dicot
                  </button>
                </div>
              </div>
            ))
          ) : (
             <div className="text-center text-slate-400 italic">All sorted!</div>
          )}
        </div>

        {/* Dicot Zone */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 min-h-[300px]">
          <h4 className="text-blue-800 font-bold text-center mb-4 border-b border-blue-200 pb-2">DICOTS</h4>
           <div className="space-y-2">
            {dicotBin.map(item => (
              <div key={item.id} className="bg-blue-100 text-blue-800 p-2 rounded text-sm text-center font-medium animate-fade-in">
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};