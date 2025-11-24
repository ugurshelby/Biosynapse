export enum Chapter {
  TAXONOMY = 'Taxonomy',
  MACROMOLECULES = 'Macromolecules',
  CYTOLOGY = 'Cytology',
  EXAM = 'Exam Prep'
}

export interface QuizQuestion {
  id: number;
  sentenceBefore: string;
  hiddenWord: string;
  sentenceAfter: string;
}

export interface DragItem {
  id: string;
  label: string;
  type: 'monocot' | 'dicot';
}

export interface ProtistaMatch {
  organism: string;
  method: string;
  id: number;
}