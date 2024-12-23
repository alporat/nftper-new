'use client';

import { usePathname, useRouter,  } from 'next/navigation';
import { Bot, ListChecks, Zap } from 'lucide-react';
import Image from 'next/image'
import img from "@/images/logo.png"
import { FeatureButton } from '@/components/ui/feature-button';
import { useStore } from '@/app/hooks/path';
import {useEffect} from "react"
const features = [
  {
    path: '/bidding',
    icon: Bot,
    title: 'Bidding Bot',
    description: 'Automated NFT bidding with smart price detection',
    color: 'from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30',
  },
  {
    path: '/listing',
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
    color: 'from-yellow-500/30  hover:from-yellow-500 ',
  },
];

export function HomePage() {
  const router = useRouter();
  const pathname = usePathname();  // Gets the current path

  const setIshome = useStore((state) => state.setIshome)

  useEffect(() => {
    pathname === "/" ? setIshome(false) : setIshome(true)
  }, [pathname]); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="inline-flex items-center gap-2">
        <Image 
          src={img}
          alt="test"
          width={40}
          height={40}
          className="object-contain"
        />
        <div className="text-2xl font-bold">
          <span className="text-green-500">NFT</span>
          <span className="text-white">PER</span>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-8">Automated NFT flipping. Click on the product you want to check out</h1>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
        {features.map((feature) => (
          <FeatureButton
            key={feature.path}
            {...feature}
            onClick={() => router.push(feature.path)}
          />
        ))}
      </div>
    </div>
  );
}
