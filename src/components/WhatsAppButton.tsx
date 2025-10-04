import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "234XXXXXXXXXX"; // Replace with actual WhatsApp number
  const message = "Hello! I'm interested in your event management services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full shadow-elegant hover:shadow-hover transition-smooth bg-[#25D366] hover:bg-[#20BA5A] text-white"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-elegant">
        Chat with us!
      </span>
    </a>
  );
};

export default WhatsAppButton;
