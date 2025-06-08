export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Passionate about creating impactful digital solutions</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              With extensive experience in full-stack development, I specialize in SolidJS and modern JavaScript frameworks. 
              My expertise in SolidJS's fine-grained reactivity allows me to build incredibly fast and efficient applications 
              with minimal bundle sizes and optimal performance.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              I believe in leveraging SolidJS's reactive primitives and signals to create applications that are both 
              performant and maintainable, delivering exceptional user experiences across all platforms.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-gray-50 dark:bg-background rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-background rounded-xl">
                <div className="text-3xl font-bold text-secondary mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-96 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <i className="fas fa-code text-8xl mb-4 opacity-80"></i>
                  <div className="text-2xl font-bold">SolidJS Expert</div>
                  <div className="text-lg opacity-90">Building Fast, Reactive UIs</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 btn-gradient rounded-full flex items-center justify-center text-white animate-pulse">
              <i className="fas fa-laptop-code text-4xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
