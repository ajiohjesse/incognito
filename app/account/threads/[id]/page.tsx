import BackButton from '@/app/components/back-button';
import Chat from './chat';

interface PageProps {
  params: { id: string };
}

const ThreadPage = async ({ params: { id } }: PageProps) => {
  return (
    <main className=''>
      <div className='sticky top-[60px] z-10 bg-primary py-2'>
        <div className='container py-2 font-semibold text-white'>
          <BackButton />
        </div>
      </div>

      <Chat threadId={id} />
    </main>
  );
};

export default ThreadPage;
