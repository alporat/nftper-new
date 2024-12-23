import { Layers } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-start p-1">
      <Layers className="w-8 h-8 text-main-green mr-2" />
      <span className="text-xl font-bold">
        NFT<span className="text-main-green">PER</span>
      </span>
    </div>
  );
}
