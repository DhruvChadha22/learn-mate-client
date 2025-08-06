import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import QuizDemoSection from "@/components/QuizDemoSection";
import WhyEffectiveSection from "@/components/WhyEffectiveSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <HeroSection />
      <HowItWorksSection />
      <QuizDemoSection />
      <WhyEffectiveSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
