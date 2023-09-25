'use client';

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MessageButton = () => {
  const path = usePathname();

  if (path === '/send') return null;

  return (
    <Link
      href='/send'
      className='fixed bottom-12 right-6 grid aspect-square w-[50px] place-items-center rounded-full bg-primary shadow-lg transition hover:scale-110'
    >
      <span className='sr-only'>send a message</span>
      <MessageCircle />
    </Link>
  );
};

export default MessageButton;
