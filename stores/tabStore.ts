import { atom } from 'recoil';

export const tabStore = atom<'messages' | 'threads'>({
  key: 'tabStore',
  default: 'messages',
});
