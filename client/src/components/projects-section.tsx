import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "solidjs-dashboard",
    title: "SolidJS Analytics Dashboard",
    description: "High-performance analytics dashboard built with SolidJS showcasing fine-grained reactivity and signals. Features real-time data updates, custom charts, and exceptional performance with minimal bundle size.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["SolidJS", "TypeScript", "Vite"],
    category: ["solidjs", "fullstack"],
  },
  {
    id: "solidjs-ecommerce",
    title: "SolidJS E-Commerce Platform",
    description: "Lightning-fast e-commerce platform leveraging SolidJS's reactive primitives for optimal performance. Features include reactive cart management, instant search, and seamless user experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["SolidJS", "Node.js", "PostgreSQL"],
    category: ["solidjs", "fullstack"],
  },
  {
    id: "solidjs-todo",
    title: "Reactive Todo Application",
    description: "Advanced todo application demonstrating SolidJS's reactive state management. Features drag-and-drop, real-time synchronization, and optimistic updates with excellent performance.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["SolidJS", "TypeScript", "Tailwind CSS"],
    category: ["solidjs"],
  },
  {
    id: "react-crm",
    title: "React CRM System",
    description: "Comprehensive customer relationship management system built with React and Next.js. Features include contact management, sales pipeline, and reporting dashboard.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Next.js", "PostgreSQL"],
    category: ["react", "fullstack"],
  },
  {
    id: "vue-inventory",
    title: "Vue.js Inventory Management",
    description: "Modern inventory management system with real-time tracking and automated alerts. Built with Vue.js composition API for maintainable and scalable code.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Vue.js", "Composition API", "Firebase"],
    category: ["vue"],
  },
  {
    id: "angular-booking",
    title: "Angular Booking Platform",
    description: "Enterprise-grade booking platform with complex scheduling logic and payment integration. Demonstrates Angular's powerful architecture and TypeScript integration.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Angular", "TypeScript", "RxJS"],
    category: ["angular", "fullstack"],
  },
  {
    id: "fullstack-chat",
    title: "Real-time Chat Application",
    description: "Full-stack real-time chat application with WebSocket connections, message persistence, and user authentication. Built with modern technologies for scalability.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["SolidJS", "Node.js", "Socket.io"],
    category: ["solidjs", "fullstack"],
  },
  {
    id: "microservices-api",
    title: "Microservices Architecture",
    description: "Scalable microservices architecture with API gateway, service discovery, and containerized deployment. Demonstrates modern backend development practices.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Node.js", "Docker", "AWS"],
    category: ["fullstack"],
  },
];

const filters = [
  { id: "all", label: "All Projects" },
  { id: "solidjs", label: "SolidJS" },
  { id: "react", label: "React" },
  { id: "vue", label: "Vue.js" },
  { id: "angular", label: "Angular" },
  { id: "fullstack", label: "Full Stack" },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category.includes(activeFilter)
  );

  const getTechnologyColor = (tech: string) => {
    const colors: Record<string, string> = {
      "SolidJS": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "React": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "Vue.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "Angular": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      "Node.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "Next.js": "bg-black text-white",
      "TypeScript": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "Vite": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "Tailwind CSS": "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200",
      "MongoDB": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
      "PostgreSQL": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "Firebase": "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      "Socket.io": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "Docker": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "AWS": "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      "RxJS": "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200",
      "Composition API": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    };
    return colors[tech] || "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200";
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">A showcase of my recent work</p>
        </div>

        {/* Project Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={
                activeFilter === filter.id
                  ? "px-6 py-3 btn-gradient text-white rounded-full hover:scale-105 transition-all duration-300"
                  : "px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              }
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-50 dark:bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${getTechnologyColor(tech)}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
