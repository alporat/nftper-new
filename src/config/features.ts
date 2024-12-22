import { Bot, Gauge, Coins, Cpu, ListChecks, Globe, BarChart3, Clock, Zap, Target, Shield,HandCoins,Link,Smartphone,CircleX, TicketSlash } from 'lucide-react';
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
    title: 'Instant outlisting',
    description: 'Instantly list lower than people that list under you',
  },
  {
    icon: Globe,
    title: 'Predicted listing',
    description: "If you are bidding on a collection and expect to get an NFT from there, you can set up a predicted auto listing which will automatically list it with the given min/max at the given trait's floor price",
  },
  {
    icon: BarChart3,
    title: 'Outlist all the time',
    description: 'Even if someone outlists you (lists lower than you) still outlist other NFTs that are in the given min/max range',
  },
  {
    icon: Clock,
    title: 'Cloud based',
    description: 'No downloads or VPS required, access our web client from any browser with MetaMask (yes, even mobile)',
  },
];

export const extremeBiddingFeatures: FeatureConfig[] = [
  {
    icon: Zap,
    title: 'Insanely fast offers',
    description: 'Send up to 45 token offers per second (150k+ per hour, contact us for more)',
  },
  {
    icon: Target,
    title: 'Instant counter bidding',
    description: 'Instantly outbid if someone sends a higher offer',
  },
  {
    icon: CircleX,
    title: 'Auto cancelling',
    description: 'After each outbid, cancel the previous offer sent',
  },
  {
    icon: TicketSlash,
    title: 'Includes Bidding for free',
    description: 'If you get extreme, you also get our Bidding bot for free (we can make the underlined parts clickable link-like to open the bidding section)',
  },
];