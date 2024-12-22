import { Bot, Gauge, Coins, Cpu, ListChecks, Globe, BarChart3, Clock, Zap, Target, Shield,HandCoins,Link,Smartphone } from 'lucide-react';
import { FeatureConfig } from '@/types/features';

export const biddingBotFeatures: FeatureConfig[] = [
  {
    icon: HandCoins,
    title: 'Mass offers',
    description: 'Send offers to each NFT in a collection. You can also send offers to NFTs with specific traits, names, etc.',
  },
  {
    icon: Coins,
    title: 'Collection offers',
    description: 'Send collection offers based on the margin or the prices you specify; if someone bids higher, the bot will automatically outbid them',
  },
  {
    icon: Link,
    title: 'Multi-chain support',
    description: 'Send offers to collections on both Polygon Network and Ethereum Mainnet. Support for other chains are coming soon.',
  },
  {
    icon: Smartphone,
    title: 'Mobile support',
    description: 'No downloads required. Access our client by using your browser from any device with an internet connection.',
  },
];

export const listingBotFeatures: FeatureConfig[] = [
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

export const extremeBiddingFeatures: FeatureConfig[] = [
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