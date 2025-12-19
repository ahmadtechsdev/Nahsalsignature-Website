import { 
  Calendar, Users, Briefcase, ArrowRight, Package, Truck,
  Building, Heart, PartyPopper, Music, Award, Target, 
  GraduationCap, Mic, Globe, Trophy
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl lg:text-6xl text-foreground mb-6">
              Our <span className="italic">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive event management solutions tailored to transform 
              your ideas into memorable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`p-8 lg:p-10 rounded-3xl bg-secondary/50 hover:bg-secondary transition-base ${
                  index === mainServices.length - 1 && mainServices.length % 2 !== 0 
                    ? 'lg:col-span-2 lg:max-w-[calc(50%-1rem)]' 
                    : ''
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-foreground mb-4">
                      {service.title}
                    </h3>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <ArrowRight className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
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
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
              Events we <span className="italic">manage</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From intimate gatherings to grand celebrations, we handle it all
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {eventTypes.map((type, index) => (
              <div 
                key={index} 
                className="bg-background rounded-2xl p-6 text-center hover:shadow-soft transition-base group"
              >
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-base">
                  <type.icon className="h-6 w-6 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">{type.title}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-10">
            Plus: Community events, religious gatherings, government functions, catering, and more.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-8">
                Industries we <span className="italic">serve</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Our expertise spans across multiple industries, providing tailored 
                event solutions that meet unique sector requirements.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Corporate & Business",
                  "Social & Private",
                  "Government & Institutional",
                  "Religious & Community",
                  "Entertainment & Media",
                  "Educational Sector",
                ].map((industry, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-foreground">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-floating">
                <img
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070"
                  alt="Industry events"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl bg-primary overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(217_91%_60%_/_0.15),_transparent_50%)]" />
            <div className="relative px-8 py-16 lg:px-16 lg:py-24 text-center">
              <h2 className="font-display text-4xl lg:text-5xl text-primary-foreground mb-6">
                Ready to plan your <span className="italic">event?</span>
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
                Let's discuss your requirements and create a customized solution 
                that exceeds your expectations.
              </p>
              <Button asChild size="lg" className="rounded-full px-10 font-medium h-14 text-base bg-accent hover:bg-accent/90">
                <Link to="/contact">
                  Get a Free Quote
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

export default Services;