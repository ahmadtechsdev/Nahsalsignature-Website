import { useState } from "react";
import { Quote, Sparkles, Star } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Corporate Annual Gala",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
      description: "A prestigious annual gala for a leading corporation",
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
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        {/* Decorative blobs */}
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-body-sm font-medium mb-8 animate-fade-up">
              <Sparkles className="h-4 w-4" />
              <span>Our Work</span>
            </div>
            <h1 className="font-display text-display-lg lg:text-display-xl text-foreground mb-6 animate-fade-up stagger-1">
              Our
              <span className="text-gradient"> Portfolio</span>
            </h1>
            <p className="text-body-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-up stagger-2">
              Showcasing our dedication to excellence through memorable events 
              and satisfied clients
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="container mx-auto px-6 relative">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-full text-body-sm font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? "gradient-primary text-white shadow-lg shadow-primary/25"
                    : "bg-secondary text-foreground hover:bg-secondary/80 border border-border/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 shadow-lg transition-shadow duration-300 group-hover:shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 rounded-full text-body-sm font-medium bg-background/90 text-foreground backdrop-blur-sm shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-heading-md text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-body-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mb-16">
            <p className="text-body-sm font-semibold text-primary uppercase tracking-wider mb-4">Testimonials</p>
            <h2 className="font-display text-display-sm lg:text-display-md text-foreground mb-6">
              What our clients
              <span className="text-gradient"> say</span>
            </h2>
            <p className="text-muted-foreground text-body-lg">
              Hear from those who have experienced our exceptional service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-premium p-8 hover-lift">
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="text-foreground mb-8 leading-relaxed text-body-md">
                  "{testimonial.quote}"
                </p>
                <div className="pt-6 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-body-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {[
              { value: "98%", label: "Client Satisfaction" },
              { value: "100+", label: "Happy Clients" },
              { value: "50+", label: "Team Members" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="font-display text-display-md lg:text-display-lg text-foreground mb-2 transition-transform duration-300 group-hover:scale-105">
                  <span className="text-gradient">{stat.value}</span>
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
