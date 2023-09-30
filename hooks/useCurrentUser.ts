import { userStore } from '@/stores/userStore';
import cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';

const useCurrentUser = () => {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userStore);

  const handleLogout = (redirectUrl?: string) => {
    const url = redirectUrl || '/';
    cookies.remove('userToken');
    setUser(null);
    router.push(url);
  };

  return { user, handleLogout };
};

export default useCurrentUser;