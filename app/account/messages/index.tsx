import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Info } from 'lucide-react';
import Link from 'next/link';

const Messages = () => {
  return (
    <div className='space-y-8'>
      <Alert variant='info'>
        <Info className='h-4 w-4' />
        <AlertDescription>
          These are one-off messages. You can&#39;t reply to these
          conversations.
        </AlertDescription>
      </Alert>

      <div className='space-y-4'>
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <Card className='h-full' key={index}>
              <CardHeader>
                <CardTitle className='text-lg'>Anonymous 1f4fg</CardTitle>
                <CardDescription>Sent: 12th Oct, 23</CardDescription>
              </CardHeader>
              <CardContent className='text-sm text-muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                velit totam quisquam temporibus. Voluptatum ullam, doloribus
                magni dolorum atque maiores...
              </CardContent>
              <CardFooter>
                <div className='flex w-full justify-end'>
                  <Button
                    asChild
                    variant='outline'
                    size='sm'
                    className='text-secondary'
                  >
                    <Link href='/account/messages/id'>Read</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Messages;
