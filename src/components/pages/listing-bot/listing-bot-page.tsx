"use client"
import { PageContainer } from '@/components/shared/page-container';
import { FeatureGrid } from '@/components/shared/feature-grid';
import { listingBotFeatures } from '@/config/features';
import { usePathname } from 'next/navigation';
import { useStore } from '@/app/hooks/path';
import { useEffect } from 'react';

export function ListingBotPage() {
  const pathname = usePathname();  // Gets the current path

  const setIshome = useStore((state) => state.setIshome)

  useEffect(() => {
    pathname === "/listing" ? setIshome(true) : setIshome(true)
  }, [pathname]); 


  return (
    <PageContainer
      title="Listing Bot"
      description="Streamline your NFT listings with automated multi-marketplace support and dynamic pricing"
    >
      <FeatureGrid features={listingBotFeatures} />
    </PageContainer>
  );
}