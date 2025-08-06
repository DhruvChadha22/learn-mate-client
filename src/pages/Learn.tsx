import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ExternalLink, Brain } from "lucide-react";
import Header from "@/components/Header";
import { useQuestions } from "@/store/useQuestions";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Learn = () => {
  const [inputValue, setInputValue] = useState("");
  const [topicsData, setTopicsData] = useState<Record<string, string> | null>(null);
  const [topicsArray, setTopicsArray] = useState<string[]>([]);
  const [isLoadingPath, setIsLoadingPath] = useState(false);
  const [isLoadingQuiz, setIsLoadingQuiz] = useState(false);

  const navigate = useNavigate();
  const { setQuestions } = useQuestions(); 

  const handleGeneratePath = async () => {
    if (!inputValue.trim()) return;
    
    setIsLoadingPath(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/learn`, { topic: inputValue });
      const { topics } = response.data;
      console.log("Received topics: ", topics);

      setTopicsData(topics);
      const topicsArray = Object.keys(topics);
      setTopicsArray(topicsArray);
    } catch (error) {
      console.error("Error generating topics:", error);
    } finally {
      setIsLoadingPath(false);
    }
  };

  const handleGenerateQuiz = async () => {
    if (topicsArray.length === 0) return;
    
    setIsLoadingQuiz(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/quiz`, { subTopics: topicsArray });
      const { questions } = response.data;
      console.log("Received questions: ", questions);
      
      setQuestions(questions);
      navigate("/quiz");
    } catch (error) {
      console.error("Error generating questions:", error);
    } finally {
      setIsLoadingQuiz(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-primary/5 font-inter">
      <Header />

      <main className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            What do you want to learn today?
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Enter a broad topic like "Machine Learning", "Photosynthesis", or "History of India"
          </p>
          
          <div className="max-w-md mx-auto space-y-4">
            <Input
              type="text"
              placeholder="What are we learning today?"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="text-center text-lg py-3 px-6 rounded-xl border-2 border-border hover:border-primary/50 focus:border-primary transition-colors"
              disabled={isLoadingPath || isLoadingQuiz}
            />
            <Button
              onClick={handleGeneratePath}
              disabled={!inputValue.trim() || isLoadingPath || isLoadingQuiz}
              className="w-full text-lg py-3 px-8 rounded-xl"
              variant="hero"
            >
              {isLoadingPath ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Generating Learning Path...
                </div>
              ) : (
                <>
                  <BookOpen className="w-5 h-5" />
                  Generate Learning Path
                </>
              )}
            </Button>
          </div>
        </div>

        {topicsData && (
          <div className="space-y-8 animate-in fade-in-50 duration-500">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2 text-foreground">Your Learning Path</h2>
              <p className="text-muted-foreground">Click on any resource to start learning</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(topicsData).map(([topic, link], index) => (
                <Card 
                  key={topic} 
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {topic}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors font-medium"
                    >
                      Open Resource
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center pt-8">
              <Button
                onClick={handleGenerateQuiz}
                disabled={isLoadingPath || isLoadingQuiz}
                className="w-fit text-lg py-3 px-8 rounded-xl"
                variant="secondary"
              >
                {isLoadingQuiz ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Generating Quiz...
                  </div>
                ) : (
                  <>
                    <Brain className="w-5 h-5" />
                    Quiz Me
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Learn;