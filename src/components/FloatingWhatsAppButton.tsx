import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
}

export function FloatingWhatsAppButton({ phoneNumber }: FloatingWhatsAppButtonProps) {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-2xl shadow-green-500/40 transition-all duration-300 hover:scale-110 hover:shadow-3xl hover:shadow-green-500/50 focus:outline-none focus:ring-4 focus:ring-green-500/30 md:hidden"
      aria-label="Contact pharmacy on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </span>
    </button>
  );
}
