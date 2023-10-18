'use client';

import {
  useGetSingleMessages,
  useGetThreads,
} from '@/network/react-query/message/hooks';
import { tabStore } from '@/stores/tabStore';
import { useRecoilState } from 'recoil';
import { Badge } from '../components/ui/badge';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs';
import Messages from './messages';
import Threads from './threads';

export const TabHeaders = () => {
  const [activeTab, setActiveTab] = useRecoilState(tabStore);

  return (
    <Tabs value={activeTab}>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='messages' onClick={() => setActiveTab('messages')}>
          <MessageHeader />
        </TabsTrigger>

        <TabsTrigger value='threads' onClick={() => setActiveTab('threads')}>
          <ThreadHeader />
        </TabsTrigger>
      </TabsList>

      <TabsContent value='messages'>
        <Messages />
      </TabsContent>

      <TabsContent value='threads'>
        <Threads />
      </TabsContent>
    </Tabs>
  );
};

const MessageHeader = () => {
  const { data: messages } = useGetSingleMessages();

  return (
    <div className='flex gap-2'>
      Messages {messages && <Badge>{messages.length}</Badge>}
    </div>
  );
};

const ThreadHeader = () => {
  const { data: threads } = useGetThreads();

  return (
    <div className='flex gap-2'>
      Threads {threads && <Badge>{threads.length}</Badge>}
    </div>
  );
};
