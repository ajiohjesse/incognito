import { getUserFromToken } from '@/lib/utils';
import cookies from 'js-cookie';
import { atom } from 'recoil';

interface User {
  userName: string;
  userId: string;
}

export const userStore = atom<User | null>({
  key: 'user',
  default: (async () => {
    return await getUser();
  })(),
});

async function getUser() {
  const userToken = cookies.get('IncognitoUser');

  const user = await getUserFromToken(userToken);
  return user;
}
