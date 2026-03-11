import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
}

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({ phoneNumber }) => {
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 border-4 border-white"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </motion.a>
  );
};
