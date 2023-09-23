'use client';

import { Drama } from 'lucide-react';

const Header = () => {
  return (
    <header className='sticky top-0 z-[10] backdrop-blur-xl'>
      <div className='container py-4'>
        <p className='flex w-fit items-center gap-2 text-2xl transition duration-700 animate-in zoom-in-75 slide-in-from-top-10'>
          <Drama className='text-primary' />
          Incognito
        </p>
      </div>
    </header>
  );
};

export default Header;
