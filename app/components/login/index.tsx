'use client';

import { useLogin } from '@/network/react-query/auth/hooks';
import { useState } from 'react';
import Spinner from '../spinner';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Input } from '../ui/input';

const Login = ({ label }: { label: React.ReactNode }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const { mutate, isLoading } = useLogin();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      userId,
      password,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{label}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription className='leading-relaxed'>
            Login to retrieve your anonymous conversations.
          </DialogDescription>
        </DialogHeader>

        <form className='grid gap-6' onSubmit={handleLogin}>
          <div className='grid gap-2'>
            <label htmlFor='id'>User ID</label>
            <Input
              placeholder='Enter user ID'
              id='id'
              value={userId}
              onChange={e => setUserId(e.target.value)}
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
            disabled={!userId || !password || isLoading}
          >
            {isLoading ? <Spinner className='border-white' /> : 'Login'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
