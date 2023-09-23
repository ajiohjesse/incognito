import { Badge } from '../components/ui/badge';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs';
import Messages from './messages';
import Profile from './profile';
import Threads from './threads';

const AccountPage = () => {
  return (
    <main>
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
