'use client';

import BackButton from '@/app/components/back-button';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { CheckCheck, InfoIcon } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import ReplyThreadButton from './reply-button';

const ThreadPage = () => {
  const id = useParams();
  const router = useRouter();

  return (
    <main>
      <div className='sticky top-[60px] z-10 bg-background py-2'>
        <div className='container pb-4'>
          <BackButton />
        </div>

        <div className='container mb-4 flex items-center justify-between gap-4 md:mb-8'>
          <h2 className='text-lg font-bold'>Thread hr667</h2>
          <ReplyThreadButton />
        </div>
      </div>

      <ScrollArea className='container mb-12 h-[calc(100dvh-200px)] rounded-md bg-black/40 '>
        <Alert variant='info' className='mt-4 text-sm'>
          <InfoIcon className='h-4 w-4' />
          <AlertDescription>New messages will appear first.</AlertDescription>
        </Alert>

        <div className='flex flex-col gap-6 py-8'>
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <Card
                className='relative w-[min(90%,900px)] bg-primary/20 even:self-end even:bg-purple-700/10'
                key={index}
              >
                <CardHeader>
                  <CardTitle className='text-lg'>Anonymous 7hd6</CardTitle>
                  <CardDescription>Sent: 12th Oct, 23</CardDescription>
                </CardHeader>
                <CardContent className='text-gray-300'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat laboriosam dignissimos nam dolorum neque at inventore,
                  asperiores quasi? Eius magni, iusto laboriosam quod qui,
                  deserunt excepturi quam tempore, placeat ullam accusamus
                  voluptates. Impedit, cumque quos expedita maxime
                  necessitatibus a tenetur quo voluptates totam, sequi nobis
                  asperiores incidunt magni adipisci optio? Tempora ea facere
                  velit fugiat quas, odio explicabo doloremque obcaecati, optio
                  illum animi placeat eaque quae voluptate. Atque, ipsam, nisi
                  repudiandae beatae, dolorum optio libero expedita ad quo id
                  itaque tempora deleniti veniam. Labore sed quam aut ducimus
                  officiis iusto repellendus commodi! Aperiam tempore veritatis
                  dolores, magnam laborum ratione vel.
                </CardContent>

                <CheckCheck className='absolute bottom-2 right-2 h-4 w-4 text-muted' />
              </Card>
            ))}
        </div>

        <Alert variant='warning' className='my-4 text-sm'>
          <InfoIcon className='h-4 w-4' />
          <AlertDescription>End of thread</AlertDescription>
        </Alert>
      </ScrollArea>
    </main>
  );
};

export default ThreadPage;
