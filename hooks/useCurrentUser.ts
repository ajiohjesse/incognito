import { userStore } from '@/stores/userStore';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';

const useCurrentUser = () => {
  const router = useRouter();
  const user = useRecoilValue(userStore);

  if (!user) {
    router.replace('/');
    throw new Error('User is not authenticated');
  }

  return user;
};

export default useCurrentUser;
