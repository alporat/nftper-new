import React from 'react';
import { Bot, Gauge, Coins, Cpu } from 'lucide-react';
import { PageContainer } from '../components/shared/PageContainer';
import { FeatureGrid } from '@/components/shared/feature-grid';

 export default function BiddingBot() {
  const features = [
    {
      icon: Bot,
      title: 'Smart Bidding',
      description: 'AI-powered bidding strategies that adapt to market conditions',
    },
    {
      icon: Gauge,
      title: 'Real-time Analytics',
      description: 'Live market data and performance metrics',
    },
    {
      icon: Coins,
      title: 'Price Optimization',
      description: 'Automatic price adjustment based on market trends',
    },
    {
      icon: Cpu,
      title: 'Advanced Automation',
      description: 'Set and forget with intelligent automation features',
    },
  ];

  return (
    <PageContainer
      title="Bidding Bot"
      description="Automate your NFT bidding with advanced AI-powered strategies and real-time market analysis"
    >
      <FeatureGrid features={features} />
    </PageContainer>
  );
}