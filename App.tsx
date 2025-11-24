import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Chapter } from './types';
import { KingdomSlider } from './components/KingdomSlider';
import { MonocotDicot } from './components/MonocotDicot';
import { MoleculeBuilder } from './components/MoleculeBuilder';
import { Endosymbiosis } from './components/Endosymbiosis';
import { ExamSimulator } from './components/ExamSimulator';
import { FocusTerm } from './components/FocusTerm';
import { MembraneVisualizer } from './components/MembraneVisualizer';
import { PlantHierarchy } from './components/PlantHierarchy';
import { AnimalPhyla } from './components/AnimalPhyla';
import { DNAZipper } from './components/DNAZipper';

function App() {
  const [activeChapter, setActiveChapter] = useState<Chapter>(Chapter.TAXONOMY);

  const renderContent = () => {
    switch(activeChapter) {
      case Chapter.TAXONOMY:
        return (
          <div className="space-y-12 animate-fade-in pb-12">
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               <div className="lg:col-span-2 prose max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                 <h2 className="text-4xl font-serif font-bold text-emerald-900 mb-4">Taxonomy & Diversity</h2>
                 <p className="text-lg text-slate-600 leading-relaxed">
                   The distinction between living and non-living is critical. Non-living objects obey physical forces. 
                   <span className="block mt-2 font-semibold text-red-600 bg-red-50 p-2 rounded">
                     ⚠️ Important: <FocusTerm term="Viruses" definition="Included in non-living category because they lack metabolism and cannot reproduce without a host." /> are considered non-living objects on a fundamental level.
                   </span>
                 </p>
               </div>
               <div className="bg-slate-800 text-white p-6 rounded-2xl flex flex-col justify-center">
                 <h3 className="text-xl font-bold text-emerald-400 mb-2">Key Criteria for Life</h3>
                 <ul className="list-disc list-inside space-y-2 text-slate-300">
                   <li><strong>Reproduction:</strong> Producing new organisms.</li>
                   <li><strong>Heredity:</strong> Passing traits to offspring.</li>
                   <li><strong>Evolution:</strong> Adaptation to environment.</li>
                 </ul>
               </div>
            </section>

            <KingdomSlider />
            
            <AnimalPhyla />
            
            <PlantHierarchy />

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
               <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">Angiosperms: The Flowering Plants</h3>
               <p className="mb-6 text-slate-600">The most advanced group. Divided into two subgroups based on seed leaves.</p>
               <MonocotDicot />
               <p className="text-center text-sm text-slate-400 italic mt-4">
                 ⚠️ Exception: Palm trees are Monocots, despite being trees.
               </p>
            </section>
          </div>
        );
      case Chapter.MACROMOLECULES:
        return (
          <div className="space-y-12 animate-fade-in pb-12">
             <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="col-span-1 md:col-span-2">
                 <h2 className="text-4xl font-serif font-bold text-blue-800 mb-6">Macromolecules of Life</h2>
                 <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                   <strong>Organic Chemistry:</strong> Compounds containing only C + H are called <FocusTerm term="Hydrocarbons" definition="The simplest organic compounds." />. 
                   Compounds with the same formula but different structure are <FocusTerm term="Isomers" definition="Same atomic content, different structure and properties." />.
                 </div>
               </div>

               <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-4 text-blue-700">Carbohydrates</h3>
                  <p className="text-slate-600 mb-4">
                    Glucose (C₆H₁₂O₆) ring form is called the <FocusTerm term="Haworth projection" definition="Cyclic structure of monosaccharides." />.
                  </p>
                  <ul className="text-sm space-y-2 text-slate-600">
                    <li><strong>Synthesis:</strong> Dehydration (Removal of H₂O)</li>
                    <li><strong>Breakdown:</strong> Hydrolysis (Addition of H₂O)</li>
                  </ul>
               </div>

               <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-4 text-orange-600">Lipids</h3>
                  <p className="text-slate-600 mb-2">Neutral fats = 1 Glycerol + 3 Fatty Acids (Triglyceride).</p>
                  <ul className="space-y-2 text-slate-600 text-sm bg-slate-50 p-3 rounded">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span> 
                      <strong>Saturated:</strong> No C=C bonds. Solid (Butter).
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span> 
                      <strong>Unsaturated:</strong> Has C=C. Liquid (Olive Oil).
                    </li>
                  </ul>
               </div>

               <div className="col-span-1 md:col-span-2 bg-slate-800 text-white p-6 rounded-xl">
                 <h3 className="text-xl font-bold text-purple-400 mb-2">Proteins & Enzymes</h3>
                 <p className="text-slate-300">
                   Enzymes follow the <strong>Lock & Key</strong> model. They catalyze reactions but come out unchanged.
                   <br/>
                   Factors affecting enzymes: pH, Temperature, Inhibitors.
                 </p>
               </div>
            </section>

            <MoleculeBuilder />

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">Nucleic Acids (DNA & RNA)</h3>
              <p className="text-slate-600 mb-6">
                 Nucleotides are composed of a Phosphate, a 5C Sugar (Deoxyribose/Ribose), and a Nitrogen Base.
                 <br/>
                 <span className="font-bold text-blue-600">A=T</span> (2 Hydrogen bonds) and <span className="font-bold text-blue-600">G≡C</span> (3 Hydrogen bonds).
              </p>
              <DNAZipper />
            </section>
          </div>
        );
      case Chapter.CYTOLOGY:
        return (
          <div className="space-y-12 animate-fade-in pb-12">
            <section className="prose max-w-none">
               <h2 className="text-4xl font-serif font-bold text-slate-800 mb-2">Cytology: Cell Structure</h2>
               <p className="text-xl text-slate-500 italic mb-8">"Presence of boundaries around the cells → Membranes"</p>
               
               <div className="grid md:grid-cols-2 gap-8">
                 {/* Membrane Section */}
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="text-xl font-bold mb-3 text-emerald-800">Membrane Structure</h3>
                    <p className="text-slate-600 mb-4">
                      Basic component: <FocusTerm term="Phospholipids" definition="Polar hydrophilic head + Non-polar hydrophobic tails." />.
                    </p>
                    <div className="bg-emerald-50 p-4 rounded-lg text-sm text-emerald-900 font-medium">
                      <span className="block mb-1 text-lg">🌊 Fluid Mosaic Model</span>
                      Surface is fluid; proteins are interspersed in the membrane like a mosaic.
                    </div>
                 </div>

                 {/* Nucleus Section */}
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="text-xl font-bold mb-3 text-indigo-800">The Nucleus</h3>
                    <ul className="space-y-3 text-slate-600">
                      <li><strong>Nuclear Envelope:</strong> Double membrane with pores.</li>
                      <li><strong>Nucleolus:</strong> Site of <FocusTerm term="rRNA" definition="Ribosomal RNA synthesis." /> synthesis.</li>
                      <li><strong>Chromosomes:</strong> DNA wrapped around <FocusTerm term="Histones" definition="Special proteins that DNA coils around (8+1 sets)." /> forms Nucleosomes.</li>
                    </ul>
                 </div>
               </div>
            </section>

            <MembraneVisualizer />

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-white p-5 rounded-xl border-t-4 border-purple-500 shadow-sm">
                 <h4 className="font-bold text-lg mb-2">Golgi Apparatus</h4>
                 <p className="text-sm text-slate-600">
                   Repackages proteins into <strong>Secretory Vesicles</strong> for exocytosis.
                   <br/><br/>
                   <span className="text-purple-700 font-semibold">In Plants:</span> Called <FocusTerm term="Dictyosomes" definition="Involved in formation of polysaccharide cell wall." />.
                 </p>
               </div>

               <div className="bg-white p-5 rounded-xl border-t-4 border-red-500 shadow-sm">
                 <h4 className="font-bold text-lg mb-2">Mitochondria</h4>
                 <p className="text-sm text-slate-600">
                   Double membrane. Inner membrane folds are called <FocusTerm term="Cristae" definition="Elaborate folds of inner membrane for ATP production." />.
                   <br/><br/>
                   Matrix contains own DNA & Ribosomes.
                 </p>
               </div>

               <div className="bg-white p-5 rounded-xl border-t-4 border-yellow-500 shadow-sm">
                 <h4 className="font-bold text-lg mb-2">Lysosomes</h4>
                 <p className="text-sm text-slate-600">
                   Contain hydrolytic enzymes. Prevent "random destruction" of the cell (Autodigestion).
                 </p>
               </div>
            </section>

            <Endosymbiosis />
          </div>
        );
      case Chapter.EXAM:
        return (
          <div className="animate-fade-in py-8">
            <ExamSimulator />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      <Navbar activeChapter={activeChapter} onNavigate={setActiveChapter} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {renderContent()}
      </main>

      <footer className="mt-20 border-t border-slate-200 py-8 text-center text-slate-400 text-sm">
        <p>© 2024 BioSynapse Learning Hub. Based on Lecture Notes.</p>
      </footer>
    </div>
  );
}

export default App;