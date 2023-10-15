import BackButton from '@/app/components/back-button';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import Thread from '@/network/Models/thread';
import ThreadMessage from '@/network/Models/thread-message';
import { InfoIcon } from 'lucide-react';
import MessageCard from './message-card';
import ReplyThreadButton from './reply-button';

interface PageProps {
  params: { id: string };
}

const ThreadPage = async ({ params: { id } }: PageProps) => {
  const thread = (await Thread.findById(id)) as Thread;
  const messages = (await ThreadMessage.find({
    threadId: id,
  }).sort({ createdAt: -1 })) as ThreadMessage[];

  return (
    <main>
      <div className='sticky top-[60px] z-10 bg-background py-2'>
        <div className='container pb-4'>
          <BackButton />
        </div>

        <div className='container mb-4 flex items-center justify-between gap-4 md:mb-8'>
          <h2 className='text-lg font-bold'>Thread hr667</h2>
          <ReplyThreadButton thread={JSON.parse(JSON.stringify(thread))} />
        </div>
      </div>

      <ScrollArea className='container mb-12 h-[calc(100dvh-200px)] rounded-md bg-black/40 '>
        <Alert variant='info' className='mt-4 text-sm'>
          <InfoIcon className='h-4 w-4' />
          <AlertDescription>New messages will appear first.</AlertDescription>
        </Alert>

        <div className='flex flex-col gap-6 py-8'>
          {messages.map((message, index) => (
            <MessageCard
              key={index}
              message={JSON.parse(JSON.stringify(message))}
            />
          ))}
        </div>

        <Alert variant='info' className='mb-4 text-sm'>
          <InfoIcon className='h-4 w-4' />
          <AlertDescription>End of thread</AlertDescription>
        </Alert>
      </ScrollArea>
    </main>
  );
};

export default ThreadPage;
