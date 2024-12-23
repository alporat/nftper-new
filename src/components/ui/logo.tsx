import { Layers } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-start p-1">
      <Layers className="w-8 h-8 text-green-500 mr-2" />
      <span className="text-xl font-bold">
        NFT<span className="text-green-500">PER</span>
      </span>
    </div>
  );
}
