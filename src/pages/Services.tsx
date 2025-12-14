import { 
  Calendar, Users, Sparkles, Briefcase, ArrowRight, Package, 
  Truck, ClipboardCheck, Shield, UserCheck, Gift, Palette,
  Music, Award, Cake, Building, Heart, GraduationCap, Mic,
  Globe, Newspaper, Trophy, Target, PartyPopper
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      id: "planning",
      icon: Calendar,
      title: "Event Planning & Coordination",
      description: "Comprehensive planning services from concept to execution",
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
      description: "End-to-end event execution for complete peace of mind",
      details: [
        "End-to-end event execution",
        "Event logistics and operations",
        "Risk management and contingency planning",
        "Guest flow and crowd control management",
        "Post-event breakdown and evaluation",
      ],
    },
    {
      id: "ushering",
      icon: Users,
      title: "Ushering & Protocol Services",
      description: "Professional ushering for exceptional guest experiences",
      details: [
        "Professional and trained ushers",
        "Guest reception and registration management",
        "Seating arrangements and guest assistance",
        "Protocol and VIP handling services",
        "Uniform and branded presentation",
      ],
    },
    {
      id: "materials",
      icon: Package,
      title: "Supply of Event Materials",
      description: "Quality event materials and branded merchandise",
      details: [
        "Event wear and branded apparel",
        "Event accessories and consumables",
        "Decoration support materials",
        "Customized event materials (on request)",
        "Quality assurance on all supplies",
      ],
    },
    {
      id: "support",
      icon: Truck,
      title: "Other Event Support Services",
      description: "Additional services to ensure seamless event delivery",
      details: [
        "Event staffing solutions",
        "Event logistics support",
        "Technical equipment coordination",
        "Transportation arrangements",
        "Post-event breakdown and cleanup",
      ],
    },
  ];

  const eventTypes = [
    { icon: Building, title: "Corporate Events", description: "Conferences, seminars, AGMs, and business gatherings" },
    { icon: Heart, title: "Weddings", description: "Wedding ceremonies, receptions, and social celebrations" },
    { icon: PartyPopper, title: "Birthday Parties", description: "Private functions and anniversary celebrations" },
    { icon: Music, title: "Concerts", description: "Live performances and entertainment shows" },
    { icon: Award, title: "Award Ceremonies", description: "Galas, award nights, and year-end functions" },
    { icon: Target, title: "Product Launches", description: "Brand activations and promotional events" },
    { icon: GraduationCap, title: "Workshops", description: "Training sessions and educational events" },
    { icon: Mic, title: "Press Conferences", description: "Media events and press releases" },
    { icon: Globe, title: "Trade Fairs", description: "Exhibitions, expos, and career fairs" },
    { icon: Trophy, title: "Sporting Events", description: "Golf days and competitive events" },
    { icon: Newspaper, title: "Road Shows", description: "Marketing campaigns and brand campaigns" },
    { icon: Gift, title: "Themed Events", description: "Custom themed parties and special occasions" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Comprehensive event management solutions tailored to transform your ideas 
              into memorable experiences with strategic planning and professional execution.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="h-16 w-16 rounded-xl gradient-accent flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card className="border-2 shadow-elegant overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index === 0
                          ? "1511795409834-ef04bbd61622"
                          : index === 1
                          ? "1505373877841-8d25f7d46678"
                          : index === 2
                          ? "1540575467063-178a50c2df87"
                          : index === 3
                          ? "1464366400600-7168b8af9bc3"
                          : "1531058020387-3be344556be6"
                      }?q=80&w=2069`}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events We Manage */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Events We Manage
            </h2>
            <p className="text-muted-foreground">
              Nahsal Signatures Ltd manages a wide range of events — from intimate gatherings 
              to grand celebrations, we handle it all with professionalism and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-smooth group">
                <CardHeader className="pb-3">
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <type.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-display text-lg">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground italic">
              And many more including community events, religious gatherings, government functions, 
              catering services, and entertainers management.
            </p>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                Industries We Serve
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our expertise spans across multiple industries, providing tailored event 
                solutions that meet the unique requirements of each sector.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Corporate & Business",
                  "Social & Private",
                  "Government & Institutional",
                  "Religious & Community",
                  "Entertainment & Media",
                  "Educational Sector",
                ].map((industry, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-foreground/90">{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070"
                alt="Industry events"
                className="rounded-2xl shadow-elegant w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="gradient-primary border-0 shadow-elegant">
            <CardContent className="p-8 lg:p-12 text-center text-primary-foreground">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                Ready to Plan Your Event?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your event requirements and create a customized solution 
                that exceeds your expectations. Get in touch with us today!
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/contact">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
