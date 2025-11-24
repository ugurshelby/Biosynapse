import React, { useState } from 'react';

interface Phylum {
  name: string;
  desc: string;
  icon: string;
  details: string[];
}

const PHYLA: Phylum[] = [
  {
    name: "Coelenterates",
    desc: "Sac-like body with only one opening.",
    icon: "🪼",
    details: [
      "Primitive nerves and muscles.",
      "Opening serves as both mouth and anus.",
      "Examples: Jellyfish, Sea Anemones, Hydra."
    ]
  },
  {
    name: "Arthropods",
    desc: "The largest subgroup.",
    icon: "🦗",
    details: [
      "Characterized by jointed legs and hard outer skeleton.",
      "Includes more species than all other groups combined.",
      "Examples: Insects (largest), Spiders, Crabs."
    ]
  },
  {
    name: "Chordates",
    desc: "Animals possessing an internal skeleton.",
    icon: "🦴",
    details: [
      "Specifically possess a backbone (Vertebrates).",
      "Includes Fish, Amphibians, Reptiles, Birds, Mammals.",
      "Most advanced group."
    ]
  },
  {
    name: "Molluscs",
    desc: "Soft-bodied, usually have shells.",
    icon: "🐌",
    details: [
      "Includes Snails, Oysters.",
      "Exception: Octopuses and Squids do not have external shells.",
      "Some snails have evolved lungs (terrestrial)."
    ]
  }
];

export const AnimalPhyla: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden my-8">
      <div className="p-6 border-b border-slate-100 bg-emerald-50/50">
        <h3 className="text-2xl font-serif font-bold text-emerald-900">Animalia Kingdom</h3>
        <p className="text-slate-600 mt-1">Key characteristics of major phyla.</p>
      </div>

      <div className="divide-y divide-slate-100">
        {PHYLA.map((phylum, idx) => (
          <div key={phylum.name} className="group">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all">{phylum.icon}</span>
                <div>
                  <h4 className={`font-bold text-lg ${openIndex === idx ? 'text-emerald-700' : 'text-slate-700'}`}>
                    {phylum.name}
                  </h4>
                  <p className="text-sm text-slate-500">{phylum.desc}</p>
                </div>
              </div>
              <span className={`transform transition-transform duration-300 text-emerald-500 font-bold ${openIndex === idx ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 pt-0 pl-20">
                <ul className="list-disc text-slate-600 space-y-1 text-sm">
                  {phylum.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};