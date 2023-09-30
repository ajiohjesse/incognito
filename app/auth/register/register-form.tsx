'use client';

import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

const RegisterForm = () => {
  return (
    <form className='grid gap-6'>
      <div className='grid gap-2'>
        <label htmlFor='username'>Username</label>
        <Input placeholder='Enter username' id='username' />
      </div>

      <div className='grid gap-2'>
        <label htmlFor='password'>Password</label>
        <Input placeholder='Enter Password' id='password' type='password' />
      </div>

      <div className='grid gap-2'>
        <label htmlFor='password'>Confirm Password</label>
        <Input
          placeholder='Retype Password'
          id='confirm-password'
          type='password'
        />
      </div>

      <Button type='submit' size='sm' className='mt-4'>
        Create Account
      </Button>
    </form>
  );
};

export default RegisterForm;
