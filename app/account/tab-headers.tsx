'use client';

import {
  useGetSingleMessages,
  useGetThreads,
} from '@/network/react-query/message/hooks';
import { Badge } from '../components/ui/badge';

export const MessageHeader = () => {
  const { data: messages } = useGetSingleMessages();

  return (
    <div className='flex gap-2'>
      Messages {messages && <Badge>{messages.length}</Badge>}
    </div>
  );
};

export const ThreadHeader = () => {
  const { data: threads } = useGetThreads();

  return (
    <div className='flex gap-2'>
      Threads {threads && <Badge>{threads.length}</Badge>}
    </div>
  );
};
