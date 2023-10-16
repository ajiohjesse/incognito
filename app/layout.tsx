import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from './components/header';
import MessageButton from './components/message-button';
import Providers from './components/providers';
import './globals.css';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Incognito',
  description: `Have you ever wanted to speak 
  your mind without fear of judgment or repercussions? 
  With Incognito, you can finally express yourself 
  freely and anonymously.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <title>Incognito</title>
      </head>
      <body className={font.className}>
        <Providers>
          <Header />
          {children}
          <footer>
            <div className='container py-4'>
              <p className='text-center text-sm text-muted'>
                &copy;2023. Rehx.
              </p>
            </div>
          </footer>

          <MessageButton />
        </Providers>
      </body>
    </html>
  );
}
