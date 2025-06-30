'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface BouquetSurpriseProps {
  onComplete?: () => void;
}

export default function BouquetSurprise({ onComplete }: BouquetSurpriseProps) {
  const [currentStep, setCurrentStep] = useState<'bouquet' | 'message' | 'final'>('bouquet');

  useEffect(() => {
    // Show message after 5 seconds
    const messageTimer = setTimeout(() => {
      setCurrentStep('message');
    }, 5000);

    // Show final message after 10 seconds
    const finalTimer = setTimeout(() => {
      setCurrentStep('final');
      setTimeout(() => {
        onComplete?.();
      }, 4000);
    }, 10000);

    return () => {
      clearTimeout(messageTimer);
      clearTimeout(finalTimer);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 relative overflow-hidden">
      {/* Subtle floating petals in background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [-20, -100],
              x: [0, Math.random() * 50 - 25],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
            className="absolute text-2xl text-rose-200/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {currentStep === 'bouquet' && (
            <motion.div
              key="bouquet"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, type: "spring" }}
              className="text-center"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mb-8"
              >
                <div className="w-80 h-80 mx-auto relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/bouquet.jpg"
                    alt="Beautiful bouquet"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl md:text-5xl font-great-vibes text-rose-700 mb-4"
              >
                🌹
              </motion.h1>
            </motion.div>
          )}

          {currentStep === 'message' && (
            <motion.div
              key="message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-white/90 backdrop-blur-sm border-2 border-rose-200 rounded-3xl p-8 shadow-xl mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-playfair text-rose-700 mb-4 leading-relaxed">
                  Even these roses aren&apos;t enough to show how much I love you Hajra
                </h2>
                <p className="text-xl font-playfair text-rose-600 leading-relaxed">
                  My love for you is deeper than the ocean and higher than the stars ✨
                </p>
              </motion.div>

              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-6xl"
              >
                💕
              </motion.div>
            </motion.div>
          )}

          {currentStep === 'final' && (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="text-center"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-8xl mb-8"
              >
                💕
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-great-vibes text-rose-700 mb-4">
                I Love You Forever, Hajra
              </h1>
              <p className="text-2xl font-playfair text-rose-600">
                You are my everything 💖
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 