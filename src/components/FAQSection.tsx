import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is this free?",
    answer: "Yes, LearnMate is completely free to use. No hidden fees, no premium plans, no paywalls. We believe quality education should be accessible to everyone."
  },
  {
    question: "Do I need to sign up?",
    answer: "No, just start learning right away. We designed LearnMate to be as frictionless as possible - simply enter your topic and begin your learning journey immediately."
  },
  {
    question: "Can I pick my own topics?",
    answer: "Absolutely! You can learn about anything - from academic subjects like mathematics and history to practical skills like cooking and programming. Our AI adapts to any topic you're curious about."
  },
  {
    question: "How accurate are the quiz questions?",
    answer: "Our AI generates questions based on current, reliable information sourced from the web. Each question comes with detailed explanations to ensure you understand the reasoning behind the correct answers."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground font-nunito">
            Everything you need to know about LearnMate
          </p>
        </div>        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-xl shadow-soft border border-border/50 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold font-poppins text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="text-primary" size={20} />
                  ) : (
                    <ChevronDown className="text-muted-foreground" size={20} />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-border/30">
                    <p className="text-muted-foreground font-nunito leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;