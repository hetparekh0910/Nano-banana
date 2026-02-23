'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, motion } from 'framer-motion';
import { Product } from '@/data/products';

interface ProductBottleScrollProps {
  product: Product;
}

export default function ProductBottleScroll({ product }: ProductBottleScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [frameCount, setFrameCount] = useState(80);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // Determine frame count based on product
  useEffect(() => {
    if (product.id === 'mango') {
      setFrameCount(80);
    } else {
      setFrameCount(59);
    }
  }, [product.id]);

  // Load all images
  useEffect(() => {
    const loadImages = () => {
      const images: HTMLImageElement[] = [];
      let loaded = 0;

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const paddedIndex = String(i).padStart(3, '0');

        // Determine the filename pattern based on product
        let filename = '';
        if (product.id === 'mango') {
          filename = `1_mango_flavored_202602231515_2cl6y_${paddedIndex}.jpg`;
        } else if (product.id === 'orange') {
          filename = `orange_${paddedIndex}.jpg`;
        } else if (product.id === 'pomegranate') {
          filename = `pomo_${paddedIndex}.jpg`;
        }

        img.src = `${product.folderPath}/${filename}`;

        img.onload = () => {
          loaded++;
          setImagesLoaded(loaded);
        };

        img.onerror = () => {
          console.warn(`Failed to load: ${filename}`);
          loaded++;
          setImagesLoaded(loaded);
        };

        images.push(img);
      }

      imagesRef.current = images;
    };

    loadImages();
  }, [frameCount, product.id, product.folderPath]);

  // Draw canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || imagesRef.current.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to fill entire viewport
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Animation loop
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      const frameIndex = Math.min(
        Math.floor(progress * frameCount),
        frameCount - 1
      );

      const img = imagesRef.current[frameIndex];
      if (img && img.complete && img.naturalWidth > 0) {
        const imgAspect = img.naturalWidth / img.naturalHeight;
        const canvasAspect = window.innerWidth / window.innerHeight;

        let drawWidth = window.innerWidth;
        let drawHeight = window.innerHeight;
        let offsetX = 0;
        let offsetY = 0;

        // Cover mode - image fills entire viewport
        if (imgAspect > canvasAspect) {
          drawHeight = window.innerWidth / imgAspect;
          offsetY = (window.innerHeight - drawHeight) / 2;
        } else {
          drawWidth = window.innerHeight * imgAspect;
          offsetX = (window.innerWidth - drawWidth) / 2;
        }

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    });

    return () => {
      unsubscribe();
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [scrollYProgress, frameCount]);

  return (
    <div
      ref={containerRef}
      className="relative h-[500vh] w-full"
      style={{
        background: product.gradient,
      }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />

        {imagesLoaded < frameCount && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur z-50">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-white text-sm">
                Loading {imagesLoaded} / {frameCount}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
