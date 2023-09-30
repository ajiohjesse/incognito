import Link from 'next/link';
import LoginForm from './login-form';

const LoginPage = () => {
  return (
    <div className='container grid max-w-[500px] gap-6 py-12 md:py-24'>
      <div className='grid gap-4'>
        <h2 className='text-2xl font-bold md:text-4xl'>Login</h2>
        <p>
          Login to retrieve your anonymous conversations. Don&#39;t have an
          account?{' '}
          <Link href='/auth/register' className='text-primary'>
            Sign up.
          </Link>
        </p>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
