import illustration from '@/assets/illus.svg';
import Image from 'next/image';
import Link from 'next/link';
import InfoCards from './components/hero/info-cards';
import { Button } from './components/ui/button';
import Typewriter from './components/ui/typewriter';

export default function Home() {
  return (
    <main className='w-full'>
      <section className='container space-y-8 py-12 md:py-16 lg:pt-0'>
        <div className='grid items-center gap-[30px] lg:grid-cols-2 lg:gap-[60px]'>
          <div className='mx-auto grid max-w-[700px] text-center lg:text-left'>
            <div className='mb-8 space-y-4 '>
              <h1 className='text-4xl font-semibold leading-relaxed transition duration-700 animate-in zoom-in-75 slide-in-from-top-10 sm:text-5xl sm:leading-[4rem]'>
                <span className='block text-primary'>
                  <Typewriter
                    words={['Send', 'Receive']}
                    loop
                    delaySpeed={3000}
                    cursorStyle='_'
                    cursorBlinking
                    typeSpeed={100}
                    deleteSpeed={50}
                  />
                </span>{' '}
                Messages Anonymously
              </h1>

              <p className='text-sm text-muted transition duration-700 animate-in zoom-in-75 slide-in-from-top-10 md:text-base'>
                Incognito is a special app where you can chat anonymously and
                have some fun with your friends. Share your Profile Link with
                friends and find out what they really think about you without
                revealing your identity.
              </p>
            </div>

            <div className='grid gap-4 transition duration-700 animate-in zoom-in-75 slide-in-from-top-10 sm:grid-cols-2'>
              <Button asChild>
                <Link href='/auth/register'>Get started</Link>
              </Button>

              <Button asChild variant='outline'>
                <Link href='/auth/login'>Retrive Messages</Link>
              </Button>
            </div>
          </div>
          <div className='grid place-items-center'>
            <Image
              src={illustration}
              alt='illustration'
              width={600}
              height={600}
              priority
            />
          </div>
        </div>
      </section>

      <section className='pb-20'>
        <div className='container mb-16 text-center md:mb-24'>
          <h2 className='mb-4 text-3xl font-semibold'>Why choose Incognito?</h2>
          <p className='mx-auto max-w-[700px] text-sm'>
            Our Anonymous Messaging App offers a bunch of fantastic features.
            Let&#39;s take a peek at a few of them. See below for more details.
          </p>
        </div>
        <InfoCards />
      </section>
    </main>
  );
}
