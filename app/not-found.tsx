import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='gradient flex min-h-screen items-center text-white'>
      <div className='container mx-auto flex flex-wrap items-center p-4'>
        <div className='w-full p-4 text-center md:w-7/12 md:text-left'>
          <div className='text-6xl font-medium'>404</div>
          <div className='mb-4 text-xl font-medium md:text-3xl'>
            Oops. This page has gone missing.
          </div>
          <div className='mb-8 text-lg'>
            You may have mistyped the address or the page may have moved.
          </div>
          <Link href='/' className='rounded border border-white p-4'>
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
