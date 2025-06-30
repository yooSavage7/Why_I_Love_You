'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { loveReasons } from '@/data/reasons';
import BouquetSection from './BouquetSection';

interface LoveReasonsProps {
  onComplete?: () => void;
}

export default function LoveReasons({ onComplete }: LoveReasonsProps) {
  const [currentReasonIndex, setCurrentReasonIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [showBouquetSection, setShowBouquetSection] = useState(false);

  useEffect(() => {
    // Show the button after the first reason appears
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleNextReason = () => {
    if (currentReasonIndex < loveReasons.length - 1) {
      setCurrentReasonIndex(prev => prev + 1);
    } else {
      // Show bouquet section when all reasons are revealed
      setShowBouquetSection(true);
    }
  };

  const currentReason = loveReasons[currentReasonIndex];
  const isLastReason = currentReasonIndex === loveReasons.length - 1;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const reasonVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.9,
      transition: {
        duration: 0.3,
      }
    }
  };

  // If bouquet section is shown, render it
  if (showBouquetSection) {
    return <BouquetSection onComplete={onComplete || (() => {})} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-great-vibes text-rose-700 mb-4">
          🌹
        </h1>
        <h2 className="text-3xl md:text-4xl font-playfair text-rose-600 mb-4">
          Reasons Why I Love You
        </h2>
        <p className="text-lg text-rose-500 font-playfair">
          Hajra, you make every day magical 💕
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReason.id}
            variants={reasonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-2xl mx-auto text-center mb-8"
          >
            {/* Reason Card */}
            <motion.div
              whileHover={{ 
                scale: 1.02, 
                y: -5,
              }}
              className="bg-white/90 backdrop-blur-sm border-2 border-rose-200 rounded-3xl p-8 shadow-xl"
            >
              {/* Emoji */}
              <div className="flex items-center justify-center mb-6">
                <span className="text-5xl">{currentReason.emoji}</span>
              </div>

              {/* Image if available */}
              {currentReason.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mb-8"
                >
                  <div className="w-64 h-64 mx-auto relative rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={currentReason.image}
                      alt={currentReason.text}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </motion.div>
              )}

              {/* Reason Text */}
              <h3 className="text-2xl md:text-3xl font-playfair text-rose-700 mb-4 leading-relaxed">
                {currentReason.text}
              </h3>

              {/* Description */}
              {currentReason.description && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-lg text-rose-600 font-playfair leading-relaxed"
                >
                  {currentReason.description}
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Button */}
        <AnimatePresence>
          {showButton && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNextReason}
              className="elegant-button"
            >
              {isLastReason ? "I want more ❤️" : "Show Me Another Reason 💖"}
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Visual Fillers - Couple silhouettes and garden images */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="fixed inset-0 pointer-events-none z-0"
      >
        {/* Garden background elements */}
        <div className="absolute top-10 left-10 text-rose-200/30 text-4xl">
          🌸
        </div>
        <div className="absolute top-20 right-20 text-rose-200/30 text-3xl">
          🌺
        </div>
        <div className="absolute bottom-20 left-20 text-rose-200/30 text-3xl">
          🌷
        </div>
        <div className="absolute bottom-10 right-10 text-rose-200/30 text-4xl">
          🌹
        </div>
      </motion.div>
    </motion.div>
  );
} 