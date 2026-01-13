import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter, Linkedin, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return; // Prevent duplicate submissions
    setIsSubmitting(true);

    const recipient = "nahsalsignaturesltd@gmail.com";
    const subject = encodeURIComponent(`New Contact Form Submission - ${formData.eventType || 'General Inquiry'}`);
    
    const body = encodeURIComponent(
`Full Name: ${formData.name}

Email Address: ${formData.email}

Phone Number: ${formData.phone || 'Not provided'}

Event Type: ${formData.eventType || 'Not specified'}

Message:
${formData.message}`
    );

    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;

    toast({
      title: "Email Client Opened!",
      description: "Please click 'Send' in your email app to submit your message.",
    });

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", eventType: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+234 814 785 3995", "+234 704 692 2644"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["nahsalsignaturesltd@gmail.com"],
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Nigeria"],
    },
  ];

  const socialMedia = [
    { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
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
              <span>Get in Touch</span>
            </div>
            <h1 className="font-display text-display-lg lg:text-display-xl text-foreground mb-6 animate-fade-up stagger-1">
              Get in
              <span className="text-gradient"> Touch</span>
            </h1>
            <p className="text-body-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-up stagger-2">
              Let's discuss your event and create something extraordinary together
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card-premium p-8 lg:p-12">
                <h2 className="font-display text-heading-lg text-foreground mb-2">Send us a message</h2>
                <p className="text-muted-foreground mb-8">Fill out the form and we'll get back to you shortly.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-body-sm font-medium mb-2.5 text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="h-12 rounded-xl bg-background border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-body-sm font-medium mb-2.5 text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="h-12 rounded-xl bg-background border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-body-sm font-medium mb-2.5 text-foreground">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 XXX XXX XXXX"
                        className="h-12 rounded-xl bg-background border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventType" className="block text-body-sm font-medium mb-2.5 text-foreground">
                        Event Type
                      </label>
                      <Input
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        placeholder="e.g., Wedding, Corporate"
                        className="h-12 rounded-xl bg-background border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-body-sm font-medium mb-2.5 text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your event..."
                      className="rounded-xl bg-background border-border/50 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full h-14 rounded-full font-semibold text-base gradient-primary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Opening Email..." : "Send Message"}
                    <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="card-premium p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-body-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="card-premium p-6">
                <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  {socialMedia.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center text-white shadow-lg shadow-primary/25 hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 gradient-primary" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(262,83%,70%,0.3),_transparent_50%)]" />
                <div className="relative p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="h-5 w-5" />
                    <h3 className="font-display text-heading-sm">Business Hours</h3>
                  </div>
                  <div className="space-y-4 text-body-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">Monday - Friday</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Saturday</span>
                      <span className="font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Sunday</span>
                      <span className="font-semibold">By Appointment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
