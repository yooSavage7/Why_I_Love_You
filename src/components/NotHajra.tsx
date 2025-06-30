'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NotHajra() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center max-w-2xl mx-auto"
    >
      <motion.div
        initial={{ scale: 0.8, rotate: 5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="mb-8"
      >
        {/* Faded Rose Image */}
        <div className="relative mb-8">
          <div className="w-48 h-48 mx-auto relative">
            <Image
              src="/assets/rose.jpg"
              alt="Faded Rose"
              fill
              className="object-cover rounded-full shadow-2xl opacity-40 grayscale"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200/30 to-gray-400/30"></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-5xl font-great-vibes text-gray-600 mb-6">
          Oh no! 💌
        </h1>
        <p className="text-xl text-gray-500 font-playfair mb-4">
          These beautiful reasons are meant only for Hajra
        </p>
        <p className="text-lg text-gray-400 font-playfair">
          This is a special love letter created just for her
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.reload()}
          className="elegant-button-secondary"
        >
          Go Back
        </motion.button>
      </motion.div>

      {/* Sad flower illustrations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 flex justify-center space-x-4"
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-3xl text-gray-400"
        >
          🌸
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="text-3xl text-gray-400"
        >
          🌺
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 3, -3, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="text-3xl text-gray-400"
        >
          🌷
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 