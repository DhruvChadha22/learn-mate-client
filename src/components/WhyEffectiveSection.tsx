import { Globe, MessageSquare, Shield } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Backed by web search",
    description: "Real-time access to the latest information and resources from across the internet.",
    color: "primary",
  },
  {
    icon: MessageSquare,
    title: "Every quiz question comes with explanations",
    description: "Understanding why answers are correct helps you build lasting knowledge, not just memorize facts.",
    color: "secondary",
  },
  {
    icon: Shield,
    title: "No accounts, no ads — just learning",
    description: "Pure focus on education without distractions, sign-ups, or interruptions.",
    color: "accent",
  }
];

const WhyEffectiveSection = () => {
  return (
    <section id="why-effective" className="py-24 px-4 bg-gradient-to-br from-muted/20 to-primary/5">
      <div className="container mx-auto max-w-6xl">        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Why It's Effective
          </h2>
          <p className="text-xl text-muted-foreground font-nunito max-w-2xl mx-auto">
            Built on proven learning principles and powered by cutting-edge AI technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group">
                <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-primary/20 h-full">                  
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                    feature.color === 'primary' ? 'bg-primary/10 text-primary' :
                    feature.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                    'bg-accent/10 text-accent'
                  }`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold font-poppins mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-nunito leading-relaxed">
                    {feature.description}
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

export default WhyEffectiveSection;