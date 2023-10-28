'use client';
import Spinner from '@/app/components/spinner';
import { Button } from '@/app/components/ui/button';
import { Trash2 } from 'lucide-react';

// @ts-expect-error
import { useFormStatus } from 'react-dom';

const DeleteButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      size='sm'
      type='submit'
      variant='destructive'
      disabled={pending}
      className='w-full min-w-[100px]'
    >
      {pending ? (
        <Spinner className='border-white' />
      ) : (
        <>
          <Trash2 className='mr-2 h-4 w-4' /> Delete
        </>
      )}
    </Button>
  );
};

export default DeleteButton;
