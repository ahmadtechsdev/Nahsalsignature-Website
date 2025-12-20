import { 
  Calendar, Users, Briefcase, ArrowRight, Package, Truck,
  Building, Heart, PartyPopper, Music, Award, Target, 
  GraduationCap, Mic, Globe, Trophy, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      id: "planning",
      icon: Calendar,
      title: "Event Planning & Coordination",
      details: [
        "Concept development and event design",
        "Event scheduling and timeline management",
        "Vendor sourcing and coordination",
        "Budget planning and cost management",
        "On-site coordination and supervision",
      ],
    },
    {
      id: "management",
      icon: Briefcase,
      title: "General Event Management",
      details: [
        "End-to-end event execution",
        "Event logistics and operations",
        "Risk management and contingency planning",
        "Guest flow and crowd control",
        "Post-event breakdown and evaluation",
      ],
    },
    {
      id: "ushering",
      icon: Users,
      title: "Ushering & Protocol Services",
      details: [
        "Professional and trained ushers",
        "Guest reception and registration",
        "Seating arrangements and assistance",
        "Protocol and VIP handling",
        "Uniform and branded presentation",
      ],
    },
    {
      id: "materials",
      icon: Package,
      title: "Supply of Event Materials",
      details: [
        "Event wear and branded apparel",
        "Event accessories and consumables",
        "Decoration support materials",
        "Customized event materials",
        "Quality assurance on all supplies",
      ],
    },
    {
      id: "support",
      icon: Truck,
      title: "Event Support Services",
      details: [
        "Event staffing solutions",
        "Logistics support",
        "Technical equipment coordination",
        "Transportation arrangements",
        "Post-event cleanup",
      ],
    },
  ];

  const eventTypes = [
    { icon: Building, title: "Corporate Events" },
    { icon: Heart, title: "Weddings" },
    { icon: PartyPopper, title: "Birthday Parties" },
    { icon: Music, title: "Concerts" },
    { icon: Award, title: "Award Ceremonies" },
    { icon: Target, title: "Product Launches" },
    { icon: GraduationCap, title: "Workshops" },
    { icon: Mic, title: "Press Conferences" },
    { icon: Globe, title: "Trade Fairs" },
    { icon: Trophy, title: "Sporting Events" },
  ];

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
              <span>Our Services</span>
            </div>
            <h1 className="font-display text-display-lg lg:text-display-xl text-foreground mb-6 animate-fade-up stagger-1">
              Our
              <span className="text-gradient"> Services</span>
            </h1>
            <p className="text-body-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-up stagger-2">
              Comprehensive event management solutions tailored to transform 
              your ideas into memorable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-6">
            {mainServices.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`group card-premium p-8 lg:p-10 hover-lift ${
                  index === mainServices.length - 1 && mainServices.length % 2 !== 0 
                    ? 'lg:col-span-2 lg:max-w-[calc(50%-0.75rem)]' 
                    : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                    <service.icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-heading-lg text-foreground mb-5">
                      {service.title}
                    </h3>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events We Manage */}
      <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mb-16">
            <p className="text-body-sm font-semibold text-primary uppercase tracking-wider mb-4">Event Types</p>
            <h2 className="font-display text-display-sm lg:text-display-md text-foreground mb-6">
              Events we
              <span className="text-gradient"> manage</span>
            </h2>
            <p className="text-muted-foreground text-body-lg">
              From intimate gatherings to grand celebrations, we handle it all
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {eventTypes.map((type, index) => (
              <div 
                key={index} 
                className="group card-premium p-6 text-center hover-lift cursor-pointer"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                  <type.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" />
                </div>
                <span className="text-body-sm font-semibold text-foreground">{type.title}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-10 text-body-md">
            Plus: Community events, religious gatherings, government functions, catering, and more.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <p className="text-body-sm font-semibold text-primary uppercase tracking-wider mb-4">Industries</p>
              <h2 className="font-display text-display-sm lg:text-display-md text-foreground mb-8">
                Industries we
                <span className="text-gradient"> serve</span>
              </h2>
              <p className="text-muted-foreground text-body-lg mb-10 leading-relaxed">
                Our expertise spans across multiple industries, providing tailored 
                event solutions that meet unique sector requirements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Corporate & Business",
                  "Social & Private",
                  "Government & Institutional",
                  "Religious & Community",
                  "Entertainment & Media",
                  "Educational Sector",
                ].map((industry, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="h-2 w-2 rounded-full gradient-primary transition-all duration-300 group-hover:w-4" />
                    <span className="text-foreground font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070"
                  alt="Industry events"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-3xl border-2 border-primary/20 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-3xl bg-accent/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[2rem] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-primary" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(262,83%,70%,0.3),_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsla(239,84%,75%,0.2),_transparent_50%)]" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            
            <div className="relative px-8 py-20 lg:px-20 lg:py-28 text-center">
              <h2 className="font-display text-display-sm lg:text-display-md text-white mb-6 max-w-3xl mx-auto">
                Ready to plan your
                <span className="text-primary-lighter"> event?</span>
              </h2>
              <p className="text-white/70 text-body-lg mb-10 max-w-2xl mx-auto">
                Let's discuss your requirements and create a customized solution 
                that exceeds your expectations.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="rounded-full px-10 font-semibold h-14 text-base bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get a Free Quote
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

export default Services;
