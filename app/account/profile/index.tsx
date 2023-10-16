'use client';

import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import useCurrentUser from '@/hooks/useCurrentUser';
import { cn } from '@/lib/utils';
import { User, X } from 'lucide-react';
import { useState } from 'react';

const Profile = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isEditPassword, setIsEditPassword] = useState(false);
  const { user, handleLogout } = useCurrentUser();

  if (!user) return null;

  return (
    <>
      {!isProfileOpen && (
        <button
          className='fixed right-[10%] top-3 z-[11] rounded-full p-2 transition hover:bg-primary/20 lg:hidden'
          onClick={() => setProfileOpen(true)}
          type='button'
          title='profile'
        >
          <User className='text-primary' />
        </button>
      )}

      <div
        className={cn(
          'fixed top-[60px] z-[11] h-full w-full rounded-md bg-card duration-500 animate-in slide-in-from-right-32 lg:sticky lg:top-[80px] lg:h-fit lg:border lg:shadow-md',
          isProfileOpen ? 'right-0' : '-right-[100%]',
        )}
      >
        <div className='relative mx-auto max-w-[400px] px-8 py-12 lg:py-8'>
          <div className='mb-8 space-y-2'>
            <button
              onClick={() => setProfileOpen(false)}
              className='absolute right-6 top-0 rounded-full p-2 transition hover:bg-primary/20 lg:hidden'
              type='button'
              title='close profile'
            >
              <X className='text-primary' />
            </button>
            <h3 className='text-2xl font-semibold'>Profile</h3>
            <p>Hello, {user.userName}.</p>
          </div>

          {isEditPassword ? (
            <form className='grid h-fit gap-4 animate-in zoom-in-75'>
              <div className='grid gap-2'>
                <label htmlFor='password'>Change Password</label>
                <Input
                  type='password'
                  placeholder='Enter new password'
                  id='password'
                  autoComplete='off'
                />
              </div>

              <Button type='submit' size='sm' className='my-2'>
                Submit
              </Button>
              <Button
                variant='outline'
                type='reset'
                size='sm'
                className='mb-4'
                onClick={() => setIsEditPassword(false)}
              >
                Cancel
              </Button>
            </form>
          ) : (
            <Button
              onClick={() => setIsEditPassword(true)}
              size='sm'
              className='w-full'
            >
              Edit Password
            </Button>
          )}

          <div className='mt-4'>
            <Button
              size='sm'
              className='w-full'
              variant='outline'
              onClick={() => handleLogout()}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
