import React, { useState } from 'react';

interface FocusTermProps {
  term: string;
  definition: string;
  icon?: string;
}

export const FocusTerm: React.FC<FocusTermProps> = ({ term, definition, icon = "💡" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span 
      className="relative inline-block cursor-help font-semibold text-blue-600 border-b border-blue-300 border-dashed hover:border-blue-600 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)} // Mobile support
    >
      {term}
      
      {isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-4 bg-slate-800 text-white text-sm rounded-lg shadow-xl z-20 animate-fade-in">
          <div className="flex items-start gap-3">
            <span className="text-2xl">{icon}</span>
            <div>
              <p className="font-bold text-blue-300 mb-1">{term}</p>
              <p className="text-slate-200 leading-relaxed">{definition}</p>
            </div>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-slate-800"></div>
        </div>
      )}
    </span>
  );
};