'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface BouquetSectionProps {
  onComplete: () => void;
}

export default function BouquetSection({ onComplete }: BouquetSectionProps) {
  const [isLeaving, setIsLeaving] = useState(false);

  const handleBouquetClick = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl mx-auto text-center"
    >
      {/* Header */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-great-vibes text-rose-700 mb-4">
          🌹
        </h1>
        <h2 className="text-3xl md:text-4xl font-playfair text-rose-600 mb-4">
          A Special Surprise for You
        </h2>
        <p className="text-lg text-rose-500 font-playfair">
          Hajra, my sweet baby 💕
        </p>
      </motion.div>

      {/* Bouquet Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 1, type: "spring" }}
        className="max-w-2xl mx-auto"
      >
        <motion.div
          whileHover={{ 
            scale: 1.02, 
            y: -5,
          }}
          className="bg-white/90 backdrop-blur-sm border-2 border-rose-200 rounded-3xl p-8 shadow-xl"
        >
          {/* Bouquet Image */}
          <AnimatePresence mode="wait">
            {!isLeaving && (
              <motion.div
                key="bouquet"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 10, y: -50 }}
                transition={{ 
                  delay: 1, 
                  duration: 0.8, 
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="mb-6 cursor-pointer"
                onClick={handleBouquetClick}
              >
                <div className="w-80 h-80 mx-auto relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/bouquet.jpg"
                    alt="Beautiful bouquet for Hajra"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Sparkle effects */}
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-4 right-4 text-2xl"
                  >
                    ✨
                  </motion.div>
                  <motion.div
                    animate={{ 
                      rotate: -360,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute bottom-4 left-4 text-2xl"
                  >
                    💖
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-playfair text-rose-700 mb-4 leading-relaxed">
              Here&apos;s a sweet bouquet for my sweet baby
            </h3>
            <p className="text-lg text-rose-600 font-playfair leading-relaxed mb-6">
              Just like these beautiful flowers, you bring beauty and fragrance to my life
            </p>
            
            {!isLeaving && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBouquetClick}
                className="elegant-button"
              >
                Click to Continue 💝
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating rose petals */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="fixed inset-0 pointer-events-none z-0"
      >
        <motion.div
          animate={{ 
            y: [-20, -100],
            x: [0, 20],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-rose-300/40 text-2xl"
        >
          🌸
        </motion.div>
        <motion.div
          animate={{ 
            y: [-20, -120],
            x: [0, -30],
            rotate: [0, -360]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-32 right-20 text-rose-300/40 text-2xl"
        >
          🌺
        </motion.div>
        <motion.div
          animate={{ 
            y: [-20, -80],
            x: [0, 15],
            rotate: [0, 180]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-32 left-20 text-rose-300/40 text-2xl"
        >
          🌷
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 