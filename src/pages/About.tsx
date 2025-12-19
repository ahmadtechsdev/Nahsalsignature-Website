import { Target, Eye, Check } from "lucide-react";

const About = () => {
  const values = [
    { title: "Excellence", description: "We aim for perfection in every detail." },
    { title: "Integrity", description: "Transparency and honesty guide us." },
    { title: "Creativity", description: "Fresh ideas for unique concepts." },
    { title: "Reliability", description: "On time and on budget delivery." },
    { title: "Customer Focus", description: "Your success is our priority." },
  ];

  const approach = [
    { step: "01", title: "Consultation", description: "Understanding your objectives and expectations" },
    { step: "02", title: "Planning", description: "Developing a comprehensive event strategy" },
    { step: "03", title: "Execution", description: "Professional coordination and real-time management" },
    { step: "04", title: "Delivery", description: "Seamless event experience and satisfaction" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl lg:text-6xl text-foreground mb-6">
              About <span className="italic">Nahsal Signatures</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A professional event-focused company committed to delivering seamless, 
              creative, and well-coordinated event solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
                RC 0011010
              </div>
              <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-8">
                Transforming ideas into <span className="italic">memorable</span> experiences
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Nahsal Signatures Ltd specializes in planning, coordinating, and executing 
                  events of various scales while providing reliable event support services 
                  and materials.
                </p>
                <p>
                  Our brand is built on excellence, precision, creativity, and customer 
                  satisfaction. We combine strategic planning, professional coordination, 
                  and high-quality event resources to deliver exceptional results.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-floating">
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070"
                  alt="Professional team planning event"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-3xl p-10 lg:p-12 shadow-soft">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-3xl text-foreground mb-6">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To become a leading and trusted event contracting and management brand 
                recognized for innovation, reliability, and excellence across Nigeria and beyond.
              </p>
            </div>

            <div className="bg-background rounded-3xl p-10 lg:p-12 shadow-soft">
              <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8">
                <Target className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-3xl text-foreground mb-6">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To consistently deliver exceptional event solutions by providing professional 
                planning, coordination, and management services that exceed client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
              Our core <span className="italic">values</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-base"
              >
                <h3 className="font-display text-xl text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
              Our <span className="italic">approach</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A structured and collaborative process to deliver excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <div key={index} className="relative">
                <div className="font-display text-7xl text-accent/10 mb-4">{item.step}</div>
                <h3 className="font-display text-2xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-8">
                Health, Safety & <span className="italic">Quality</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                We adhere to strict safety, quality, and operational standards 
                to ensure the highest level of service delivery for every event.
              </p>
              <div className="space-y-4">
                {[
                  "Safe event environments",
                  "Proper crowd management",
                  "Regulatory compliance",
                  "Consistent service quality",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "50+", label: "Team Members" },
                { value: "15+", label: "Specializations" },
                { value: "10+", label: "Years" },
              ].map((stat, index) => (
                <div key={index} className="bg-secondary/50 rounded-2xl p-6 text-center">
                  <div className="font-display text-3xl text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;