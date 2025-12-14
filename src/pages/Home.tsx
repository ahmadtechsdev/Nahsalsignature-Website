import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Sparkles, CheckCircle2, ArrowRight, Star, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const services = [
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Comprehensive planning services from concept development to flawless execution.",
    },
    {
      icon: Users,
      title: "Ushering & Protocol",
      description: "Professional ushers and VIP handling for exceptional guest experiences.",
    },
    {
      icon: Sparkles,
      title: "Full Management",
      description: "End-to-end event execution with logistics, staffing, and coordination.",
    },
  ];

  const stats = [
    { value: "500+", label: "Events Managed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Team Members" },
    { value: "10+", label: "Years Experience" },
  ];

  const benefits = [
    "Proven experience in event management",
    "Professional and dedicated team",
    "Attention to detail and flawless execution",
    "Flexible service tailored to your needs",
    "Competitive pricing without compromise",
    "Trusted by corporates and individuals",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Clean & Simple */}
      <section className="relative py-16 lg:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                <Star className="h-4 w-4" />
                RC 0011010 - Trusted Event Partner
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Creating <span className="text-accent">Lasting</span> Impressions
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Professional event management services from planning to execution. 
                We transform your vision into unforgettable experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2">
                  <Link to="/portfolio">
                    <Play className="mr-2 h-4 w-4" /> View Our Work
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
                  alt="Professional event setup"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-elegant border">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-foreground">1M+</div>
                    <div className="text-sm text-muted-foreground">Guests Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl lg:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Our Services
            </h2>
            <p className="text-muted-foreground">
              Comprehensive event management solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border hover:border-accent/50 transition-all duration-300 hover:shadow-md group bg-background">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-2">
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Why Choose Nahsal Signatures?
              </h2>
              <p className="text-muted-foreground mb-8">
                We bring expertise, creativity, and dedication to every event we manage. 
                Our team ensures your special moments become lasting memories.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012"
                alt="Professional event setup"
                className="rounded-2xl shadow-elegant w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-primary-foreground">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your event and how we can make it extraordinary. 
              Contact us today for a free consultation.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/contact">
                Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
