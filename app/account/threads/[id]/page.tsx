import BackButton from '@/app/components/back-button';
import Thread from '@/network/Models/thread';
import ThreadMessage from '@/network/Models/thread-message';
import connectDB from '@/network/connectDB';
import MessageCard from './message-card';
import ReplyThreadButton from './reply-button';

interface PageProps {
  params: { id: string };
}

const ThreadPage = async ({ params: { id } }: PageProps) => {
  await connectDB();
  const thread = (await Thread.findById(id)) as Thread;
  const messages = (await ThreadMessage.find({
    threadId: id,
  })) as ThreadMessage[];

  return (
    <main className=''>
      <div className='sticky top-[60px] z-10 bg-primary py-2'>
        <div className='container py-2 font-semibold text-white'>
          <BackButton />
        </div>
      </div>

      <div className='chat-bg container px-2 flex max-w-[800px] flex-col gap-6 py-12'>
        {messages.map((message, index) => (
          <MessageCard
            key={index}
            message={JSON.parse(JSON.stringify(message))}
          />
        ))}
      </div>

      <div className='fixed bottom-0 left-0 h-[50px] w-full bg-white shadow-md'>
        <div className='container flex h-full items-center justify-end'>
          <ReplyThreadButton thread={JSON.parse(JSON.stringify(thread))} />
        </div>
      </div>
    </main>
  );
};

export default ThreadPage;
