import { Button } from '@/app/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/ui/dialog';
import { Textarea } from '@/app/components/ui/textarea';

const ReplyThreadButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='sm'>Reply</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reply thread</DialogTitle>
        </DialogHeader>

        <form className='grid gap-6'>
          <div className='grid gap-2'>
            <label htmlFor='message'>Message</label>
            <Textarea
              placeholder='Enter message'
              id='message'
              className='min-h-[300px]'
            />
          </div>
          <Button type='button' size='sm' className='mt-4'>
            Send
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default ReplyThreadButton;
