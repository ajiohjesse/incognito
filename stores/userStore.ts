import { jwtVerify } from 'jose';
import cookies from 'js-cookie';
import { atom } from 'recoil';

interface User {
  userName: string;
}

export const userStore = atom<User | null>({
  key: 'user',
  default: (async () => {
    return await getUser();
  })(),
});

async function getUser() {
  const userToken = cookies.get('userToken');

  if (!userToken) return null;

  try {
    const result = await jwtVerify(
      userToken,
      new TextEncoder().encode(process.env.JWT || ''),
    );

    return result.payload as unknown as User;
  } catch {
    return null;
  }
}
