import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", eventType: "", message: "" });
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl lg:text-6xl text-foreground mb-6">
              Get in <span className="italic">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Let's discuss your event and create something extraordinary together
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-secondary/30 rounded-3xl p-8 lg:p-12">
                <h2 className="font-display text-3xl text-foreground mb-8">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="h-12 rounded-xl bg-background border-border"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
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
                        className="h-12 rounded-xl bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 XXX XXX XXXX"
                        className="h-12 rounded-xl bg-background border-border"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium mb-2 text-foreground">
                        Event Type
                      </label>
                      <Input
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        placeholder="e.g., Wedding, Corporate"
                        className="h-12 rounded-xl bg-background border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
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
                      className="rounded-xl bg-background border-border resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 rounded-full font-medium text-base">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  {socialMedia.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 w-11 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-base"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
                <h3 className="font-display text-xl mb-6">Business Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-primary-foreground/70">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-foreground/70">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-foreground/70">Sunday</span>
                    <span className="font-medium">By Appointment</span>
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