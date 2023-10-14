'use client';

import Spinner from '@/app/components/spinner';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { useRegister } from '@/network/react-query/auth/hooks';
import { useState } from 'react';

const USERNAME_REGEXP = /^[A-Za-z0-9_]+$/;
const RESERVED_USERNAMES = [
  'rehx',
  'username',
  'admin',
  'administrator',
  'owner',
];

const RegisterForm = () => {
  const defaultUserState = {
    userName: '',
    password: '',
    confirmPassword: '',
  };

  const [userDetails, setUserDetails] = useState(defaultUserState);
  const [errors, setErrors] = useState(defaultUserState);
  const { mutate, isLoading } = useRegister();

  const handleFormChange = (
    field: keyof typeof defaultUserState,
    value: string,
  ) => {
    setUserDetails(prev => ({
      ...prev,
      [field]: field === 'userName' ? value.trim().toLowerCase() : value.trim(),
    }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // check required fields
    Object.entries(userDetails).forEach(value => {
      if (!value[1]) {
        setErrors(prev => ({ ...prev, [value[0]]: 'Field is required' }));
        return;
      }

      if (value[0] === 'userName') {
        console.log(value[0]);
        const userName = value[1];
        if (!userName.match(USERNAME_REGEXP)) {
          setErrors(prev => ({
            ...prev,
            [value[0]]: 'username contains invalid characters',
          }));
          return;
        }

        if (RESERVED_USERNAMES.includes(userName)) {
          setErrors(prev => ({
            ...prev,
            [value[0]]: 'This username is reserved',
          }));
          return;
        }
      }
    });

    if (userDetails.password.length < 4) {
      setErrors(prev => ({
        ...prev,
        password: 'Password should be at least four (4) characters',
      }));
      return;
    }

    if (userDetails.password !== userDetails.confirmPassword) {
      setErrors(prev => ({
        ...prev,
        confirmPassword: 'Passwords do not match',
      }));
      return;
    }

    mutate({
      userName: userDetails.userName,
      password: userDetails.password,
    });
  };

  return (
    <form
      className='grid gap-6'
      onSubmit={handleRegister}
      onChange={() => setErrors(defaultUserState)}
    >
      <div className='grid gap-2'>
        <label htmlFor='username'>Username</label>
        <Input
          placeholder='Enter username'
          id='username'
          value={userDetails.userName}
          onChange={e => handleFormChange('userName', e.target.value)}
        />
        <p className='text-xs text-red-500'>{errors.userName}</p>
      </div>

      <div className='grid gap-2'>
        <label htmlFor='password'>Password</label>
        <Input
          placeholder='Enter Password'
          id='password'
          type='password'
          showPasswordToggle
          onChange={e => handleFormChange('password', e.target.value)}
        />
        <p className='text-xs text-red-500'>{errors.password}</p>
      </div>

      <div className='grid gap-2'>
        <label htmlFor='password'>Confirm Password</label>
        <Input
          placeholder='Retype Password'
          id='confirm-password'
          type='password'
          showPasswordToggle
          onChange={e => handleFormChange('confirmPassword', e.target.value)}
        />
        <p className='text-xs text-red-500'>{errors.confirmPassword}</p>
      </div>

      <Button type='submit' size='sm' className='mt-4'>
        {isLoading ? <Spinner className='border-white' /> : 'Create Account'}
      </Button>
    </form>
  );
};

export default RegisterForm;
