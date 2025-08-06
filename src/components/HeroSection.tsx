import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, BookOpen } from "lucide-react";
import heroImage from "@/assets/learning-with-ai.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Brain size={16} />
              Contributing to UN SDG 4: Quality Education
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-poppins leading-tight">
              <span className="text-foreground">Learn</span>{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Smarter.
              </span>
              <br />
              <span className="text-foreground">Not Harder.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground font-nunito leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Get personalized learning paths and quizzes instantly — powered by AI. 
              Master any topic with structured guidance and immediate feedback.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" className="group" onClick={() => navigate("/learn")}>
                Try LearnMate Now
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
              </Button>
              
              <a href="#how-it-works">
                <Button variant="outline" className="group">
                  <BookOpen size={18} />
                  See How It Works
                </Button>
              </a>
            </div>
            
            <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                No login required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Completely free
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Instant results
              </div>
            </div>
          </div>
          
          <div className="relative lg:order-last">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <img 
                src={heroImage} 
                alt="AI-powered learning illustration" 
                className="w-full h-auto rounded-2xl shadow-strong transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;