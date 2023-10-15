import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs';
import AccountHeader from './account-header';
import Messages from './messages';
import Profile from './profile';
import { MessageHeader, ThreadHeader } from './tab-headers';
import Threads from './threads';

const AccountPage = () => {
  return (
    <main>
      <AccountHeader />

      <div className='container grid gap-6 py-4 sm:py-8 lg:grid-cols-[1fr,400px] lg:gap-16'>
        <Tabs defaultValue='messages'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='messages'>
              <MessageHeader />
            </TabsTrigger>

            <TabsTrigger value='threads'>
              <ThreadHeader />
            </TabsTrigger>
          </TabsList>

          <TabsContent value='messages'>
            <Messages />
          </TabsContent>

          <TabsContent value='threads'>
            <Threads />
          </TabsContent>
        </Tabs>

        <Profile />
      </div>
    </main>
  );
};

export default AccountPage;
