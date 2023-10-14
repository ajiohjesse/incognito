'use client';

import { InfoIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const MessageForm = () => {
  const userNameParam = useSearchParams().get('user');
  const [userName, setUserName] = useState(userNameParam || '');
  const [message, setMessage] = useState('');
  const [isThread, setIsThread] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <Alert variant='info' className='mt-4 text-sm'>
        <InfoIcon className='h-4 w-4' />
        <AlertDescription>
          You are about to send an anonymous message
          {userName ? (
            <span>
              {' '}
              to user <span className='font-bold text-primary'>{userName}</span>
            </span>
          ) : (
            '. Please enter a user Id to proceed.'
          )}
        </AlertDescription>
      </Alert>

      <form className='mt-8 flex flex-col gap-6'>
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
            onChange={e => setMessage(e.target.value.trim())}
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

        <Button type='submit' disabled={!userName || !message}>
          Send
        </Button>
      </form>
    </>
  );
};

export default MessageForm;
