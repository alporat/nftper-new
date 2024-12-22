import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface FeatureDetailsProps {
  feature: string | null;
  onClose: () => void;
}

const featureContent = {
  bidding: {
    title: "Bidding Bot",
    description: "Our advanced bidding bot uses AI-powered algorithms to analyze market trends and place optimal bids on NFTs. Features include automated bidding strategies, price threshold settings, and real-time market analysis.",
    features: [
      "Smart bid optimization",
      "Automatic price tracking",
      "Gas fee optimization",
      "Multi-wallet support"
    ]
  },
  listing: {
    title: "Listing Bot",
    description: "Automate your NFT listings across multiple marketplaces with our intelligent listing bot. Set dynamic pricing strategies and let the bot handle the rest.",
    features: [
      "Cross-marketplace listing",
      "Dynamic pricing",
      "Bulk listing capabilities",
      "Scheduled listings"
    ]
  },
  extreme: {
    title: "Extreme Bidding",
    description: "Take your NFT trading to the next level with our extreme bidding features. Designed for professional traders who need advanced tools and maximum efficiency.",
    features: [
      "Lightning-fast execution",
      "Advanced sniping tools",
      "Custom bidding strategies",
      "Priority transaction handling"
    ]
  }
};

export function FeatureDetails({ feature, onClose }: FeatureDetailsProps) {
  const content = feature ? featureContent[feature as keyof typeof featureContent] : null;

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
          <p className="text-gray-400 mb-6">{content.description}</p>
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