import React from 'react';
import { Feature } from '../../types/features';
import { FeatureCard } from './FeatureCard';

interface FeatureListProps {
  features: Feature[];
  selectedFeature: string | null;
  onFeatureSelect: (featureId: string) => void;
}

export function FeatureList({ features, selectedFeature, onFeatureSelect }: FeatureListProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          title={feature.title}
          description={feature.description}
          isSelected={selectedFeature === feature.id}
          onClick={() => onFeatureSelect(feature.id)}
        />
      ))}
    </div>
  );
}