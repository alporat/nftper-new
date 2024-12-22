import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Bot, ListChecks, Zap } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  
  const buttons = [
    {
      path: '/biddingbot',
      icon: Bot,
      title: 'Bidding Bot',
      description: 'Automated NFT bidding with smart price detection',
      color: 'from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30',
    },
    {
      path: '/listingbot',
      icon: ListChecks,
      title: 'Listing Bot',
      description: 'List your NFTs across multiple marketplaces',
      color: 'from-green-500/20 to-green-600/20 hover:from-green-500/30 hover:to-green-600/30',
    },
    {
      path: '/extremebidding',
      icon: Zap,
      title: 'Extreme Bidding',
      description: 'Advanced features for professional traders',
      color: 'from-purple-500/20 to-purple-600/20 hover:from-purple-500/30 hover:to-purple-600/30',
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Choose Your Trading Bot</h1>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
        {buttons.map(({ path, icon: Icon, title, description, color }) => (
          <motion.button
            key={path}
            onClick={() => router.push(path)}
            className={`p-8 rounded-xl bg-gradient-to-br ${color} backdrop-blur-sm 
              border border-white/10 text-left transition-all duration-300`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Icon className="w-12 h-12 mb-4" />
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-400">{description}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}