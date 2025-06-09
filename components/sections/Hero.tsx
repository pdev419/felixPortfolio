"use client";

import { useEffect, useState } from 'react';
import { ChevronDown, Code, Zap, Users } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Frontend Developer',
    'React Specialist',
    'SolidJS Expert',
    'Svelte Enthusiast',
    'Next.js Developer'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-emerald-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent">
              Felix Rhodes
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-slate-300 mb-8 h-12 flex items-center justify-center">
            <span className="mr-2">Senior</span>
            <span
              key={currentRole}
              className="text-blue-400 font-semibold animate-pulse"
            >
              {roles[currentRole]}
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with expertise in modern frontend technologies. 
            Specializing in SolidJS and Svelte with a passion for performance and user experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-slate-300">
              <Code className="w-5 h-5 text-blue-400" />
              <span>Clean Code</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-slate-300">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span>Performance</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-slate-300">
              <Users className="w-5 h-5 text-purple-400" />
              <span>User Experience</span>
            </div>
          </div>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="animate-bounce hover:animate-none transition-all duration-300 hover:text-blue-400"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </div>
  );
}