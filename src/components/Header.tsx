import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/nahsal-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-3 glass-strong shadow-soft" 
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="relative z-10">
            <img src={logo} alt="Nahsal Signatures" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-secondary/60 backdrop-blur-sm border border-border/50">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-primary-foreground bg-primary shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              asChild 
              className="rounded-full px-6 font-medium bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-10 p-2.5 text-foreground hover:bg-secondary rounded-xl transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden fixed inset-0 bg-background/98 backdrop-blur-xl transition-all duration-500 ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{ top: '0' }}
        >
          <div className="flex flex-col justify-center items-center h-full px-6">
            <div className="space-y-2 w-full max-w-sm">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-6 py-4 text-2xl font-semibold rounded-2xl transition-all duration-300 ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-secondary"
                    }`
                  }
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-6">
                <Button 
                  asChild 
                  size="lg"
                  className="w-full rounded-2xl font-semibold h-14 text-base bg-foreground text-background"
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
