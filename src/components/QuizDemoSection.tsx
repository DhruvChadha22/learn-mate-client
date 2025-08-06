import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import quizDemoImg from "@/assets/quiz-demo.jpg";

const QuizDemoSection = () => {
  return (
    <section id="quiz-demo" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">        
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium px-4 py-2">
            <Zap size={14} className="mr-2" />
            No login required
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Test your understanding instantly
          </h2>
          <p className="text-xl text-muted-foreground font-nunito max-w-2xl mx-auto">
            See how our AI generates smart questions with detailed explanations to ensure you truly master the topic.
          </p>
        </div>
        
        <div className="flex items-center justify-center">
          <img
            src={quizDemoImg}
            alt="Quiz-Demo"
            width="700px"
          />
        </div>
      </div>
    </section>
  );
};

export default QuizDemoSection;