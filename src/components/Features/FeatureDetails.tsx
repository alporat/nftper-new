import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { features } from '../../data/features';
import { FeatureId } from '../../types/features';

interface FeatureDetailsProps {
  feature: string | null;
  onClose: () => void;
}

export function FeatureDetails({ feature, onClose }: FeatureDetailsProps) {
  const content = feature ? features.find(f => f.id === feature) : null;

  return (
    <AnimatePresence>
      {feature && content && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10 relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
          <h3 className="text-2xl font-bold text-white mb-4">{content.title}</h3>
          <p className="text-gray-400 mb-6">{content.detailedDescription}</p>
          <div className="grid grid-cols-2 gap-4">
            {content.features.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}