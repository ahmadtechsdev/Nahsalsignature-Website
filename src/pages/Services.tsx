import { 
  Calendar, Users, Briefcase, ArrowRight, Package, 
  Truck, Building, Heart, GraduationCap, Mic,
  Globe, Trophy, Target, PartyPopper, Music, Award
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="min-h-screen bg-background">
      {/* Hero Section - Clean & Simple */}
      <section className="py-16 lg:py-20 bg-secondary/20 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive event management solutions tailored to transform your ideas 
              into memorable experiences with strategic planning and professional execution.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service) => (
              <Card key={service.id} id={service.id} className="border hover:border-accent/50 transition-all duration-300 hover:shadow-md group bg-background">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events We Manage */}
      <section className="py-16 lg:py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Events We Manage
            </h2>
            <p className="text-muted-foreground">
              From intimate gatherings to grand celebrations, we handle it all
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {eventTypes.map((type, index) => (
              <div key={index} className="bg-background rounded-xl p-4 text-center border hover:border-accent/50 transition-colors group">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                  <type.icon className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">{type.title}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Plus: Community events, religious gatherings, government functions, catering, and more.
          </p>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Industries We Serve
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our expertise spans across multiple industries, providing tailored event 
                solutions that meet the unique requirements of each sector.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Corporate & Business",
                  "Social & Private",
                  "Government & Institutional",
                  "Religious & Community",
                  "Entertainment & Media",
                  "Educational Sector",
                ].map((industry, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-sm text-foreground/90">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070"
                alt="Industry events"
                className="rounded-2xl shadow-elegant w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-primary-foreground">
              Ready to Plan Your Event?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your event requirements and create a customized solution 
              that exceeds your expectations.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/contact">
                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
