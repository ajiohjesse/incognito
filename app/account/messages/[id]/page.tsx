import BackButton from '@/app/components/back-button';
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
} from '@/app/components/ui/alert-dialog';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { formatCustomDate } from '@/lib/utils';
import Message from '@/network/Models/message';
import connectDB from '@/network/connectDB';
import { ObjectId } from 'bson';
import { redirect } from 'next/navigation';
import DeleteButton from './deleteButton';

interface PageProps {
  params: { id: string };
}

function isValidObjectId(str: string) {
  try {
    new ObjectId(str);
    return true;
  } catch (err) {
    return false;
  }
}

const MessagePage = async ({ params: { id } }: PageProps) => {
  if (!isValidObjectId(id)) {
    throw new Error('Invalid message ID');
  }

  await connectDB();
  const messageRes = (await Message.findById(id)) as SingleMessage;
  if (!messageRes) throw new Error('Message not found');
  const { message, createdAt } = messageRes;

  const deleteMessage = async () => {
    'use server';
    console.log('server action');

    await Message.findByIdAndDelete(id);
    redirect('/account');
  };

  return (
    <main>
      <div className='container py-2 md:py-6'>
        <BackButton />
      </div>
      <div className='container max-w-[700px] py-2'>
        <Card>
          <CardHeader>
            <CardTitle className='text-primary'>Anonymous</CardTitle>
            <CardDescription>
              Sent: {formatCustomDate(createdAt)}
            </CardDescription>
          </CardHeader>

          <CardContent>{message}</CardContent>

          <CardFooter className='justify-end'>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant='outline' size='sm' type='button'>
                  Delete
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent className='max-w-[300px]'>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to delete this message?
                  </AlertDialogTitle>

                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    this message.
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogCancel asChild>
                    <Button size='sm' variant='outline' type='button'>
                      Cancel
                    </Button>
                  </AlertDialogCancel>

                  <form action={deleteMessage}>
                    <AlertDialogAction asChild>
                      <DeleteButton />
                    </AlertDialogAction>
                  </form>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default MessagePage;
