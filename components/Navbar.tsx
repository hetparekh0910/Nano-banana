'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onOrderClick?: () => void;
}

export default function Navbar({ onOrderClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/40 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">₦</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Nano Banana
          </span>
        </motion.div>

        {/* Order Button */}
        <motion.button
          onClick={onOrderClick}
          className="px-8 py-2.5 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold text-sm relative group overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative">Order Now</span>
        </motion.button>
      </div>
    </motion.nav>
  );
}
