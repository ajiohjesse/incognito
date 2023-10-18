import AccountHeader from './account-header';
import Profile from './profile';
import { TabHeaders } from './tab-headers';

const AccountPage = () => {
  return (
    <main>
      <AccountHeader />

      <div className='container grid gap-6 py-4 sm:py-8 lg:grid-cols-[1fr,400px] lg:gap-16'>
        <TabHeaders />

        <Profile />
      </div>
    </main>
  );
};

export default AccountPage;
