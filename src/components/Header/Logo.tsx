import React from 'react';
import { Layers } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex justify-center items-center mb-6">
      <Layers className="w-12 h-12 text-green-500 mr-4" />
      <h1 className="text-4xl font-bold">
        NFT<span className="text-green-500">PER</span>
      </h1>
    </div>
  );
}