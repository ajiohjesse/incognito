import BackButton from '@/app/components/back-button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { formatCustomDate } from '@/lib/utils';
import Message from '@/network/Models/message';
import connectDB from '@/network/connectDB';

interface PageProps {
  params: { id: string };
}

const MessagePage = async ({ params: { id } }: PageProps) => {
  await connectDB();
  const { message, createdAt } = (await Message.findById(id)) as SingleMessage;

  return (
    <main>
      <div className='container py-2 md:py-6'>
        <BackButton />
      </div>
      <div className='container max-w-[700px] py-2'>
        <Card>
          <CardHeader>
            <CardTitle>Anonymous</CardTitle>
            <CardDescription>
              Sent: {formatCustomDate(createdAt)}
            </CardDescription>
          </CardHeader>

          <CardContent className='text-gray-300'>{message}</CardContent>
        </Card>
      </div>
    </main>
  );
};

export default MessagePage;
