import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import logo from "@/assets/nahsal-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
  ];

  const services = [
    { to: "/services#planning", label: "Event Planning" },
    { to: "/services#ushering", label: "Ushering Services" },
    { to: "/services#management", label: "Event Management" },
    { to: "/services#materials", label: "Event Materials" },
  ];

  const socials = [
    { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-white text-foreground overflow-hidden border-t border-border">
      <div className="container mx-auto px-6 pt-20 pb-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Nahsal Signatures" className="h-10 w-auto mb-6" />
            <p className="text-muted-foreground text-body-sm leading-relaxed mb-8 max-w-xs">
              Professional event management services delivering seamless, creative solutions. RC 9199030
            </p>
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:-translate-y-0.5 text-primary"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-body-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">Company</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-body-sm text-foreground/70 hover:text-primary transition-colors duration-300 inline-flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-1 translate-y-0.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-body-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.to}>
                  <Link
                    to={service.to}
                    className="text-body-sm text-foreground/70 hover:text-primary transition-colors duration-300 inline-flex items-center gap-1.5 group"
                  >
                    {service.label}
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-1 translate-y-0.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-body-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-primary" />
                </div>
                <div className="text-body-sm text-foreground/70 space-y-1.5">
                  <a href="tel:+2348147853995" className="hover:text-primary transition-colors duration-300 block">
                    +234 814 785 3995
                  </a>
                  <a href="tel:+2347046922644" className="hover:text-primary transition-colors duration-300 block">
                    +234 704 692 2644
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-accent" />
                </div>
                <a
                  href="mailto:nahsalsignaturesltd@gmail.com"
                  className="text-body-sm text-foreground/70 hover:text-primary transition-colors duration-300 break-all"
                >
                  nahsalsignaturesltd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-sm text-muted-foreground">
            © {currentYear} Nahsal Signatures Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              to="/privacy"
              className="text-body-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-body-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
