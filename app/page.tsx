'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProductBottleScroll from '@/components/ProductBottleScroll';
import ProductTextOverlays from '@/components/ProductTextOverlays';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/data/products';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const currentProduct = products[currentIndex];

  // Reset scroll when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowDetails(false);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleJump = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      <Navbar onOrderClick={() => window.scrollTo(0, document.body.scrollHeight)} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentProduct.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Scroll Experience */}
          <ProductBottleScroll product={currentProduct} />
          <ProductTextOverlays product={currentProduct} />

          {/* Details Section */}
          <motion.section
            className="relative min-h-screen bg-gray-950 px-6 py-20"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    {currentProduct.detailsSection.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {currentProduct.detailsSection.description}
                  </p>

                  <div className="space-y-4">
                    {currentProduct.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500" />
                        <span className="text-white font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="relative h-96 md:h-96 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  style={{
                    background: currentProduct.gradient,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <p className="text-sm opacity-75 mb-2">Product Image</p>
                      <p className="text-2xl font-bold">{currentProduct.name}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Freshness Section */}
          <motion.section
            className="relative min-h-screen bg-gray-900 px-6 py-20 flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-6xl md:text-7xl font-bold mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {currentProduct.freshnessSection.title}
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                {currentProduct.freshnessSection.description}
              </motion.p>
            </div>
          </motion.section>

          {/* Stats Section */}
          <motion.section
            className="relative py-20 px-6 bg-gray-950"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-8">
                {currentProduct.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-2">
                      {stat.val}
                    </div>
                    <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Buy Now Section */}
          <motion.section
            className="relative min-h-screen bg-black px-6 py-20 flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="max-w-3xl mx-auto w-full">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-6xl md:text-7xl font-bold mb-4">Order Now</h2>
                <p className="text-gray-400 text-lg">
                  Freshness delivered to your doorstep
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border border-white/10 mb-12"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-2">
                    {currentProduct.buyNowSection.price}
                  </div>
                  <p className="text-gray-400">{currentProduct.buyNowSection.unit}</p>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-white font-semibold mb-3">Processing</h3>
                    <div className="flex flex-wrap gap-3">
                      {currentProduct.buyNowSection.processingParams.map((param, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-orange-500/20 border border-orange-400/50 text-orange-300 rounded-full text-sm font-medium"
                        >
                          {param}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <h3 className="text-white font-semibold mb-2">Delivery Promise</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {currentProduct.buyNowSection.deliveryPromise}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <h3 className="text-white font-semibold mb-2">Return Policy</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {currentProduct.buyNowSection.returnPolicy}
                    </p>
                  </div>
                </div>

                <motion.button
                  className="w-full py-4 px-6 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Cart
                </motion.button>
              </motion.div>

              <motion.p
                className="text-center text-gray-500 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Free shipping on orders over ₹500 • No questions asked returns
              </motion.p>
            </div>
          </motion.section>

          {/* Next Product CTA */}
          {currentIndex < products.length - 1 && (
            <motion.section
              className="relative min-h-screen px-6 py-20 flex items-center justify-center overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="max-w-4xl mx-auto w-full text-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-500 mb-4 uppercase tracking-widest text-sm">
                    Next Flavor
                  </p>
                  <h2 className="text-6xl md:text-7xl font-bold mb-4">
                    {products[(currentIndex + 1) % products.length].name}
                  </h2>
                  <p className="text-2xl text-gray-400 mb-12">
                    {products[(currentIndex + 1) % products.length].subName}
                  </p>

                  <motion.button
                    onClick={handleNext}
                    className="px-12 py-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold text-lg rounded-full relative group overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative">Explore {products[(currentIndex + 1) % products.length].name}</span>
                  </motion.button>
                </motion.div>
              </div>

              {/* Gradient background */}
              <div
                className="absolute inset-0 -z-10 opacity-20 blur-3xl"
                style={{
                  background: products[(currentIndex + 1) % products.length].gradient,
                }}
              />
            </motion.section>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Fixed Navigation Arrows */}
      <motion.div
        className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          onClick={handlePrev}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous product"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
      </motion.div>

      <motion.div
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          onClick={handleNext}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next product"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </motion.div>

      {/* Fixed Bottom Menu */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-3 flex-wrap justify-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {products.map((product, idx) => (
          <motion.button
            key={product.id}
            onClick={() => handleJump(idx)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              currentIndex === idx
                ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg'
                : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {product.name}
          </motion.button>
        ))}
      </motion.div>

      <Footer />
    </div>
  );
}
