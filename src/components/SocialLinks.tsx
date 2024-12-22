import React from 'react';
import { motion } from 'framer-motion';
import { Discord, Twitter, BookOpen, User } from 'lucide-react';

export function SocialLinks() {
  const links = [
    { icon: <Discord className="w-6 h-6" />, href: "#" },
    { icon: <Twitter className="w-6 h-6" />, href: "#" },
    { icon: <BookOpen className="w-6 h-6" />, href: "#" },
    { icon: <User className="w-6 h-6" />, href: "#" },
  ];

  return (
    <div className="flex justify-center space-x-8 mt-16">
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}