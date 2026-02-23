'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Product } from '@/data/products';

interface ProductTextOverlaysProps {
  product: Product;
}

export default function ProductTextOverlays({ product }: ProductTextOverlaysProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  // Create transform values for each section fade
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.35, 0.5], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6, 0.75], [0, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.65, 0.85, 1], [0, 1, 0]);

  const yOffset1 = useTransform(scrollYProgress, [0, 0.15], [50, 0]);
  const yOffset2 = useTransform(scrollYProgress, [0.15, 0.35], [50, 0]);
  const yOffset3 = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);
  const yOffset4 = useTransform(scrollYProgress, [0.65, 0.9], [50, 0]);

  return (
    <div ref={containerRef} className="relative pointer-events-none">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: yOffset1 }}
        className="fixed inset-0 flex flex-col items-center justify-center text-center z-10"
      >
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-4">
          {product.section1.title}
        </h1>
        <p className="text-2xl md:text-3xl text-white/80 font-light">
          {product.section1.subtitle}
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: yOffset2 }}
        className="fixed inset-0 flex flex-col items-center justify-center text-center z-10"
      >
        <h2 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
          {product.section2.title}
        </h2>
        <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light">
          {product.section2.subtitle}
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: yOffset3 }}
        className="fixed inset-0 flex flex-col items-center justify-center text-center z-10"
      >
        <h2 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
          {product.section3.title}
        </h2>
        <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light">
          {product.section3.subtitle}
        </p>
      </motion.div>

      {/* Section 4 */}
      <motion.div
        style={{ opacity: opacity4, y: yOffset4 }}
        className="fixed inset-0 flex flex-col items-center justify-center text-center z-10"
      >
        <h2 className="text-6xl md:text-7xl font-bold tracking-tight">
          {product.section4.title}
        </h2>
      </motion.div>
    </div>
  );
}
