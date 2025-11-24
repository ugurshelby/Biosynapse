import React from 'react';
import { Chapter } from '../types';

interface NavbarProps {
  activeChapter: Chapter;
  onNavigate: (chapter: Chapter) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeChapter, onNavigate }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate(Chapter.TAXONOMY)}>
            <span className="text-2xl mr-2">🧬</span>
            <span className="font-serif font-bold text-xl text-emerald-900 tracking-tight">BioSynapse</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {Object.values(Chapter).map((chapter) => (
              <button
                key={chapter}
                onClick={() => onNavigate(chapter)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeChapter === chapter
                    ? 'text-emerald-900 border-b-2 border-emerald-900'
                    : 'text-slate-500 hover:text-emerald-700'
                }`}
              >
                {chapter}
              </button>
            ))}
          </div>
          {/* Mobile simple indicator */}
          <div className="md:hidden text-sm font-semibold text-emerald-900">
            {activeChapter}
          </div>
        </div>
      </div>
    </nav>
  );
};