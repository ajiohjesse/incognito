import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { Badge } from '@/app/components/ui/badge';
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

const Threads = () => {
  return (
    <div className='space-y-8'>
      <Alert variant='info'>
        <Info className='h-4 w-4' />
        <AlertDescription>
          You can reply to conversations in your thread.
        </AlertDescription>
      </Alert>

      <div className='space-y-4'>
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <Card className='relative h-full' key={index}>
              <Badge className='absolute right-4 top-4 bg-primary'>
                1 new msg
              </Badge>
              <CardHeader>
                <CardTitle className='text-lg'>Thread 1f4fg</CardTitle>
                <CardDescription>
                  <span className='block'>Created On: 12th Oct, 23</span>
                  <span className='block'>Created By: You</span>
                </CardDescription>
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
                    <Link href='/account/threads/id'>Open</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Threads;
