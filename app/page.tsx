import Link from 'next/link';
import InfoCards from './components/hero/info-cards';
import { Button } from './components/ui/button';
import Typewriter from './components/ui/typewriter';

export default function Home() {
  return (
    <main className='w-full bg-background'>
      <section className='container max-w-[400px] space-y-8 py-16 sm:max-w-[600px] md:max-w-[750px] md:space-y-12'>
        <div className='space-y-4 text-center md:space-y-8'>
          <h1 className='text-4xl font-semibold transition duration-700 animate-in zoom-in-75 slide-in-from-top-10 sm:text-5xl sm:leading-relaxed md:text-6xl md:leading-[4rem]'>
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
            Have you ever wanted to speak your mind without fear of judgment or
            repercussions? With Incognito, you can finally express yourself
            freely and anonymously.
          </p>
        </div>

        <div className='grid gap-4 transition duration-700 animate-in zoom-in-75 slide-in-from-top-10 md:grid-cols-2'>
          <Button asChild>
            <Link href='/auth/register'>Get started</Link>
          </Button>

          <Button asChild variant='outline'>
            <Link href='/auth/login'>Retrive Messages</Link>
          </Button>
        </div>
      </section>

      <section className='pb-20 md:pt-10'>
        <InfoCards />
      </section>
    </main>
  );
}
