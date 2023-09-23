'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Variants, motion } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      duration: 500,
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const InfoCards = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="container flex flex-wrap gap-8"
    >
      {HERO_INFO.map(({ title, content }, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          variants={itemVariants}
          className="flex-1 min-w-[240px]"
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-lg">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted">
              {content}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default InfoCards;

const HERO_INFO: { title: string; content: string }[] = [
  {
    title: 'Your Identity, Your Secret',
    content: `Incognito ensures your identity remains hidden. 
      Chat, share, and connect without revealing your 
      personal information. Your secrets are safe with us.`,
  },
  {
    title: 'Real Conversations, Real Connections',
    content: `Engage in genuine conversations with 
    people from around the world. Discover new friends, 
    share stories, and explore the depths of human connection.`,
  },
  {
    title: 'Endless Possibilities',
    content: `Whether it's seeking advice, sharing your thoughts, 
    or making new friends, Incognito opens the door to endless 
    possibilities. You're in control of your conversations.`,
  },
  {
    title: 'Join the Incognito Community Today',
    content: `Unleash your voice and connect with others like never before. 
    Join Incognito now and start your journey to anonymous conversations 
    and authentic connections.`,
  },
];
