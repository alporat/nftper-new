'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureButtonProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  onClick: () => void;
}

export function FeatureButton({ icon: Icon, title, description, color, onClick }: FeatureButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`p-9  rounded-xl bg-gradient-to-br ${color} backdrop-blur-sm 
        border border-white/10 text-left transition-all duration-300 w-full`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon className="w-12 h-12 mb-4" />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400  ">{description}</p>
    </motion.button>
  );
}