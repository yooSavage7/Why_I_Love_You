'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import IdentityConfirmation from '@/components/IdentityConfirmation';
import LoveReasons from '@/components/LoveReasons';
import NotHajra from '@/components/NotHajra';
import BouquetSurprise from '@/components/BouquetSurprise';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<'home' | 'identity' | 'reasons' | 'bouquet-section' | 'bouquet-surprise'>('home');
  const [isHajra, setIsHajra] = useState<boolean | null>(null);

  const handleIdentityConfirm = () => {
    setCurrentStep('reasons');
  };

  const handleNotHajra = () => {
    setIsHajra(false);
  };

  const handleYesClick = () => {
    setIsHajra(true);
    setCurrentStep('identity');
  };

  const handleBouquetSectionComplete = () => {
    setCurrentStep('bouquet-surprise');
  };

  const handleBouquetSurpriseComplete = () => {
    // Could add a final completion step here if needed
    console.log('Love letter completed!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 text-rose-200/20 text-6xl">
          🌸
        </div>
        <div className="absolute top-40 right-32 text-rose-200/20 text-4xl">
          🌺
        </div>
        <div className="absolute bottom-32 left-32 text-rose-200/20 text-5xl">
          🌷
        </div>
        <div className="absolute bottom-20 right-20 text-rose-200/20 text-6xl">
          🌹
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {currentStep === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="mb-12"
              >
                <h1 className="text-5xl md:text-7xl font-great-vibes text-rose-700 mb-6">
                  🌹
                </h1>
                <h2 className="text-4xl md:text-5xl font-playfair text-rose-600 mb-6">
                  A Love Letter for My Hajra
                </h2>
                <p className="text-xl text-rose-500 font-playfair mb-8">
                  My dearest, there is a special message waiting just for you
                </p>
              </motion.div>

              {/* Rose Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                className="mb-12"
              >
                <div className="w-80 h-80 mx-auto relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/hajra/roses1.jpg"
                    alt="Beautiful rose"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </motion.div>

              {/* Question */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mb-12"
              >
                <h3 className="text-3xl md:text-4xl font-playfair text-rose-700 mb-8">
                  Is this Hajra?
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleYesClick}
                    className="elegant-button"
                  >
                    Yes, that&apos;s me 💕
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNotHajra}
                    className="elegant-button-secondary"
                  >
                    Nah, not Hajra
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {currentStep === 'identity' && (
            <IdentityConfirmation onConfirmed={handleIdentityConfirm} />
          )}

          {currentStep === 'reasons' && (
            <LoveReasons onComplete={handleBouquetSectionComplete} />
          )}

          {currentStep === 'bouquet-surprise' && (
            <BouquetSurprise onComplete={handleBouquetSurpriseComplete} />
          )}
        </AnimatePresence>

        {/* Not Hajra Message */}
        <AnimatePresence>
          {isHajra === false && (
            <NotHajra />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
