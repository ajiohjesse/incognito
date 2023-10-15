'use client';

import useCurrentUser from '@/hooks/useCurrentUser';
import {
  useSendSingleMessage,
  useSendThreadMessage,
} from '@/network/react-query/message/hooks';
import { InfoIcon } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Spinner from '../components/spinner';
import { Alert, AlertDescription } from '../components/ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../components/ui/alert-dialog';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const MessageForm = () => {
  const { user } = useCurrentUser();
  const userNameParam = useSearchParams().get('user');
  const [userName, setUserName] = useState(userNameParam || '');
  const [message, setMessage] = useState('');
  const [isThread, setIsThread] = useState(false);

  const singleMessageMutation = useSendSingleMessage(() => {
    setMessage('');
  });
  const threadMessageMutation = useSendThreadMessage(() => {
    setMessage('');
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isThread) {
      if (!user) {
        return;
      }

      threadMessageMutation.mutate({
        sender: user.userName,
        reciever: userName,
        message: message.trim(),
      });
    }

    singleMessageMutation.mutate({
      reciever: userName,
      message: message.trim(),
    });
  };

  return (
    <>
      <Alert variant='info' className='mt-4 text-sm'>
        <InfoIcon className='h-4 w-4' />
        <AlertDescription>
          You are about to send an anonymous message
          {userName ? (
            <span>
              {' '}
              to user{' '}
              <span className='font-bold text-secondary'>{userName}</span>
            </span>
          ) : (
            '. Please enter a user Id to proceed.'
          )}
        </AlertDescription>
      </Alert>

      <form className='mt-8 flex flex-col gap-6' onSubmit={handleSubmit}>
        <div className='space-y-2'>
          <label htmlFor='id'>Username</label>
          <Input
            type='text'
            placeholder='Username'
            value={userName}
            onChange={e => setUserName(e.target.value.trim().toLowerCase())}
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='message'>Message</label>
          <Textarea
            placeholder='Type a message'
            className='min-h-[200px]'
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>

        <Alert variant='info' className='mt-4 text-sm'>
          <InfoIcon className='h-4 w-4' />
          <AlertDescription>
            Threads allow both you and the recipient to reply to anonymous
            messages. (You must be logged in)
          </AlertDescription>
        </Alert>

        <div className='flex items-center space-x-2'>
          <Checkbox
            id='messageType'
            checked={isThread}
            onCheckedChange={checked => setIsThread(checked ? true : false)}
          />
          <label
            htmlFor='messageType'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Create a thread
          </label>
        </div>

        {isThread && !user ? (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button disabled={!userName || !message}>Send</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>You are not logged in</AlertDialogTitle>
                <AlertDialogDescription>
                  You must be logged in to create a thread. Click continue to
                  proceed to the login page. If you don&#39;t have an account,
                  you can create a new account.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Link href='/auth/login'>Continue</Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ) : (
          <Button type='submit' disabled={!userName || !message}>
            {singleMessageMutation.isLoading ? (
              <Spinner className='border-white' />
            ) : (
              'Send'
            )}
          </Button>
        )}
      </form>
    </>
  );
};

export default MessageForm;
