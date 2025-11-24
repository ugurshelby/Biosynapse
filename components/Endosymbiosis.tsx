import React, { useEffect, useRef, useState } from 'react';

export const Endosymbiosis: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is into the viewport
      const rawProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
      // Clamp between 0 and 1
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      setProgress(clamped);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation stages based on scroll progress
  const isEngulfed = progress > 0.4;
  const isTransformed = progress > 0.6;

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-slate-900 overflow-hidden">
      <div className="sticky top-16 h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-8 text-center">
        
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 z-10 mix-blend-difference">
          The Endosymbiosis Theory
        </h2>
        
        {/* The Host Cell */}
        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full bg-emerald-900/50 border-4 border-emerald-500/30 flex items-center justify-center transition-all duration-1000 backdrop-blur-sm">
          <span className="absolute top-4 text-emerald-200 text-sm font-bold uppercase tracking-widest">Host Eukaryote</span>
          
          {/* The Bacteria / Mitochondria */}
          <div 
            className={`absolute w-16 h-16 rounded-full flex items-center justify-center transition-all duration-1000 ease-in-out border-2
              ${isEngulfed ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : '-top-20 left-1/2 transform -translate-x-1/2'}
              ${isTransformed ? 'bg-orange-500 border-orange-300 w-24 h-12 rounded-full' : 'bg-red-500 border-red-300'}
            `}
          >
             <span className="text-[10px] text-white font-bold">
               {isTransformed ? "Mitochondria" : "Bacteria"}
             </span>
          </div>
        </div>

        {/* Text Overlays */}
        <div className="absolute bottom-10 left-0 w-full p-4">
          <div className={`transition-opacity duration-500 ${isTransformed ? 'opacity-100' : 'opacity-0'} bg-black/60 backdrop-blur-md text-white p-6 max-w-xl mx-auto rounded-xl border border-white/10`}>
             <p className="text-lg font-bold text-orange-300 mb-2">Evidence of Bacterial Origin:</p>
             <ul className="text-left list-disc list-inside space-y-1 text-slate-300">
               <li>Own Circular DNA</li>
               <li>Own Ribosomes (70S like bacteria)</li>
               <li>Double Membrane</li>
             </ul>
          </div>
        </div>

        <div className="absolute bottom-4 text-slate-500 text-sm animate-bounce">
          Scroll Down to Evolve
        </div>
      </div>
    </div>
  );
};