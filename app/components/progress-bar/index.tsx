'use client';

import { AppProgressBar } from 'next-nprogress-bar';

const ProgressBar = () => {
  return <AppProgressBar options={{ showSpinner: false }} />;
};

export default ProgressBar;
