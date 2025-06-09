"use client";

import { useEffect, useState } from 'react';
import { ExternalLink, Code, Palette, Zap, Users, Shield, Smartphone } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  icon: React.ReactNode;
  gradient: string;
  image: string;
}

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern, lightning-fast e-commerce solution built with SolidJS featuring real-time inventory management, secure payments, and advanced analytics.',
      technologies: ['SolidJS', 'TypeScript', 'Tailwind CSS', 'Vite'],
      features: ['Real-time inventory', 'Secure payments', 'Advanced analytics', 'Mobile responsive'],
      icon: <Code className="w-6 h-6" />,
      gradient: 'from-blue-500 to-purple-600',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Design System',
      description: 'Comprehensive design system and component library built with Svelte, providing consistent UI components across multiple applications.',
      technologies: ['Svelte', 'Storybook', 'CSS Variables', 'Jest'],
      features: ['50+ components', 'Dark mode support', 'Accessibility focused', 'Documentation'],
      icon: <Palette className="w-6 h-6" />,
      gradient: 'from-emerald-500 to-teal-600',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Real-time Dashboard',
      description: 'Interactive dashboard application with real-time data visualization, built using React and Next.js with WebSocket integration.',
      technologies: ['React', 'Next.js', 'Chart.js', 'WebSockets'],
      features: ['Real-time updates', 'Interactive charts', 'Custom widgets', 'Export functionality'],
      icon: <Zap className="w-6 h-6" />,
      gradient: 'from-orange-500 to-red-600',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Collaboration Tool',
      description: 'Team collaboration platform with video calling, file sharing, and project management features, built with Vue.js and Nuxt.js.',
      technologies: ['Vue.js', 'Nuxt.js', 'WebRTC', 'Socket.io'],
      features: ['Video conferencing', 'File sharing', 'Project tracking', 'Team messaging'],
      icon: <Users className="w-6 h-6" />,
      gradient: 'from-green-500 to-emerald-600',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Security Dashboard',
      description: 'Comprehensive security monitoring dashboard with threat detection, audit logs, and compliance reporting for enterprise clients.',
      technologies: ['React', 'TypeScript', 'D3.js', 'Material-UI'],
      features: ['Threat detection', 'Audit logging', 'Compliance reports', 'Alert system'],
      icon: <Shield className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-600',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Mobile-First PWA',
      description: 'Progressive web application optimized for mobile devices with offline capabilities, push notifications, and native-like performance.',
      technologies: ['Svelte', 'PWA', 'Service Workers', 'IndexedDB'],
      features: ['Offline support', 'Push notifications', 'App-like experience', 'Fast loading'],
      icon: <Smartphone className="w-6 h-6" />,
      gradient: 'from-cyan-500 to-blue-600',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of innovative solutions built with modern frontend technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden h-full hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white shadow-lg`}>
                    {project.icon}
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-300 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Features:</h4>
                    <ul className="text-slate-400 text-xs space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <div className="w-1 h-1 bg-emerald-400 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}