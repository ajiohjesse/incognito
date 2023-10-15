'use client';

import useCurrentUser from '@/hooks/useCurrentUser';
import ShareButtons from './share-buttons';

const AccountHeader = () => {
  const { user } = useCurrentUser();

  if (!user) return null;
  return (
    <div className='container rounded-md bg-black/20 py-8'>
      <h2 className='mb-2 text-3xl font-semibold'>Welcome {user.userName}</h2>
      <p className='mb-2 text-lg text-muted'>You&#39;ve gone incognito!</p>
      <p className='text-xs text-muted'>
        Share your link below to receive messages
      </p>
      <div className='mt-6'>
        <p className='w-full break-words rounded-md bg-black/30 px-4 py-2 text-sm text-secondary md:w-fit'>
          http://incognito-message.vercel.app/send?user={user.userName}
        </p>

        <div className='mt-4 flex items-center justify-center gap-4 md:justify-start'>
          <ShareButtons />
        </div>
      </div>
    </div>
  );
};

export default AccountHeader;
