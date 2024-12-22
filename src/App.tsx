import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Navigation } from './components/Navigation/navigation';
import Home from './pages/Home';
import BiddingBot from './pages/BiddingBot';
import ListingBot from './pages/ListingBot';
import ExtremeBidding from './pages/ExtremeBidding';
import TabbedNav from './components/Navigation/tabbed-nav';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <TabbedNav />
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biddingbot" element={<BiddingBot />} />
            <Route path="/listingbot" element={<ListingBot />} />
            <Route path="/extremebidding" element={<ExtremeBidding />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}