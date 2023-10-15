'use client';

import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import useCurrentUser from '@/hooks/useCurrentUser';
import { formatCustomDate } from '@/lib/utils';
import { useGetThreads } from '@/network/react-query/message/hooks';
import { Info } from 'lucide-react';
import Link from 'next/link';
import ThreadSkeleton from './thread-skeleton';

const Threads = () => {
  const { user } = useCurrentUser();
  const { data: threads, isLoading } = useGetThreads();

  if (!user) return null;

  const getThreadOwner = (threadMembers: [string, string]) => {
    if (threadMembers[0] === user.userName) {
      return 'You';
    } else {
      return 'Anonymous';
    }
  };

  const getThreadMember = (threadMembers: [string, string]) => {
    if (threadMembers[1] === user.userName) {
      return 'Anonymous';
    } else {
      return threadMembers[1];
    }
  };

  return (
    <div className='space-y-8'>
      <Alert variant='info'>
        <Info className='h-4 w-4' />
        <AlertDescription>
          You can reply to conversations in your thread.
        </AlertDescription>
      </Alert>

      <div className='space-y-4'>
        {isLoading ? (
          Array(2)
            .fill(null)
            .map((_, index) => <ThreadSkeleton key={index} />)
        ) : threads && threads.length ? (
          threads.map(({ _id, participants, createdAt }, index) => (
            <Card className='relative h-full' key={index}>
              <Badge className='absolute right-4 top-4 bg-primary'>
                1 new msg
              </Badge>
              <CardHeader>
                <CardTitle className='text-lg'>
                  {getThreadMember(participants)}
                </CardTitle>
                <CardDescription>
                  <span className='block'>
                    Created On: {formatCustomDate(createdAt)}
                  </span>
                  <span className='block'>
                    Created By: {getThreadOwner(participants)}
                  </span>
                </CardDescription>
              </CardHeader>

              <CardFooter>
                <div className='flex w-full justify-end'>
                  <Button
                    asChild
                    variant='outline'
                    size='sm'
                    className='text-secondary'
                  >
                    <Link href={`/account/threads/${_id}`}>Open</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))
        ) : (
          <>No threads</>
        )}
      </div>
    </div>
  );
};

export default Threads;
