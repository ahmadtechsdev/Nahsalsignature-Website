import { Calendar, Users, Sparkles, Briefcase, PartyPopper, GraduationCap, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      id: "planning",
      icon: Calendar,
      title: "Event Planning",
      description: "Comprehensive planning services from concept to execution",
      details: [
        "Venue selection and management",
        "Budget planning and management",
        "Vendor coordination and negotiation",
        "Timeline development and management",
        "Theme and design conceptualization",
        "Risk assessment and contingency planning",
      ],
    },
    {
      id: "coordination",
      icon: Briefcase,
      title: "Event Coordination",
      description: "Seamless day-of coordination for flawless execution",
      details: [
        "On-site event management",
        "Vendor supervision and coordination",
        "Timeline execution and monitoring",
        "Problem-solving and crisis management",
        "Guest flow management",
        "Setup and breakdown supervision",
      ],
    },
    {
      id: "ushering",
      icon: Users,
      title: "Event Ushering",
      description: "Professional ushering services for exceptional guest experiences",
      details: [
        "Professional and courteous staff",
        "Guest reception and greeting",
        "Crowd management and direction",
        "VIP guest handling",
        "Information assistance",
        "Uniform and branded presentation",
      ],
    },
    {
      id: "management",
      icon: Sparkles,
      title: "Full Event Management",
      description: "End-to-end event management for complete peace of mind",
      details: [
        "Complete event planning and coordination",
        "All-inclusive vendor management",
        "Budget oversight and reporting",
        "Marketing and promotion support",
        "Post-event analysis and reporting",
        "Continuous client communication",
      ],
    },
  ];

  const eventTypes = [
    { icon: Briefcase, title: "Corporate Events", description: "Conferences, seminars, and business gatherings" },
    { icon: PartyPopper, title: "Social Events", description: "Weddings, birthdays, and anniversaries" },
    { icon: GraduationCap, title: "Educational Events", description: "Workshops, training sessions, and graduations" },
    { icon: Sparkles, title: "Special Occasions", description: "Launch events, galas, and award ceremonies" },
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
              Comprehensive event management solutions tailored to your unique needs and vision
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
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
                          : "1464366400600-7168b8af9bc3"
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

      {/* Event Types */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Events We Specialize In
            </h2>
            <p className="text-muted-foreground">
              From intimate gatherings to grand celebrations, we manage it all
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-smooth group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <type.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-display text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="gradient-primary border-0 shadow-elegant">
            <CardContent className="p-8 lg:p-12 text-center text-primary-foreground">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                Ready to Plan Your Event?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your event requirements and create a customized solution 
                that exceeds your expectations.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
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
