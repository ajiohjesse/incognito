'use client';

import { Send } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MessageButton = () => {
  const path = usePathname();
  const hidden =
    path.includes('/send') ||
    path.includes('/account/threads') ||
    path.includes('/account/messages');

  if (hidden) return null;

  return (
    <Link
      href='/send'
      className='fixed bottom-6 right-6 z-50 grid aspect-square w-[50px] place-items-center rounded-full bg-primary text-white shadow-lg transition hover:scale-110'
    >
      <span className='sr-only'>send a message</span>
      <Send />
    </Link>
  );
};

export default MessageButton;
