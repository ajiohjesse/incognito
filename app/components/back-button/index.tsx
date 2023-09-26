'use client';

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  return (
    <button className='flex items-center' onClick={() => router.back()}>
      <ChevronLeft className='h-4 w-4' />
      Back
    </button>
  );
};

export default BackButton;
