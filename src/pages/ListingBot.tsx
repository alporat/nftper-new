import React from 'react';
import { ListChecks, Globe, BarChart3, Clock } from 'lucide-react';
import { PageContainer } from '../components/shared/PageContainer';
import { FeatureGrid } from '../components/shared/FeatureGrid';

export function ListingBot() {
  const features = [
    {
      icon: ListChecks,
      title: 'Multi-marketplace Listing',
      description: 'List your NFTs across multiple platforms simultaneously',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access worldwide marketplaces and buyers',
    },
    {
      icon: BarChart3,
      title: 'Dynamic Pricing',
      description: 'Automatic price adjustments based on market demand',
    },
    {
      icon: Clock,
      title: 'Scheduled Listings',
      description: 'Plan your listings in advance with timing optimization',
    },
  ];

  return (
    <PageContainer
      title="Listing Bot"
      description="Streamline your NFT listings with automated multi-marketplace support and dynamic pricing"
    >
      <FeatureGrid features={features} />
    </PageContainer>
  );
}