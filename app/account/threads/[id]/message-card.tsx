'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Skeleton } from '@/app/components/ui/skeleton';
import useCurrentUser from '@/hooks/useCurrentUser';
import { cn, formatCustomDate } from '@/lib/utils';
import { CheckCheck } from 'lucide-react';
import { useEffect } from 'react';

interface Props {
  message: ThreadMessage;
}

const MessageCard = ({
  message: { _id, createdAt, message, sender },
}: Props) => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const { user } = useCurrentUser();
  if (!user) return null;

  return (
    <Card
      className={cn(
        'relative w-[min(80%,900px)] border-2 border-white shadow-md animate-in zoom-in-50 slide-in-from-bottom-32',
        sender === user.userId
          ? 'self-end  border-r-primary'
          : 'border-l-purple-700',
      )}
    >
      <CardHeader>
        <CardTitle
          className={cn(
            'text-lg',
            sender === user.userId ? 'text-primary' : 'text-purple-700',
          )}
        >
          {sender === user.userId ? 'You' : 'Anonymous'}
        </CardTitle>
        <CardDescription className=''>
          Sent: {formatCustomDate(createdAt)}
        </CardDescription>
      </CardHeader>
      <CardContent className=''>{message}</CardContent>

      <CheckCheck className='absolute bottom-2 right-2 h-4 w-4 text-primary' />
    </Card>
  );
};

export default MessageCard;

export const MessageCardSkeleton = () => {
  return (
    <Card className='relative w-[min(80%,900px)] border-2 border-white shadow-md odd:border-l-purple-700 even:self-end even:border-r-primary'>
      <CardHeader>
        <CardTitle className='space-y-2'>
          <Skeleton className='h-4 w-[40%]' />
          <Skeleton className='h-4 w-[60%]' />
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-2'>
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-[50%]' />
      </CardContent>
    </Card>
  );
};
