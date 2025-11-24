import React, { useState } from 'react';
import { QUIZ_DATA } from '../constants';

export const ExamSimulator: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, boolean | null>>({});

  const handleInputChange = (id: number, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
    // Reset result for this question while typing
    setResults(prev => ({ ...prev, [id]: null }));
  };

  const checkAnswers = () => {
    const newResults: Record<number, boolean> = {};
    let score = 0;

    QUIZ_DATA.forEach(q => {
      const userAns = (answers[q.id] || "").trim().toLowerCase();
      const correctAns = q.hiddenWord.toLowerCase();
      const isCorrect = userAns === correctAns;
      newResults[q.id] = isCorrect;
      if (isCorrect) score++;
    });

    setResults(newResults);
    
    if (score === QUIZ_DATA.length) {
      alert("Perfect Score! You are ready for the exam.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
      <div className="bg-slate-800 p-8 text-center">
        <h3 className="text-3xl font-serif text-white font-bold">Exam Simulator</h3>
        <p className="text-slate-300 mt-2">Active Recall: Fill in the missing key terms.</p>
      </div>
      
      <div className="p-8 space-y-6">
        {QUIZ_DATA.map((q) => {
          const isCorrect = results[q.id];
          // Added bg-white to the default state logic
          const statusColor = isCorrect === true 
            ? 'border-green-500 bg-green-50 text-green-700' 
            : isCorrect === false 
              ? 'border-red-500 bg-red-50' 
              : 'border-slate-300 bg-white focus:border-blue-500';

          return (
            <div key={q.id} className="text-lg leading-loose text-slate-700 font-medium border-b border-slate-100 pb-4 last:border-0">
              <span>{q.id}. {q.sentenceBefore} </span>
              <input 
                type="text"
                value={answers[q.id] || ''}
                onChange={(e) => handleInputChange(q.id, e.target.value)}
                className={`mx-2 px-3 py-1 border-2 rounded-md outline-none transition-colors w-40 text-center font-bold shadow-sm ${statusColor}`}
                placeholder="type here..."
                autoComplete="off"
              />
              <span> {q.sentenceAfter}</span>
              
              {isCorrect === false && (
                <div className="text-sm text-red-500 mt-1 pl-4">
                  Hint: The answer starts with "{q.hiddenWord[0]}..."
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-slate-50 p-6 flex justify-end border-t border-slate-200">
        <button 
          onClick={checkAnswers}
          className="bg-emerald-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-emerald-800 transition-colors shadow-lg transform hover:-translate-y-1"
        >
          Submit Exam
        </button>
      </div>
    </div>
  );
};