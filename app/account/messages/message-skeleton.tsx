import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/app/components/ui/card';
import { Skeleton } from '@/app/components/ui/skeleton';

const MessageSkeleton = () => {
  return (
    <Card className='h-full'>
      <CardHeader>
        <Skeleton className='h-4 w-[30%] min-w-[100px]' />
      </CardHeader>
      <CardContent className='text-sm text-muted'>
        <div className='space-y-2'>
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-[50%]' />
        </div>
      </CardContent>
      <CardFooter>
        <div className='flex w-full justify-end'>
          <Skeleton className='h-9 w-[60px]' />
        </div>
      </CardFooter>
    </Card>
  );
};

export default MessageSkeleton;
