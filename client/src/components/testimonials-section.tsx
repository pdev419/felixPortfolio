interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStartup Inc.",
    content: "Felix delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made the entire project seamless.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateCorp",
    content: "Working with Felix was a game-changer for our product. His full-stack expertise and modern approach helped us launch faster than anticipated.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "CTO",
    company: "DigitalSolutions",
    content: "Felix's mastery of React and Vue.js is impressive. He created a complex dashboard that our team loves to work with every day.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c3db?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index}
        className={`fas fa-star ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
      ></i>
    ));
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">What Clients Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Testimonials from satisfied clients</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white dark:bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} headshot`}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
