'use client';

import { Skeleton } from '@/app/components/ui/skeleton';
import { useGetThreadMessages } from '@/network/react-query/message/hooks';
import { useEffect } from 'react';
import MessageCard, { MessageCardSkeleton } from './message-card';
import ReplyThreadButton from './reply-button';

interface Props {
  threadId: string;
}

const Chat: React.FC<Props> = ({ threadId }) => {
  const { data, isLoading } = useGetThreadMessages(threadId);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [data]);

  return (
    <>
      <div className='chat-bg container flex max-w-[800px] flex-col gap-6 py-12'>
        {isLoading ? (
          <>
            <MessageCardSkeleton />
            <MessageCardSkeleton />
          </>
        ) : data ? (
          data.messages.map((message, index) => (
            <MessageCard key={index} message={message} thread={data.thread} />
          ))
        ) : null}
      </div>

      <div className='fixed bottom-0 left-0 h-[60px] w-full bg-white shadow-md'>
        <div className='container flex h-full items-center justify-end'>
          {isLoading ? (
            <Skeleton className='h-9 w-28' />
          ) : data ? (
            <ReplyThreadButton thread={data.thread} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Chat;
