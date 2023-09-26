'use client';

import BackButton from '@/app/components/back-button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { useParams, useRouter } from 'next/navigation';

const MessagePage = () => {
  const id = useParams();
  const router = useRouter();

  return (
    <main>
      <div className='container py-2 md:py-6'>
        <BackButton />
      </div>
      <div className='container max-w-[700px] py-2'>
        <Card>
          <CardHeader>
            <CardTitle>Anonymous 7hd6</CardTitle>
            <CardDescription>Sent: 12th Oct, 23</CardDescription>
          </CardHeader>
          <CardContent className='text-muted'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            laboriosam dignissimos nam dolorum neque at inventore, asperiores
            quasi? Eius magni, iusto laboriosam quod qui, deserunt excepturi
            quam tempore, placeat ullam accusamus voluptates. Impedit, cumque
            quos expedita maxime necessitatibus a tenetur quo voluptates totam,
            sequi nobis asperiores incidunt magni adipisci optio? Tempora ea
            facere velit fugiat quas, odio explicabo doloremque obcaecati, optio
            illum animi placeat eaque quae voluptate. Atque, ipsam, nisi
            repudiandae beatae, dolorum optio libero expedita ad quo id itaque
            tempora deleniti veniam. Labore sed quam aut ducimus officiis iusto
            repellendus commodi! Aperiam tempore veritatis dolores, magnam
            laborum ratione vel.
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default MessagePage;
