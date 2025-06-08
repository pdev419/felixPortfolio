import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  iconColor: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "fab fa-react",
    iconColor: "text-primary",
    skills: [
      { name: "SolidJS", level: 98, color: "accent" },
      { name: "React & Next.js", level: 95, color: "primary" },
      { name: "Vue & Angular", level: 90, color: "secondary" },
    ],
  },
  {
    title: "Backend Development",
    icon: "fas fa-server",
    iconColor: "text-secondary",
    skills: [
      { name: "Node.js & Express", level: 92, color: "primary" },
      { name: "TypeScript", level: 95, color: "accent" },
      { name: "PostgreSQL & MongoDB", level: 88, color: "secondary" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "fas fa-tools",
    iconColor: "text-accent",
    skills: [
      { name: "Vite & Build Tools", level: 90, color: "accent" },
      { name: "Docker & AWS", level: 85, color: "primary" },
      { name: "Git & CI/CD", level: 92, color: "secondary" },
    ],
  },
];

const technologies = [
  { name: "SolidJS", icon: "fas fa-bolt", color: "text-blue-400" },
  { name: "React", icon: "fab fa-react", color: "text-blue-500" },
  { name: "Vue.js", icon: "fab fa-vuejs", color: "text-green-500" },
  { name: "Angular", icon: "fab fa-angular", color: "text-red-500" },
  { name: "TypeScript", icon: "fas fa-code", color: "text-blue-600" },
  { name: "Node.js", icon: "fab fa-node-js", color: "text-green-600" },
  { name: "Vite", icon: "fas fa-flash", color: "text-purple-500" },
  { name: "Tailwind", icon: "fas fa-paint-brush", color: "text-teal-500" },
  { name: "Docker", icon: "fab fa-docker", color: "text-blue-600" },
  { name: "AWS", icon: "fab fa-aws", color: "text-orange-500" },
  { name: "Git", icon: "fab fa-git-alt", color: "text-red-600" },
  { name: "PostgreSQL", icon: "fas fa-database", color: "text-blue-700" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Technical Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Technologies I work with daily</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white dark:bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`${category.iconColor} text-4xl mb-6`}>
                <i className={category.icon}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span className={`text-${skill.color} font-semibold`}>{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="w-full h-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Icons Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech) => (
            <div 
              key={tech.name}
              className="flex flex-col items-center p-4 bg-white dark:bg-card rounded-xl hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg"
            >
              <i className={`${tech.icon} text-4xl ${tech.color} mb-2`}></i>
              <span className="text-sm font-medium text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
