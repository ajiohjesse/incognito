'use client';

import Spinner from '@/app/components/spinner';
import { Button } from '@/app/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/ui/dialog';
import { Textarea } from '@/app/components/ui/textarea';
import useCurrentUser from '@/hooks/useCurrentUser';
import { useSendThreadMessage } from '@/network/react-query/message/hooks';
import { Send } from 'lucide-react';
import { useState } from 'react';

interface Props {
  thread: Thread;
}

const ReplyThreadButton = ({ thread }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { mutate, isLoading } = useSendThreadMessage(() => {
    setIsOpen(false);
    if (window) window.scrollTo(0, document.body.scrollHeight);
  });

  const { user } = useCurrentUser();

  if (!user) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      sender: user.userId,
      receiver:
        thread.participants.find(participant => participant !== user.userId) ||
        '',
      threadId: thread._id,
      message: message.trim(),
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={open => setIsOpen(open)}>
      <DialogTrigger asChild>
        <Button size='sm' className='flex items-center gap-4' type='button'>
          <Send />
          Reply
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reply thread</DialogTitle>
        </DialogHeader>

        <form className='grid gap-6' onSubmit={handleSubmit}>
          <div className='grid gap-2'>
            <label htmlFor='message'>Message</label>
            <Textarea
              placeholder='Enter message'
              id='message'
              className='min-h-[100px]'
              onChange={e => setMessage(e.target.value)}
            />
          </div>
          <Button
            type='submit'
            size='sm'
            className='mt-4'
            disabled={!message || isLoading}
          >
            {isLoading ? <Spinner className='border-white' /> : 'Send'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default ReplyThreadButton;
