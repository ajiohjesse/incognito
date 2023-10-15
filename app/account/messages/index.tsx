'use client';

import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/app/components/ui/card';
import { formatCustomDate, getWords } from '@/lib/utils';
import { useGetSingleMessages } from '@/network/react-query/message/hooks';
import { Info } from 'lucide-react';
import Link from 'next/link';
import MessageSkeleton from './message-skeleton';

const Messages = () => {
  const { data: messages, isLoading } = useGetSingleMessages();

  return (
    <div className='space-y-8'>
      <Alert variant='info'>
        <Info className='h-4 w-4' />
        <AlertDescription>
          These are one-off messages. You can&#39;t reply to these
          conversations.
        </AlertDescription>
      </Alert>

      <div className='space-y-4'>
        {isLoading ? (
          Array(2)
            .fill(null)
            .map((_, index) => <MessageSkeleton key={index} />)
        ) : messages && messages.length ? (
          messages.map(({ _id, createdAt, message }, index) => (
            <Card className='h-full' key={index}>
              <CardHeader>
                <CardDescription>
                  Sent: {formatCustomDate(createdAt)}
                </CardDescription>
              </CardHeader>
              <CardContent className='text-sm text-muted'>
                {getWords(message, 30)}...
              </CardContent>
              <CardFooter>
                <div className='flex w-full justify-end'>
                  <Button
                    asChild
                    variant='outline'
                    size='sm'
                    className='text-secondary'
                  >
                    <Link href={`/account/messages/${_id}`}>Read</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))
        ) : (
          <>No messages</>
        )}
      </div>
    </div>
  );
};

export default Messages;
