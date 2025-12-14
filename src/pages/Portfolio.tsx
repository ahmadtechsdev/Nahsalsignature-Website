import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const Portfolio = () => {
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Clean & Simple */}
      <section className="py-16 lg:py-20 bg-secondary/20 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-accent">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Showcasing our dedication to excellence through memorable events and satisfied clients
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden border hover:border-accent/50 transition-all duration-300 hover:shadow-md bg-background">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-accent/90 text-accent-foreground text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground">
              Hear from those who have experienced our exceptional service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border bg-background">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-accent/30 mb-4" />
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Events Completed</div>
            </div>
            <div>
              <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
