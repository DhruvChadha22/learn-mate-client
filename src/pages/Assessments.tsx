import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CircularProgress from '@/components/CircularProgress';
import { 
  Brain, 
  BookOpen, 
  CheckCircle, 
  AlertTriangle,
  Star,
  Trophy
} from 'lucide-react';
import Header from '@/components/Header';
import useQuizAssessment from '@/store/useQuizAssessment';
import { useQuestions } from '@/store/useQuestions';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Assessments = () => {
  const [isLoadingQuiz, setIsLoadingQuiz] = useState(false);

  const navigate = useNavigate();

  const { score, correctTopics, incorrectTopics, clearAssessment } = useQuizAssessment();
  const { questions, setQuestions } = useQuestions();

  useEffect(() => {
    if (questions.length === 0) {
      navigate("/");
    }

    window.addEventListener("beforeunload", clearAssessment);

    return () => {
        clearAssessment();
        window.removeEventListener("beforeunload", clearAssessment);
    };
  }, []);

  const percentage = (score / questions.length) * 100;

  const getPerformanceMessage = () => {
    if (percentage >= 80) return "Outstanding Performance! 🎉";
    if (percentage >= 60) return "Great Job! Keep it up! 👏";
    if (percentage >= 40) return "Good Start! Room to grow 📈";
    return "Every expert was once a beginner 💪";
  };

  const getPerformanceColor = () => {
    if (percentage >= 80) return "text-success";
    if (percentage >= 60) return "text-primary";
    if (percentage >= 40) return "text-secondary";
    return "text-muted-foreground";
  };

  const handleGenerateQuiz = async () => {    
    setIsLoadingQuiz(true);
    try {
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock response based on the input
      const mockQuestions = [
        {
          question: "In a series circuit, what happens to the total resistance?",
          option1: "It decreases",
          option2: "It stays the same",
          option3: "It increases",
          option4: "It becomes zero",
          answer: 3,
          topic: "Circuit Analysis",
          explanation: "In a series circuit, the total resistance is the sum of all individual resistances (R_total = R1 + R2 + R3...), so it always increases."
        },
        {
          question: "What unit is used to measure electrical current?",
          option1: "Volts",
          option2: "Watts",
          option3: "Amperes",
          option4: "Ohms",
          answer: 3,
          topic: "Electrical Units",
          explanation: "Current is measured in Amperes (A), named after André-Marie Ampère. It represents the flow of electric charge per unit time."
        }
      ];
      
      setQuestions(mockQuestions);
      clearAssessment();
      navigate("/quiz");
    } catch (error) {
      console.error("Error generating questions:", error);
    } finally {
      setIsLoadingQuiz(false);
    }
  };

  if (questions.length === 0) {
    return (
      <div>
        No Assessment to display
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <div className="mb-6">
            <CircularProgress percentage={percentage} size={160} strokeWidth={12} />
          </div>
          <div className="space-y-2">
            <h1 className={`text-3xl font-bold ${getPerformanceColor()}`}>
              {getPerformanceMessage()}
            </h1>
            <p className="text-lg text-muted-foreground">
              You scored {score} out of {questions.length} questions correctly
            </p>
            <Badge variant="secondary" className="text-base px-4 py-2 mt-4">
              <Trophy className="h-4 w-4 mr-2" />
              {Math.round(percentage)}% Accuracy
            </Badge>
          </div>
        </div>

        <div className="flex items-center justify-center">
        <div className={cn(
            "gap-8 mb-12", 
            (correctTopics.length > 0 && incorrectTopics.length > 0) ?
            "grid md:grid-cols-2" :
            "flex items-center justify-center"
        )}>
          {correctTopics.length > 0 && (
            <Card className="shadow-elegant border-success/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="h-6 w-6 text-success" />
                  <h2 className="text-xl font-semibold text-success">
                    Topics You've Mastered
                  </h2>
                </div>
                <div className="space-y-3">
                  {correctTopics.map((topic, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-success/10 border border-success/20"
                    >
                      <Star className="h-5 w-5 text-success flex-shrink-0" />
                      <div>
                        <p className="font-medium">{topic}</p>
                        <p className="text-sm text-success/80">Excellent understanding!</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {incorrectTopics.length > 0 && (
            <Card className="shadow-elegant border-destructive/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                  <h2 className="text-xl font-semibold text-destructive">
                    Areas for Growth
                  </h2>
                </div>
                <div className="space-y-3">
                  {incorrectTopics.map((topic, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20"
                    >
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0" />
                      <div>
                        <p className="font-medium">{topic}</p>
                        <p className="text-sm text-destructive/80">Review recommended</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Button 
            onClick={() => {
                clearAssessment();
                navigate("/learn");
            }}
            className="flex-1 flex items-center justify-center space-x-2 text-base py-3 md:py-6"
            variant="hero"
          >
            <BookOpen className="h-5 w-5" />
            <span>Learn Something New</span>
          </Button>
          
          {incorrectTopics.length > 0 && (
            <Button
                onClick={handleGenerateQuiz}
                disabled={isLoadingQuiz}
                className="flex-1 flex items-center space-x-2 text-base py-3 md:py-6"
                variant="secondary"
              >
                {isLoadingQuiz ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Generating New Quiz...
                  </div>
                ) : (
                  <>
                    <Brain className="w-5 h-5" />
                    Re-Quiz Weak Topics
                  </>
                )}
              </Button>
          )}
        </div>

        <div className="text-center mt-12 p-6 bg-accent/30 rounded-lg border">
          <p className="text-muted-foreground italic">
            "Learning is a journey, not a destination. Every question you answer brings you one step closer to mastery!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assessments;