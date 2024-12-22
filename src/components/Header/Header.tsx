import React from 'react';
import { Logo } from './Logo';

export function Header() {
  return (
    <div className="text-center mb-16">
      <Logo />
      <p className="text-gray-400 text-lg">
        Automated NFT flipping. Click on the product you want to check out
      </p>
    </div>
  );
}