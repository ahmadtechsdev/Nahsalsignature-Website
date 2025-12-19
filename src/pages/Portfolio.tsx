import { useState } from "react";
import { Quote } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Corporate Annual Gala",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
      description: "A prestigious annual gala for a leading corporation with 500+ attendees",
    },
    {
      title: "Luxury Wedding Ceremony",
      category: "Wedding",
      image: "https://images.unsplash.com/photo-1519167758481-83f29da8a6c6?q=80&w=2098",
      description: "An elegant wedding celebration with sophisticated décor",
    },
    {
      title: "Product Launch Event",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012",
      description: "High-profile product launch with interactive demonstrations",
    },
    {
      title: "Charity Fundraiser Dinner",
      category: "Social",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069",
      description: "Successful fundraising dinner for a worthy cause",
    },
    {
      title: "Conference & Exhibition",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
      description: "Three-day international conference with exhibition halls",
    },
    {
      title: "Awards Ceremony",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070",
      description: "Prestigious awards ceremony celebrating excellence",
    },
  ];

  const testimonials = [
    {
      quote: "Nahsal Signatures transformed our corporate gala into an unforgettable experience. Their attention to detail exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CEO, Tech Corporation",
    },
    {
      quote: "From planning to execution, everything was perfect. Our wedding day was magical, and we couldn't have done it without their expertise.",
      author: "Michael & Jessica",
      position: "Wedding Clients",
    },
    {
      quote: "Outstanding service! They managed our product launch flawlessly, ensuring every aspect aligned with our brand vision.",
      author: "David Chen",
      position: "Marketing Director",
    },
  ];

  const categories = ["All", "Corporate", "Wedding", "Social"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl lg:text-6xl text-foreground mb-6">
              Our <span className="italic">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Showcasing our dedication to excellence through memorable events 
              and satisfied clients
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-base ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-background/90 text-foreground">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-accent transition-base">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
              What our clients <span className="italic">say</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Hear from those who have experienced our exceptional service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background rounded-3xl p-8 shadow-soft">
                <Quote className="h-10 w-10 text-accent/20 mb-6" />
                <p className="text-foreground mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="pt-6 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "500+", label: "Events Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "1000+", label: "Happy Clients" },
              { value: "50+", label: "Team Members" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-5xl lg:text-6xl text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;