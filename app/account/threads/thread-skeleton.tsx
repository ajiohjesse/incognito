import { Card, CardFooter, CardHeader } from '@/app/components/ui/card';
import { Skeleton } from '@/app/components/ui/skeleton';

const ThreadSkeleton = () => {
  return (
    <Card className='relative h-full'>
      <div className='absolute right-4 top-4'>
        <Skeleton className='h-4 w-[60px] ' />
      </div>
      <CardHeader>
        <Skeleton className='h-4 w-[30%] min-w-[100px]' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-[80%] min-w-[100px]' />
          <Skeleton className='h-4 w-[60%] min-w-[100px]' />
        </div>
      </CardHeader>

      <CardFooter>
        <div className='flex w-full justify-end'>
          <Skeleton className='h-9 w-[60px]' />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ThreadSkeleton;
