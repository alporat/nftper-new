import React from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation for App Router
import Link from 'next/link'; // Import Link for better navigation
import TabbedNav from './components/Navigation/tabbed-nav';

export default function App() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <TabbedNav />
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Using Link component is preferred for client-side navigation */}
        <Link href="/" className="px-4 py-2 mr-2 bg-blue-600 rounded hover:bg-blue-700">
          Home
        </Link>
        <Link href="/biddingbot" className="px-4 py-2 mr-2 bg-blue-600 rounded hover:bg-blue-700">
          Bidding Bot
        </Link>
        <Link href="/listingbot" className="px-4 py-2 mr-2 bg-blue-600 rounded hover:bg-blue-700">
          Listing Bot
        </Link>
        <Link href="/extremebidding" className="px-4 py-2 mr-2 bg-blue-600 rounded hover:bg-blue-700">
          Extreme Bidding
        </Link>
      </div>
    </div>
  );
}