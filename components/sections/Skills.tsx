"use client";

import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});

  const skills: Skill[] = [
    { name: 'SolidJS', level: 95, category: 'Specialty', color: 'from-blue-500 to-blue-600' },
    { name: 'Svelte', level: 95, category: 'Specialty', color: 'from-orange-500 to-red-500' },
    { name: 'React', level: 90, category: 'Framework', color: 'from-cyan-400 to-blue-500' },
    { name: 'Vue.js', level: 85, category: 'Framework', color: 'from-green-400 to-emerald-500' },
    { name: 'Next.js', level: 88, category: 'Framework', color: 'from-gray-600 to-gray-800' },
    { name: 'Nuxt.js', level: 85, category: 'Framework', color: 'from-emerald-400 to-green-500' },
    { name: 'TypeScript', level: 92, category: 'Language', color: 'from-blue-600 to-blue-700' },
    { name: 'JavaScript', level: 95, category: 'Language', color: 'from-yellow-400 to-orange-500' },
    { name: 'Tailwind CSS', level: 90, category: 'Styling', color: 'from-teal-400 to-cyan-500' },
    { name: 'CSS/SCSS', level: 88, category: 'Styling', color: 'from-pink-500 to-purple-600' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate skill levels
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedLevels(prev => ({
                ...prev,
                [skill.name]: skill.level
              }));
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern frontend technologies and frameworks
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <div
              key={category}
              className={`transition-all duration-1000 delay-${categoryIndex * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">{category}</h3>
              <div className="space-y-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-slate-400 text-sm">
                          {animatedLevels[skill.name] || 0}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full`}
                          style={{
                            width: `${animatedLevels[skill.name] || 0}%`,
                            transition: 'width 1s ease-out'
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}