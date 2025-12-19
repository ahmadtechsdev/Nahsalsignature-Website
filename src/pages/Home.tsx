import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const Home = () => {
  const services = [
    {
      title: "Event Planning",
      description: "From concept to execution, we handle every detail of your event with precision.",
    },
    {
      title: "Ushering & Protocol",
      description: "Professional ushers and VIP handling for exceptional guest experiences.",
    },
    {
      title: "Full Management",
      description: "Complete end-to-end event execution with logistics and coordination.",
    },
  ];

  const stats = [
    { value: "500+", label: "Events" },
    { value: "98%", label: "Satisfaction" },
    { value: "50+", label: "Team Members" },
    { value: "10+", label: "Years" },
  ];

  const benefits = [
    "Proven expertise in event management",
    "Dedicated professional team",
    "Flawless attention to detail",
    "Flexible, tailored solutions",
    "Competitive pricing",
    "Trusted by top organizations",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
                <Sparkles className="h-4 w-4" />
                Trusted Event Partner · RC 0011010
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6">
                Crafting
                <span className="italic"> unforgettable</span> experiences
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                We transform your vision into extraordinary events. From intimate gatherings 
                to grand celebrations, we deliver excellence at every step.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full px-8 font-medium h-14 text-base">
                  <Link to="/contact">
                    Start Your Event
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 font-medium h-14 text-base">
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-floating">
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
                  alt="Elegant event setup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              
              {/* Floating card */}
              <div className="absolute -left-8 bottom-24 bg-background rounded-2xl p-6 shadow-floating border">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-accent">1M+</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Guests Served</div>
                    <div className="text-sm text-muted-foreground">Across all events</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl lg:text-5xl font-normal text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
              What we do<span className="italic"> best</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive event solutions tailored to create memorable experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-secondary/50 hover:bg-secondary transition-base"
              >
                <div className="text-sm text-muted-foreground mb-4 font-medium">0{index + 1}</div>
                <h3 className="font-display text-2xl text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full px-8 font-medium">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-8">
                Why choose <span className="italic">Nahsal Signatures?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                We bring expertise, creativity, and dedication to every event. 
                Our team ensures your special moments become lasting memories.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-accent" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-floating">
                <img
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012"
                  alt="Professional event team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl bg-primary overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(217_91%_60%_/_0.15),_transparent_50%)]" />
            <div className="relative px-8 py-16 lg:px-16 lg:py-24 text-center">
              <h2 className="font-display text-4xl lg:text-5xl text-primary-foreground mb-6">
                Ready to create something <span className="italic">amazing?</span>
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
                Let's discuss your event and bring your vision to life. 
                Schedule a free consultation today.
              </p>
              <Button asChild size="lg" className="rounded-full px-10 font-medium h-14 text-base bg-accent hover:bg-accent/90">
                <Link to="/contact">
                  Start Planning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;