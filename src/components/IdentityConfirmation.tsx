'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface IdentityConfirmationProps {
  onConfirmed: () => void;
}

export default function IdentityConfirmation({ onConfirmed }: IdentityConfirmationProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showError, setShowError] = useState(false);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setShowError(false);
    // Calendar will close automatically on selection
  };

  const handleSubmit = () => {
    if (!selectedDate) {
      setShowError(true);
      return;
    }

    // Check if the date is February 7th, 2023
    const isCorrectDate = 
      selectedDate.getDate() === 7 && 
      selectedDate.getMonth() === 1 && // February is month 1 (0-indexed)
      selectedDate.getFullYear() === 2023;

    if (isCorrectDate) {
      onConfirmed();
    } else {
      setShowError(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-md mx-auto text-center"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-great-vibes text-rose-700 mb-4">
          💝
        </h2>
        <h3 className="text-2xl md:text-3xl font-playfair text-rose-600 mb-6">
          Answer this section to confirm your identity
        </h3>
        <p className="text-lg text-rose-500 font-playfair font-semibold mb-8">
          When did we meet?
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-6"
      >
        <div className="relative">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MMMM d, yyyy"
            placeholderText="Select a date..."
            className="w-full px-4 py-3 text-center text-lg font-playfair font-semibold text-rose-600 border-2 border-rose-600 rounded-full bg-white/90 backdrop-blur-sm focus:outline-none focus:border-rose-700 focus:ring-2 focus:ring-rose-200 transition-all duration-300"
            calendarClassName="romantic-calendar"
            popperClassName="romantic-popper"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={15}
            maxDate={new Date()}
            popperPlacement="bottom"
            closeOnScroll={true}
            shouldCloseOnSelect={true}
          />
        </div>
      </motion.div>

      {showError && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-lg"
        >
          <p className="text-rose-600 text-sm font-playfair">
            {!selectedDate 
              ? "Please select a date." 
              : "That's not quite right. Try again! 💕"
            }
          </p>
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSubmit}
        className="elegant-button"
      >
        Confirm 💖
      </motion.button>

      <style jsx global>{`
        .romantic-calendar {
          font-family: 'Georgia', serif !important;
          border: 2px solid #f9a8d4 !important;
          border-radius: 16px !important;
          box-shadow: 0 10px 25px rgba(244, 114, 182, 0.2) !important;
        }
        
        .romantic-calendar .react-datepicker__header {
          background: linear-gradient(135deg, #f9a8d4, #ec4899) !important;
          border-bottom: 2px solid #f9a8d4 !important;
          border-radius: 14px 14px 0 0 !important;
        }
        
        .romantic-calendar .react-datepicker__current-month {
          color: white !important;
          font-weight: 600 !important;
        }
        
        .romantic-calendar .react-datepicker__day-name {
          color: white !important;
          font-weight: 500 !important;
        }
        
        .romantic-calendar .react-datepicker__day {
          border-radius: 50% !important;
          margin: 2px !important;
          transition: all 0.2s ease !important;
        }
        
        .romantic-calendar .react-datepicker__day:hover {
          background-color: #fce7f3 !important;
          color: #ec4899 !important;
        }
        
        .romantic-calendar .react-datepicker__day--selected {
          background-color: #ec4899 !important;
          color: white !important;
        }
        
        .romantic-calendar .react-datepicker__day--keyboard-selected {
          background-color: #fce7f3 !important;
          color: #ec4899 !important;
        }
        
        .romantic-popper {
          z-index: 1000 !important;
        }
      `}</style>
    </motion.div>
  );
} 