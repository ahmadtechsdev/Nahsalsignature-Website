import { Target, Eye, Heart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Excellence",
      description: "We strive for perfection in every detail of your event.",
    },
    {
      icon: Target,
      title: "Professionalism",
      description: "Delivering world-class service with integrity and dedication.",
    },
    {
      icon: Eye,
      title: "Creativity",
      description: "Innovative solutions that bring your unique vision to life.",
    },
    {
      icon: Award,
      title: "Reliability",
      description: "Consistent quality and timely execution you can trust.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              About Nahsal Signatures
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Your trusted partner in creating memorable events that leave lasting impressions
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nahsal Signatures was founded with a singular vision: to transform ordinary events 
                  into extraordinary experiences. With over a decade of expertise in event management, 
                  we have established ourselves as a trusted name in the industry.
                </p>
                <p>
                  From intimate gatherings to large-scale corporate events, we bring passion, 
                  creativity, and meticulous attention to detail to every project. Our team of 
                  dedicated professionals works tirelessly to ensure that your vision becomes reality.
                </p>
                <p>
                  What sets us apart is our commitment to excellence and our ability to adapt to 
                  the unique needs of each client. We don't just manage events; we create lasting 
                  impressions that resonate long after the event concludes.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070"
                alt="Professional team planning event"
                className="rounded-lg shadow-elegant w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 shadow-elegant">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver exceptional event management services that exceed expectations, 
                  creating memorable experiences through innovative planning, flawless execution, 
                  and unwavering commitment to client satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-elegant">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg gradient-accent flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading event management company recognized for transforming visions 
                  into reality, setting industry standards for creativity, professionalism, and 
                  excellence in every event we undertake.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">
              The principles that guide every decision we make and every event we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-smooth group">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                    <value.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Our Expert Team</h2>
            <p className="text-muted-foreground">
              A diverse group of passionate professionals dedicated to making your events exceptional
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-center text-muted-foreground mb-8">
              Our team comprises experienced event planners, coordinators, designers, and support staff 
              who work seamlessly together to deliver outstanding results. With combined decades of 
              experience across various event types, we bring expertise, creativity, and dedication 
              to every project we undertake.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Specializations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years Combined Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
