'use client';

import { InfoIcon } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import Spinner from '../spinner';

const HotToast = () => {
  return (
    <Toaster
      toastOptions={{
        icon: <InfoIcon />,

        style: {
          background: 'var(--background)',
          border: '1px solid var(--border)',
          color: 'var(--foreground)',
          display: 'grid',
          gridTemplateColumns: '30px 1fr',
          justifyItems: 'start',
          borderRadius: '5px',
          padding: '16px 32px',
          fontWeight: 600,
          zIndex: 2000,
        },
        success: {
          style: {
            background: '#10B981',
            color: 'white',
          },
        },
        error: {
          style: {
            background: '#F87171',
          },
        },
        loading: {
          icon: <Spinner />,
          className: 'bg-red-500',
        },
      }}
    />
  );
};

export default HotToast;
