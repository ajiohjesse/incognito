'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import ProgressBar from '../progress-bar';
import { Toaster } from '../ui/toaster';

const queryClient = new QueryClient();

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ProgressBar />
        <Toaster />
        {children}
      </RecoilRoot>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default Providers;
