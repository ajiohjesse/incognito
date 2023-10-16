'use client';

import { Copy, Share2 } from 'lucide-react';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'next-share';

interface Props {
  link: string;
}

const ShareButtons = ({ link }: Props) => {
  const DEFAULT_MESSAGE = `Write a secret anonymous message for me.. I won't know who wrote it.. ${link}`;

  return (
    <div className='flex items-center gap-4'>
      <FacebookShareButton
        blankTarget
        url={link}
        quote={DEFAULT_MESSAGE}
        hashtag={'#incognito'}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <WhatsappShareButton
        blankTarget
        url={link}
        title={DEFAULT_MESSAGE}
        separator=':: '
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <TwitterShareButton blankTarget url={link} title={DEFAULT_MESSAGE}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <button
        type='button'
        title='copy link'
        className='grid h-8 w-8 place-items-center rounded-full bg-slate-100'
      >
        <Copy className='text-primary' width={16} height={16} />
      </button>
      <button
        type='button'
        title='share link'
        className='grid h-8 w-8 place-items-center rounded-full bg-slate-100'
      >
        <Share2 className='text-primary' width={16} height={16} />
      </button>
    </div>
  );
};

export default ShareButtons;
