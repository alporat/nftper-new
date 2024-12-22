import React from 'react';
import { Zap, Target, Shield, Cpu } from 'lucide-react';
import { PageContainer } from '../components/shared/PageContainer';
import { FeatureGrid } from '@/components/shared/feature-grid';

export function ExtremeBidding() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Speed',
      description: 'Ultra-fast execution for competitive markets',
    },
    {
      icon: Target,
      title: 'Precision Sniping',
      description: 'Advanced tools for precise market timing',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Sophisticated protection against market volatility',
    },
    {
      icon: Cpu,
      title: 'Custom Algorithms',
      description: 'Personalized trading strategies for your needs',
    },
  ];

  return (
    <PageContainer
      title="Extreme Bidding"
      description="Professional-grade trading tools with maximum efficiency and advanced features"
    >
      <FeatureGrid features={features} />
    </PageContainer>
  );
}