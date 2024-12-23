import type { Metadata } from 'next';
import Nav from "@/components/Navigation/tabbed-nav"
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'NFTPER - Advanced NFT Trading Tools',
  description: 'Professional NFT trading tools with bidding bots and listing automation',
  keywords: 'OpenSea, Bot, Offer Bot, OpenSea Bot, Bidding Bot, Bid Bot, OpenSea Offer Bot, OpenSea Bidding Bot',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className="min-h-screen bg-zinc-900 text-white flex flex-col items-center  ">

        <Nav/>
        <main className="max-w-6xl mx-auto px-4 py-8 ">
          
          {children}

        </main>
      </body>
    </html>
  );
}
