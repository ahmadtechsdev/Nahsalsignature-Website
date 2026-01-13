import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles, Star, Users, Calendar, Award } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Calendar,
      title: "Event Planning",
      description: "From concept to execution, we handle every detail of your event with precision.",
    },
    {
      icon: Users,
      title: "Ushering & Protocol",
      description: "Professional ushers and VIP handling for exceptional guest experiences.",
    },
    {
      icon: Award,
      title: "Full Management",
      description: "Complete end-to-end event execution with logistics and coordination.",
    },
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Team Members" },
    { value: "5+", label: "Years Experience" },
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
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        {/* Decorative blobs */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-body-sm font-medium mb-8 animate-fade-up">
                <Sparkles className="h-4 w-4" />
                <span>Trusted Event Partner</span>
                <span className="w-1 h-1 rounded-full bg-primary/40" />
                <span className="text-muted-foreground">RC 9199030</span>
              </div>
              
              {/* Heading */}
              <h1 className="font-display text-display-lg lg:text-display-xl text-foreground mb-6 animate-fade-up stagger-1">
                Crafting
                <span className="text-gradient"> unforgettable </span>
                experiences
              </h1>
              
              {/* Description */}
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-10 max-w-lg animate-fade-up stagger-2">
                We transform your vision into extraordinary events. From intimate gatherings 
                to grand celebrations, we deliver excellence at every step.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
                <Button 
                  asChild 
                  size="lg" 
                  className="rounded-full px-8 font-semibold h-14 text-base gradient-primary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 group"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Start Your Event
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full px-8 font-semibold h-14 text-base border-2 hover:bg-secondary transition-all duration-300"
                >
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4 mt-12 pt-8 border-t border-border/50 animate-fade-up stagger-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-body-sm text-muted-foreground mt-0.5">
                    Trusted by our clients
                  </p>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative hidden lg:block animate-fade-up stagger-2">
              <div className="relative">
                {/* Main image */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
                    alt="Elegant event setup"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                </div>
                
                {/* Floating card */}
                <div className="absolute -left-12 bottom-20 card-premium p-6 animate-float">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/25">
                      <span className="text-xl font-bold text-white">1M+</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Guests Served</div>
                      <div className="text-body-sm text-muted-foreground">Across all events</div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-3xl bg-accent/10 -z-10" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-3xl bg-primary/10 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/50" />
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="font-display text-display-md lg:text-display-lg text-foreground mb-2 transition-transform duration-300 group-hover:scale-105">
                  {stat.value}
                </div>
                <div className="text-body-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mb-16">
            <p className="text-body-sm font-semibold text-primary uppercase tracking-wider mb-4">What We Do</p>
            <h2 className="font-display text-display-sm lg:text-display-md text-foreground mb-6">
              Services designed to make your event 
              <span className="text-gradient"> exceptional</span>
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Comprehensive event solutions tailored to create memorable experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group card-premium p-8 hover-lift cursor-pointer"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                  <service.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" />
                </div>
                <div className="text-body-sm text-muted-foreground mb-3 font-medium">0{index + 1}</div>
                <h3 className="font-display text-heading-md text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              asChild 
              variant="outline" 
              className="rounded-full px-8 font-semibold border-2 hover:bg-secondary group"
            >
              <Link to="/services" className="flex items-center gap-2">
                Explore All Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <p className="text-body-sm font-semibold text-primary uppercase tracking-wider mb-4">Why Choose Us</p>
              <h2 className="font-display text-display-sm lg:text-display-md text-foreground mb-8">
                Why choose
                <span className="text-gradient"> Nahsal Signatures?</span>
              </h2>
              <p className="text-body-lg text-muted-foreground mb-10 leading-relaxed">
                We bring expertise, creativity, and dedication to every event. 
                Our team ensures your special moments become lasting memories.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="h-6 w-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/25">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012"
                  alt="Professional event team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-3xl border-2 border-primary/20 -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-accent/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[2rem] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-primary" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(262,83%,70%,0.3),_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsla(239,84%,75%,0.2),_transparent_50%)]" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            
            <div className="relative px-8 py-20 lg:px-20 lg:py-28 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-body-sm font-medium mb-8 backdrop-blur-sm border border-white/10">
                <Sparkles className="h-4 w-4" />
                Free Consultation Available
              </div>
              <h2 className="font-display text-display-sm lg:text-display-md text-white mb-6 max-w-3xl mx-auto">
                Ready to create something 
                <span className="text-primary-lighter"> amazing?</span>
              </h2>
              <p className="text-white/70 text-body-lg mb-10 max-w-2xl mx-auto">
                Let's discuss your event and bring your vision to life. 
                Schedule a free consultation today.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="rounded-full px-10 font-semibold h-14 text-base bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Start Planning
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
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
