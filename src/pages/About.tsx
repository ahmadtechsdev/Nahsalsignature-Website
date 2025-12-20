import { Target, Eye, Check, Sparkles } from "lucide-react";

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
              <span>About Us</span>
            </div>
            <h1 className="font-display text-display-lg lg:text-display-xl text-foreground mb-6 animate-fade-up stagger-1">
              About
              <span className="text-gradient"> Nahsal Signatures</span>
            </h1>
            <p className="text-body-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-up stagger-2">
              A professional event-focused company committed to delivering seamless, 
              creative, and well-coordinated event solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 text-accent text-body-sm font-medium mb-8">
                RC 0011010
              </div>
              <h2 className="font-display text-display-sm lg:text-display-md text-foreground mb-8">
                Transforming ideas into
                <span className="text-gradient"> memorable</span> experiences
              </h2>
              <div className="space-y-6 text-muted-foreground text-body-lg leading-relaxed">
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
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070"
                  alt="Professional team planning event"
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

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-premium p-10 lg:p-12 hover-lift">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-heading-lg text-foreground mb-6">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-body-lg">
                To become a leading and trusted event contracting and management brand 
                recognized for innovation, reliability, and excellence across Nigeria and beyond.
              </p>
            </div>

            <div className="card-premium p-10 lg:p-12 hover-lift">
              <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-heading-lg text-foreground mb-6">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-body-lg">
                To consistently deliver exceptional event solutions by providing professional 
                planning, coordination, and management services that exceed client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mb-16">
            <p className="text-body-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Principles</p>
            <h2 className="font-display text-display-sm lg:text-display-md text-foreground mb-6">
              Our core
              <span className="text-gradient"> values</span>
            </h2>
            <p className="text-muted-foreground text-body-lg">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group card-premium p-6 hover-lift cursor-pointer"
              >
                <div className="h-3 w-12 rounded-full gradient-primary mb-6 transition-all duration-300 group-hover:w-16" />
                <h3 className="font-display text-heading-sm text-foreground mb-2">{value.title}</h3>
                <p className="text-body-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mb-16">
            <p className="text-body-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Process</p>
            <h2 className="font-display text-display-sm lg:text-display-md text-foreground mb-6">
              Our
              <span className="text-gradient"> approach</span>
            </h2>
            <p className="text-muted-foreground text-body-lg">
              A structured and collaborative process to deliver excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <div key={index} className="relative group">
                <div className="font-display text-[6rem] leading-none text-primary/5 group-hover:text-primary/10 transition-colors duration-300 mb-2">
                  {item.step}
                </div>
                <h3 className="font-display text-heading-md text-foreground mb-3 -mt-8">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {/* Connector line */}
                {index < approach.length - 1 && (
                  <div className="hidden lg:block absolute top-16 right-0 w-1/2 h-px bg-gradient-to-r from-border to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <p className="text-body-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Standards</p>
              <h2 className="font-display text-display-sm lg:text-display-md text-foreground mb-8">
                Health, Safety &
                <span className="text-gradient"> Quality</span>
              </h2>
              <p className="text-muted-foreground text-body-lg mb-10 leading-relaxed">
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
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="h-6 w-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 shadow-sm transition-shadow duration-300 group-hover:shadow-md group-hover:shadow-primary/25">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
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
                <div key={index} className="card-premium p-6 text-center hover-lift">
                  <div className="font-display text-display-sm text-foreground mb-1">{stat.value}</div>
                  <div className="text-body-sm text-muted-foreground font-medium">{stat.label}</div>
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
