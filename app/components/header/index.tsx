'use client';

import { Drama } from 'lucide-react';
import Link from 'next/link';
import Notification from '../notification';

const Header = () => {
  return (
    <header className='sticky top-0 z-[10] bg-card shadow-sm'>
      <div className='container flex items-center justify-between gap-8 py-4'>
        <Link
          href='/'
          className='flex w-fit items-center gap-2 text-2xl font-medium transition duration-700 animate-in zoom-in-75 slide-in-from-top-10'
        >
          <Drama className='text-primary' />
          Incognito
        </Link>

        <Notification />
      </div>
    </header>
  );
};

export default Header;
