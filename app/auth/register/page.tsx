import Link from 'next/link';
import RegisterForm from './register-form';

const RegisterPage = () => {
  return (
    <div className='container grid max-w-[500px] gap-6 py-12 md:py-24'>
      <div className='grid gap-4'>
        <h2 className='text-2xl font-bold md:text-4xl'>Register</h2>
        <p>
          Enter a unique username and password and we&#39;ll create an account
          for you. If you already have an account, you can{' '}
          <Link href='/auth/register' className='text-primary'>
            proceed to login.
          </Link>
        </p>
      </div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
