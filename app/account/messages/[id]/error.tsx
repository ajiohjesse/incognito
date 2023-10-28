'use client';

import BackButton from '@/app/components/back-button';
import { Alert } from '@/app/components/ui/alert';

const MessageErrorPage = () => {
  return (
    <main>
      <div className='container'>
        <div className='py-4'>
          <BackButton />
        </div>

        <div className='grid place-items-center gap-6 py-20 text-center'>
          <h1 className='text-2xl font-bold'>An Error Occurred</h1>

          <Alert variant='info' className='max-w-[300px]'>
            Unable to fetch message
          </Alert>
        </div>
      </div>
    </main>
  );
};

export default MessageErrorPage;
