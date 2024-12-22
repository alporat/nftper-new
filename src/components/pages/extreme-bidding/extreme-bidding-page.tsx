"use client"
import { PageContainer } from '@/components/shared/page-container';
import { FeatureGrid } from '@/components/shared/feature-grid';
import { extremeBiddingFeatures } from '@/config/features';
import { usePathname } from 'next/navigation';
import { useStore } from '@/app/hooks/path';
import { useEffect } from 'react';

export function ExtremeBiddingPage() {
  const pathname = usePathname();  // Gets the current path

  const setIshome = useStore((state) => state.setIshome)

  useEffect(() => {
    pathname === "/bidding" ? setIshome(true) : setIshome(true)
  }, [pathname]); 


  return (
    <PageContainer
      title="Extreme Bidding"
      description="Professional-grade trading tools with maximum efficiency and advanced features"
    >
      <FeatureGrid features={extremeBiddingFeatures} />
    </PageContainer>
  );
}