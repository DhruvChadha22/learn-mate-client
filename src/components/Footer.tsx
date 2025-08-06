import { Heart, Github, Globe } from "lucide-react";

const links = [
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "Quiz Demo",
    href: "#quiz-demo",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-poppins text-background mb-2">
                LearnMate
              </h3>
              <p className="text-background/80 font-nunito">
                Powered by AI, built for learners all around the globe.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-background/90">
              <span className="font-nunito">Made with</span>
              <Heart className="text-red-400 fill-current" size={16} />
              <span className="font-nunito">by students for students</span>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-poppins text-background">
              Quick Links
            </h4>
            <div className="space-y-3">
              {links.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="block text-background/80 hover:text-background font-nunito transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-poppins text-background">
              Our Mission
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Globe className="text-primary-glow mt-1" size={18} />
                <div>
                  <p className="text-sm text-background/90 font-nunito leading-relaxed">
                    Contributing to <strong>UN SDG 4: Quality Education</strong> by making 
                    personalized learning accessible to everyone, everywhere.
                  </p>
                </div>
              </div>
              <a 
                href="https://sdgs.un.org/goals/goal4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-glow hover:text-primary-light transition-colors duration-200 text-sm font-nunito"
              >
                <Globe size={16} />
                Learn more about SDG 4
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-background/70 text-sm font-nunito">
              © 2024 LearnMate. Built with purpose for global education.
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-background/70 hover:text-background transition-colors duration-200 text-sm font-nunito"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-background/70 hover:text-background transition-colors duration-200 text-sm font-nunito"
              >
                Terms of Service
              </a>
              <a 
                href="https://github.com/DhruvChadha22/learn-mate-client" 
                target="_blank"
                className="inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors duration-200"
                aria-label="GitHub Repository"
              >
                <Github size={18} />
                <span className="text-sm font-nunito">GitHub</span>
              </a>
            </div>
            
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;