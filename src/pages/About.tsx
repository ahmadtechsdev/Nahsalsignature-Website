import { Target, Eye, Heart, Award, Shield, Lightbulb, Users, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Excellence",
      description: "We aim for perfection in every detail.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparency and honesty guide us.",
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "Fresh ideas for unique concepts.",
    },
    {
      icon: Award,
      title: "Reliability",
      description: "On time and on budget delivery.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your success is our priority.",
    },
  ];

  const approach = [
    { step: "01", title: "Consultation", description: "Understanding client objectives and expectations" },
    { step: "02", title: "Planning", description: "Developing a comprehensive event strategy" },
    { step: "03", title: "Execution", description: "Professional coordination and real-time management" },
    { step: "04", title: "Delivery", description: "Seamless event experience and client satisfaction" },
    { step: "05", title: "Evaluation", description: "Post-event review for continuous improvement" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Clean & Simple */}
      <section className="py-16 lg:py-20 bg-secondary/20 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-accent">Nahsal Signatures</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your trusted partner in creating memorable events that leave lasting impressions. 
              We are a professional event-focused general contracting company committed to 
              delivering seamless, creative, and well-coordinated event solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                RC 0011010
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-foreground">Company Overview</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nahsal Signatures Ltd is a professional event-focused general contracting company 
                  committed to delivering seamless, creative, and well-coordinated event solutions.
                </p>
                <p>
                  We specialize in planning, coordinating, and executing events of various scales 
                  while providing reliable event support services and materials. Our brand is built 
                  on excellence, precision, creativity, and customer satisfaction.
                </p>
                <p>
                  We pride ourselves on transforming ideas into memorable experiences by combining 
                  strategic planning, professional coordination, and high-quality event resources.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070"
                alt="Professional team planning event"
                className="rounded-2xl shadow-elegant w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border bg-background">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a leading and trusted event contracting and management brand 
                  recognized for innovation, reliability, and excellence across Nigeria and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="border bg-background">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To consistently deliver exceptional event solutions by providing professional 
                  planning, coordination, management, and supply services that exceed client 
                  expectations while maintaining the highest standards of integrity and quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-foreground">Our Core Values</h2>
            <p className="text-muted-foreground">
              The principles that guide every decision we make and every event we create
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {values.map((value, index) => (
              <Card key={index} className="border hover:border-accent/50 transition-colors group bg-background">
                <CardContent className="p-5 text-center">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-base font-semibold mb-1 text-foreground">{value.title}</h3>
                  <p className="text-xs text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 lg:py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-foreground">Our Approach</h2>
            <p className="text-muted-foreground">
              We adopt a structured and collaborative approach to deliver excellence
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {approach.map((item, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl font-bold text-accent/20 mb-2">{item.step}</div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Health, Safety & Quality Assurance
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We adhere to strict safety, quality, and operational standards to ensure 
                the highest level of service delivery for every event.
              </p>
              <div className="space-y-3">
                {[
                  "Safe event environments",
                  "Proper crowd management",
                  "Compliance with regulatory requirements",
                  "Consistent service quality",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-secondary/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="bg-secondary/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Specializations</div>
              </div>
              <div className="bg-secondary/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
