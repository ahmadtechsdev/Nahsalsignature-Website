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
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Nahsal Signatures" className="h-12 w-auto brightness-0 invert mb-6" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Professional event management services delivering seamless, creative solutions. RC 0011010
            </p>
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-base"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-base inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.to}>
                  <Link
                    to={service.to}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-base inline-flex items-center gap-1 group"
                  >
                    {service.label}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/70 space-y-1">
                  <a href="tel:+2348147853995" className="hover:text-primary-foreground transition-base block">
                    +234 814 785 3995
                  </a>
                  <a href="tel:+2347046922644" className="hover:text-primary-foreground transition-base block">
                    +234 704 692 2644
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:nahsalsignaturesltd@gmail.com"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-base break-all"
                >
                  nahsalsignaturesltd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {currentYear} Nahsal Signatures Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-base"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-base"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;