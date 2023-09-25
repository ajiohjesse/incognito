'use client';

import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { cn } from '@/lib/utils';
import { User, X } from 'lucide-react';
import { useState } from 'react';

const Profile = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);

  return (
    <>
      {!isProfileOpen && (
        <button
          className='fixed right-[10%] top-3 z-[11] rounded-full p-2 transition hover:bg-muted/50 lg:hidden'
          onClick={() => setProfileOpen(true)}
          type='button'
          title='profile'
        >
          <User />
        </button>
      )}

      <div
        className={cn(
          'fixed top-[60px] z-[11] h-full w-full rounded-md bg-background duration-500 animate-in slide-in-from-right-32 lg:sticky lg:top-[80px] lg:h-fit lg:border lg:bg-black/20',
          isProfileOpen ? 'right-0' : '-right-[100%]',
        )}
      >
        <div className='relative mx-auto max-w-[400px] px-8 py-12 lg:py-8'>
          <div className='mb-8 space-y-2'>
            <button
              onClick={() => setProfileOpen(false)}
              className='absolute right-6 top-0 rounded-full p-2 transition hover:bg-muted/50 lg:hidden'
              type='button'
              title='close profile'
            >
              <X />
            </button>
            <h3 className='text-2xl font-semibold'>Profile</h3>
            <p>Hello, Anonymous user.</p>
          </div>

          <form className='grid h-fit gap-4'>
            <div className='grid gap-2'>
              <label htmlFor='password'>Change Password</label>
              <Input
                type='password'
                placeholder='Enter new password'
                id='password'
                autoComplete='off'
              />
            </div>

            <Button type='button' size='sm' className='mt-4'>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
