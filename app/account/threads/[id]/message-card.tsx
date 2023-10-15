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

interface Props {
  message: ThreadMessage;
}

const MessageCard = ({
  message: { _id, createdAt, message, reciever, sender, threadId },
}: Props) => {
  const { user } = useCurrentUser();
  if (!user) return null;

  return (
    <Card
      className={cn(
        'relative w-[min(90%,900px)] bg-primary/20',
        sender === user.userName ? 'self-end bg-purple-700/10' : '',
      )}
    >
      <CardHeader>
        <CardTitle className='text-lg'>
          {sender === user.userName ? 'You' : 'Anonymous'}
        </CardTitle>
        <CardDescription>Sent: {formatCustomDate(createdAt)}</CardDescription>
      </CardHeader>
      <CardContent className='text-gray-300'>{message}</CardContent>

      <CheckCheck className='absolute bottom-2 right-2 h-4 w-4 text-muted' />
    </Card>
  );
};

export default MessageCard;
