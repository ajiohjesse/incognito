'use client';

import Spinner from '@/app/components/spinner';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { useLogin } from '@/network/react-query/auth/hooks';
import { useState } from 'react';

const LoginForm = () => {
  const [userName, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const { mutate, isLoading } = useLogin();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      userName,
      password,
    });
  };

  return (
    <form className='grid gap-6' onSubmit={handleLogin}>
      <div className='grid gap-2'>
        <label htmlFor='id'>Username</label>
        <Input
          placeholder='Enter username'
          id='username'
          value={userName}
          onChange={e => setUserId(e.target.value.trim().toLowerCase())}
        />
      </div>

      <div className='grid gap-2'>
        <label htmlFor='password'>Password</label>
        <Input
          placeholder='Enter Password'
          id='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <Button
        type='submit'
        size='sm'
        className='mt-4'
        disabled={!userName || !password || isLoading}
      >
        {isLoading ? <Spinner className='border-white' /> : 'Login'}
      </Button>
    </form>
  );
};

export default LoginForm;
