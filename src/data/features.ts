import { Bot, Zap, TrendingUp, ShieldCheck } from 'lucide-react';
import { FeatureConfig } from '@/types/features';

export const sampleFeatures: FeatureConfig[] = [
  {
    icon: Bot,
    title: "Automated NFT Flipping",
    description: "Our bots scan the market 24/7 to identify profitable NFT flipping opportunities, so you never miss out on a great deal."
  },
  {
    icon: Zap,
    title: "Lightning-Fast Transactions",
    description: "Execute trades at lightning speed, giving you an edge over manual traders in the competitive NFT market."
  },
  {
    icon: TrendingUp,
    title: "Market Trend Analysis",
    description: "Stay ahead of the curve with our advanced algorithms that analyze market trends and predict upcoming hot collections."
  },
  {
    icon: ShieldCheck,
    title: "Secure and Reliable",
    description: "Our bots operate with bank-grade security measures, ensuring your assets and transactions are always protected."
  }
];

