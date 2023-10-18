'use client';

import illustration from '@/assets/illustration.svg';
import useCurrentUser from '@/hooks/useCurrentUser';
import Image from 'next/image';
import ShareButtons from './share-buttons';

const AccountHeader = () => {
  const { user } = useCurrentUser();

  if (!user) return null;
  return (
    <div className='container bg-gradient-to-r from-primary  to-purple-700  py-8 text-white md:mt-6 md:rounded-md'>
      <div className='flex items-center justify-between gap-10'>
        <div className=''>
          <h2 className='mb-2 text-3xl font-semibold'>
            Welcome {user.userName}
          </h2>
          <p className='mb-2 text-lg text-muted-foreground'>
            You&#39;ve gone incognito!
          </p>
          <p className='text-xs text-muted-foreground'>
            Share your link below to receive messages
          </p>
          <div className='mt-6'>
            <p className='w-full break-words rounded-md bg-black/30 px-4 py-2 text-sm text-secondary md:w-fit'>
              http://incognito-message.vercel.app/send?user={user.userName}
            </p>

            <div className='mt-4 flex items-center justify-center gap-4 md:justify-start'>
              <ShareButtons
                link={`https://incognito-message.vercel.app/send?user=${user.userName}`}
              />
            </div>
          </div>
        </div>

        <div className='hidden opacity-75 md:block'>
          <Image
            src={illustration}
            alt='illustration'
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AccountHeader;
