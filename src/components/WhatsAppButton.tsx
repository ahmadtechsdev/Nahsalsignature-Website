import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "2348147853995";
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
      <div className="relative">
        <div className="h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <MessageCircle className="h-6 w-6 text-white" />
        </div>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us
        </span>
      </div>
    </a>
  );
};

export default WhatsAppButton;