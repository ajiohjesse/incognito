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

const ShareButtons = () => {
  return (
    <div>
      <FacebookShareButton
        blankTarget
        url={'https://github.com/next-share'}
        quote={'next-share is a social share buttons for your next React apps.'}
        hashtag={'#nextshare'}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <WhatsappShareButton
        blankTarget
        url={'https://github.com/next-share'}
        title={'next-share is a social share buttons for your next React apps.'}
        separator=':: '
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <TwitterShareButton
        blankTarget
        url={'https://github.com/next-share'}
        title={'next-share is a social share buttons for your next React apps.'}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <button type='button' title='copy link'>
        <Copy className='text-primary' />
      </button>
      <button type='button' title='share link'>
        <Share2 className='text-primary' />
      </button>
    </div>
  );
};

export default ShareButtons;
