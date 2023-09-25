import { Badge } from '../components/ui/badge';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs';
import Messages from './messages';
import Profile from './profile';
import ShareButtons from './share-buttons';
import Threads from './threads';

const AccountPage = () => {
  return (
    <main>
      <section>
        <div className='container rounded-md bg-black/20 py-8'>
          <h2 className='mb-2 text-3xl font-semibold'>
            Welcome Anonymous 6567
          </h2>
          <p className='mb-2 text-lg text-muted'>You&#39;ve gone incognito!</p>
          <p className='text-xs text-muted'>
            Share your link below to receive messages
          </p>
          <div className='mt-6'>
            <p className='w-full break-words rounded-md bg-black/30 px-4 py-2 text-sm md:w-fit'>
              http://incognito.com.ng/send?user=5346
            </p>

            <div className='mt-4 flex items-center justify-center gap-4 md:justify-start'>
              <ShareButtons />
            </div>
          </div>
        </div>
      </section>

      <div className='container grid gap-6 py-4 sm:py-8 lg:grid-cols-[1fr,400px] lg:gap-16'>
        <Tabs defaultValue='threads' className=''>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='threads'>
              <div className='flex gap-2'>
                Threads <Badge>10</Badge>
              </div>
            </TabsTrigger>

            <TabsTrigger value='messages'>
              <div className='flex gap-2'>
                Messages <Badge className='text-xs'>10</Badge>
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value='threads'>
            <Threads />
          </TabsContent>

          <TabsContent value='messages'>
            <Messages />
          </TabsContent>
        </Tabs>

        <Profile />
      </div>
    </main>
  );
};

export default AccountPage;
