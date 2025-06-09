"use client";

import { useEffect, useState } from 'react';
import { Briefcase, MapPin, Mail } from 'lucide-react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                I'm a passionate senior frontend developer with extensive expertise across the modern 
                JavaScript ecosystem. My journey spans React, Vue, Svelte, SolidJS, Next.js, and Nuxt.js, 
                with a particular specialization in SolidJS and Svelte.
              </p>
              
              <p>
                I believe in creating not just functional applications, but exceptional digital experiences 
                that users love. My approach combines cutting-edge technology with thoughtful design, 
                ensuring every project delivers both performance and delight.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring the latest frontend innovations, 
                contributing to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
          
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Profile Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-emerald-400 p-1 bg-gradient-to-r from-blue-400 to-emerald-400">
                  <img
                    src="/3291951.jpg"
                    alt="Felix Rhodes"
                    className="w-full h-full object-cover rounded-full bg-slate-800"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-white">Quick Facts</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-slate-300">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  <span>Senior Frontend Developer</span>
                </div>
                
                <div className="flex items-center space-x-3 text-slate-300">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span>felixrhodes1212@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-5 h-5 bg-purple-400 rounded flex items-center justify-center text-xs font-bold text-white">
                    D
                  </div>
                  <span>felixrhodes1212</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-700">
                <h4 className="text-lg font-semibold mb-4 text-white">Specializations</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-orange-500/20 text-orange-300 px-3 py-2 rounded-lg text-sm font-medium">
                    SolidJS
                  </div>
                  <div className="bg-orange-600/20 text-orange-300 px-3 py-2 rounded-lg text-sm font-medium">
                    Svelte
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}