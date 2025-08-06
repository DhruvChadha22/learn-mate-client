import { create } from 'zustand';

export interface Question {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: number;
  topic: string;
  explanation: string;
}

interface QuestionsState {
  questions: Question[];
  setQuestions: (newQuestions: Question[]) => void;
}

export const useQuestions = create<QuestionsState>((set) => ({
  questions: [],
  setQuestions: (newQuestions) => set({ questions: newQuestions }),
}));
