import React from 'react';
import { motion } from 'framer-motion';

interface PageContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function PageContainer({ title, description, children }: PageContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
      {children}
    </motion.div>
  );
}