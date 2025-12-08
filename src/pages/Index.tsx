import { Hero } from "@/components/Hero";
import { BlogSection } from "@/components/BlogSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BlogSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
