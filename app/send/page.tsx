import BackButton from '../components/back-button';
import MessageForm from './message-form';

const SendMessagePage = () => {
  return (
    <main>
      <div className='container py-2 md:py-6'>
        <BackButton />
      </div>

      <div className='container max-w-[700px] py-6 md:py-12'>
        <h2 className='text-3xl font-bold'>Send a message</h2>

        <MessageForm />
      </div>
    </main>
  );
};

export default SendMessagePage;
