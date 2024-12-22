import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

export function FeatureCard({ title, description, isSelected, onClick }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`cursor-pointer p-6 rounded-xl backdrop-blur-sm transition-all duration-300 ${
        isSelected ? 'bg-green-500/10 border-green-500' : 'bg-white/5 hover:bg-white/10'
      } border border-white/10`}
    >
      <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}