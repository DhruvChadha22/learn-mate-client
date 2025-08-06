import { create } from 'zustand';

interface QuizAssessmentStore {
  score: number;
  correctTopics: string[];
  incorrectTopics: string[];
  incrementScore: () => void;
  addCorrectTopic: (topic: string) => void;
  addIncorrectTopic: (topic: string) => void;
  clearAssessment: () => void;
}

const useQuizAssessment = create<QuizAssessmentStore>((set) => ({
  score: 0,
  correctTopics: [],
  incorrectTopics: [],
  incrementScore: () =>
    set((state) => ({ score: state.score + 1 })),
  addCorrectTopic: (topic: string) =>
    set((state) => ({
      correctTopics: [...state.correctTopics, topic],
    })),
  addIncorrectTopic: (topic: string) =>
    set((state) => ({
      incorrectTopics: [...state.incorrectTopics, topic],
    })),
  clearAssessment: () => 
    set(() => ({
      score: 0,
      correctTopics: [],
      incorrectTopics: [],
    })),
}));

export default useQuizAssessment;
