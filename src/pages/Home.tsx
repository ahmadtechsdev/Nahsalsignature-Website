import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const services = [
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Comprehensive planning services to bring your vision to life with meticulous attention to detail.",
    },
    {
      icon: Users,
      title: "Event Coordination",
      description: "Seamless coordination ensuring every element of your event runs smoothly and professionally.",
    },
    {
      icon: Sparkles,
      title: "Event Ushering",
      description: "Professional ushering services providing warm welcomes and exceptional guest experiences.",
    },
  ];

  const stats = [
    { value: "500+", label: "Events Managed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Professional Team" },
    { value: "10+", label: "Years Experience" },
  ];

  const benefits = [
    "Experienced event professionals",
    "Customized event solutions",
    "End-to-end event management",
    "Competitive pricing packages",
    "Dedicated support team",
    "Proven track record",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-primary py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Creating Lasting Impressions
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 animate-fade-in">
              Professional event management services from planning to execution. 
              Let us transform your vision into unforgettable experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              Comprehensive event management solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-smooth shadow-elegant hover:shadow-hover group">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <service.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-2">
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                Why Choose Nahsal Signatures?
              </h2>
              <p className="text-muted-foreground mb-8">
                We bring expertise, creativity, and dedication to every event we manage. 
                Our team ensures your special moments become lasting memories.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012"
                alt="Professional event setup"
                className="rounded-lg shadow-elegant w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="gradient-primary border-0 shadow-elegant">
            <CardContent className="p-8 lg:p-12 text-center text-primary-foreground">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                Ready to Create Something Amazing?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your event and how we can make it extraordinary. 
                Contact us today for a free consultation.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
