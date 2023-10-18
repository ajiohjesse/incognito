'use client';

import { Copy } from 'lucide-react';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'next-share';
import { useToast } from '../components/ui/use-toast';

interface Props {
  link: string;
}

const ShareButtons = ({ link }: Props) => {
  const DEFAULT_MESSAGE = `Write a secret anonymous message for me 🥳🥳. I won't know who wrote it...`;
  const { toast } = useToast();

  const handleCopy = () => {
    if (!navigator || !navigator.clipboard) {
      toast({
        title: 'Failed to copy',
        description: 'Your browser does not support copying to clipboard',
        duration: 1000,
      });
      return;
    }

    navigator.clipboard.writeText(link).then(() => {
      toast({
        title: 'Link Copied',
        description: 'Your unique link has been copied to your clipboard',
        duration: 1000,
      });
    });
  };

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

      <WhatsappShareButton blankTarget url={link} title={DEFAULT_MESSAGE}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <TwitterShareButton blankTarget url={link} title={DEFAULT_MESSAGE}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <button
        type='button'
        title='copy link'
        className='grid h-8 w-8 place-items-center rounded-full bg-slate-200'
        onClick={handleCopy}
      >
        <Copy className='text-primary' width={16} height={16} />
      </button>
    </div>
  );
};

export default ShareButtons;
