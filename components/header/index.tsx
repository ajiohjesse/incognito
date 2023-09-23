'use client';

import { Drama } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-xl z-[10]">
      <div className="container py-4">
        <motion.p
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-2xl flex items-center gap-2"
        >
          <Drama className="text-primary" />
          Incognito
        </motion.p>
      </div>
    </header>
  );
};

export default Header;
