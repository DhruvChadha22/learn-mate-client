import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { useQuestions } from '@/store/useQuestions';
import useQuizAssessment from '@/store/useQuizAssessment';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  
  const navigate = useNavigate();
  const { questions } = useQuestions();

  useEffect(() => {
    if (questions.length === 0) {
      navigate("/");
    }
  }, []);

  const { incrementScore, addCorrectTopic, addIncorrectTopic } = useQuizAssessment();

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswerSelect = (optionIndex: number) => {
    if (hasAnswered) return;
    
    setSelectedAnswer(optionIndex);
    setHasAnswered(true);
    
    if (optionIndex === currentQuestion.answer) {
      incrementScore();
      addCorrectTopic(currentQuestion.topic);
    } else {
      addIncorrectTopic(currentQuestion.topic);
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      navigate("/assessments");
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setHasAnswered(false);
    }
  };

  const getOptionClassName = (optionIndex: number) => {
    if (!hasAnswered) {
      return "border-border hover:border-primary/50 hover:bg-accent/50 cursor-pointer transition-all";
    }
    
    if (optionIndex === currentQuestion.answer) {
      return "border-success bg-success/10";
    }
    
    if (optionIndex === selectedAnswer && optionIndex !== currentQuestion.answer) {
      return "border-destructive bg-destructive/10";
    }
    
    return "border-border opacity-60";
  };

  const getOptionIcon = (optionIndex: number) => {
    if (!hasAnswered) return null;
    
    if (optionIndex === currentQuestion.answer) {
      return <CheckCircle className="h-5 w-5 text-success" />;
    }
    
    if (optionIndex === selectedAnswer && optionIndex !== currentQuestion.answer) {
      return <XCircle className="h-5 w-5 text-destructive" />;
    }
    
    return null;
  };

  if (questions.length === 0) {
    return (
      <div>
        No Questions to display
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <Badge variant="outline" className="px-2 bg-secondary-light">
              {currentQuestion.topic}
            </Badge>
            <span>
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
          </div>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-center leading-relaxed">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                {[
                  { index: 1, text: currentQuestion.option1, label: 'A' },
                  { index: 2, text: currentQuestion.option2, label: 'B' },
                  { index: 3, text: currentQuestion.option3, label: 'C' },
                  { index: 4, text: currentQuestion.option4, label: 'D' }
                ].map((option) => (
                  <div
                    key={option.index}
                    onClick={() => handleAnswerSelect(option.index)}
                    className={`
                      flex items-center space-x-3 p-4 rounded-lg border-2 transition-all
                      ${getOptionClassName(option.index)}
                    `}
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-sm font-medium">
                        {option.label}
                      </div>
                      <span className="text-sm md:text-base">{option.text}</span>
                    </div>
                    {getOptionIcon(option.index)}
                  </div>
                ))}
              </div>

              {hasAnswered && (
                <div className="mt-6 p-4 bg-secondary/30 rounded-lg border animate-fade-in">
                  <h4 className="font-semibold text-primary mb-2">Explanation:</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}

              {hasAnswered && (
                <div className="flex justify-end pt-4">
                  <Button onClick={handleNextQuestion} className="min-w-32">
                    {isLastQuestion ? 'View Results' : 'Next Question →'}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quiz;