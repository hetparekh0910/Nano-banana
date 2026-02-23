'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Nano Banana
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Future of Freshness. Hand-crafted, cold-pressed, pure goodness delivered to your doorstep.
            </p>
          </motion.div>

          {/* Shop */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition text-sm">
                  Cream Mango
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition text-sm">
                  Dutch Chocolate
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition text-sm">
                  Ruby Pomegranate
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition text-sm">
                  Subscribe & Save
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition text-sm">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition text-sm">
                  Returns
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get fresh drops & exclusive offers delivered weekly.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-orange-400 transition"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition">
                Join
              </button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <p>© {currentYear} Nano Banana. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-400 transition">
                Privacy
              </a>
              <a href="#" className="hover:text-orange-400 transition">
                Terms
              </a>
              <a href="#" className="hover:text-orange-400 transition">
                Sustainability
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
