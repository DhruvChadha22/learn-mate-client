import { Search, List, Trophy } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Enter what you want to learn",
    description: "Simply type any topic you're curious about - from quantum physics to cooking basics.",
    color: "primary"
  },
  {
    icon: List,
    title: "Get personalized subtopics + handpicked learning links",
    description: "AI analyzes your topic and creates a structured learning path with curated resources.",
    color: "secondary"
  },
  {
    icon: Trophy,
    title: "Take a quiz, get feedback, and master the topic",
    description: "Test your understanding with smart questions and detailed explanations.",
    color: "accent"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground font-nunito max-w-2xl mx-auto">
            Three simple steps to transform the way you learn anything
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 z-0"></div>
                )}
                <div className="relative bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 group-hover:border-primary/20">
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-primary to-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                    step.color === 'primary' ? 'bg-primary/10 text-primary' :
                    step.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                    'bg-accent/10 text-accent'
                  }`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold font-poppins mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-nunito leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorksSection;