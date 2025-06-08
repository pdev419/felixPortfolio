import { Button } from "@/components/ui/button";
import { Code, Download, Eye } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleDownloadCV = () => {
    // In a real implementation, this would download the actual CV
    alert("CV download would be implemented here with a real PDF file.");
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern developer workspace" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Felix</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mb-8 text-gray-600 dark:text-gray-300">
              Full Stack Developer & SolidJS Expert
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
              Crafting exceptional digital experiences with modern technologies like SolidJS, React, Next.js, Vue, and Angular. 
              Specializing in high-performance web applications with SolidJS's reactive primitives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToProjects}
                className="px-8 py-4 btn-gradient text-white rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Eye className="mr-2 h-5 w-5" />
                View My Work
              </Button>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Clean modern workspace setup" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 btn-gradient-accent rounded-full flex items-center justify-center text-white text-2xl animate-bounce">
              <Code className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
