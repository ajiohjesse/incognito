'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
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
        'relative w-[min(80%,900px)] border-2 border-white shadow-md',
        sender === user.userName
          ? 'self-end  border-r-primary'
          : 'border-l-purple-700',
      )}
    >
      <CardHeader>
        <CardTitle
          className={cn(
            'text-lg',
            sender === user.userName ? 'text-primary' : 'text-purple-700',
          )}
        >
          {sender === user.userName ? 'You' : 'Anonymous'}
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
